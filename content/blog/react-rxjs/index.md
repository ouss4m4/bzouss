---
title: React, Typescript & RXJS
date: "2021-01-04"
description: push based approach with React & Rxjs.
---

I tried the Push Based Architecture last year and it helped me scale an Angular app nicely using Rxjs and async pipes (Angular subscriptions). coming to react i had to give it a try in this small app that fetches users on user interactions.

![app preview](./snapshot.JPG)

## Dummy api

i used the lovely [https://dummyapi.io](https://dummyapi.io) for it's simplicity and free calls. and used the ajax call from RXJS instead of Fetch or Axios. to have a stream from the beginning.

```tsx
export const fetchUsers = (
  page: number,
  limit: number
): Observable<IUser[]> => {
  return ajax
    .getJSON<{ data: IUser[] }>(
      `${BASE_URL}/user?page=${page}&limit=${limit}`,
      {
        "app-id": APP_ID,
      }
    )
    .pipe(
      map(({ data }) => data),
      catchError(error => {
        console.log("raw error: ", error)
        return throwError(error)
      })
    )
}
```

## Presentational Components

i created 3 react functional components with one single purpose. Render the Data passed and execute a callback if provided.

`Paginator.tsx` receives number of pages and the current dataPerPage value. ad 2 functions to changePage and changeDataPerPage.

```tsx
export default function Paginator({
  changePage,
  pages,
  dataPerPage,
  changeDataPerPage,
}: Props): ReactElement {
  const buildButtons = (pages: number): ReactElement[] => {
    let res = []
    for (let i = 0; i < pages; i++) {
      res.push(
        <button key={i} onClick={() => changePage(i)}>
          {i + 1}
        </button>
      )
    }
    return res
  }
  return (
    <>
      <div className="data-select">
        <select
          value={dataPerPage}
          onChange={e => changeDataPerPage(e.target.value)}
        >
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
        <label style={{ fontSize: "14px" }}>Per Page</label>
      </div>
      <div className="paginator">{buildButtons(pages)}</div>
    </>
  )
}
```

`UserList.tsx` receives an array of users and map over it to create UserProfile list.

```tsx
const UserList = ({ list }: UserListProps): ReactElement => {
  return (
    <>
      <div
        style={{
          display: "flex",
          maxWidth: "100vw",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {list.map(user => (
          <UserProfile {...user} key={user.id} />
        ))}
      </div>
    </>
  )
}

export default UserList
```

`UserProfile.tsx` does nothing but renders the user data passed.

```tsx
export default function UserProfile(user: IUser): ReactElement {
  return (
    <div className="profile-wrap" style={{ fontSize: "9px" }}>
      <p>{user.firstName + " " + user.lastName}</p>
      <p>{user.email}</p>
      <p>{user.title}</p>
      <img alt="avatar" src={user.picture} />
    </div>
  )
}
```

now that i created my stateless components . i need to hook them up with the needed data. so i created a [Facade](https://en.wikipedia.org/wiki/Facade_pattern) first that handles all my business logic.

`userFacade.tsx` here comes the RXJS part. using the Rxjs BehaviorSubject and operators, i created 2 behaviorSubjects to hold the dataPerPage$ and currentPage$ values. isLoading$ and errorMsg$ for UI/UX purposes.

i also created 2 functions to change the DataPerPage and PageNumber. and the core function is the `getUsersOnChanges$` with combines the two provided streams [ currentPage , DataPerPage ] and switch to a new stream each time one of the values changes. and fetches new users .

```tsx
...
const _dataPerPage$ = new BehaviorSubject<number>(10);
const _currentPage$ = new BehaviorSubject<number>(0);
const isLoading$ = new BehaviorSubject<boolean>(true);
const errorMsg$ = new Subject<string>();

function changeDataPerPage(num: number) {
  _dataPerPage$.next(num);
}

function changePageNumber(num: number) {
  _currentPage$.next(num);
}

const getUsersOnChange$ = combineLatest([currentPage$, dataPerPage$]).pipe(
  debounceTime(500),
  tap(() => isLoading$.next(true)),
  switchMap(([page, limit]) =>
    fetchUsers(page, limit).pipe(
      tap(() => isLoading$.next(false)),
      catchError((err) => {
        isLoading$.next(false)
        errorMsg$.next(JSON.stringify(err));
        console.log('raw err',err)
        return EMPTY;
      })
    )
  )
);

```

Now that i have the facade ready i need to create a custom hook for the components to subscribe to my observables `useObservable.tsx`.

```tsx
export default function useObservable<T>(observable$: Observable<T>) {
  const [state, setState] = useState<T>()

  useEffect(() => {
    const sub = observable$.pipe().subscribe(setState)

    return () => sub.unsubscribe()
  }, [observable$])

  return state
}
```

## Container

the smart component that connects my dumb components to my facade is `App.tsx` because it is a simple app i did not feel like creating one more component just to be rendered again in App.tsx.

```tsx
import {
  getUsersOnChange$,
  maxPages$,
  changePageNumber,
  changeDataPerPage,
  dataPerPage$,
  isLoading$,
  errorMsg$,
} from "./facade/userFacade"

function App() {
  // this is the users list we care about
  const list = useObservable<IUser[]>(getUsersOnChange$) || []

  const maxPage = useObservable<number>(maxPages$)
  const dataPerPage = useObservable<number>(dataPerPage$)
  const errorMsg = useObservable<string>(errorMsg$)
  const isLoading = useObservable<boolean>(isLoading$)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>RxJS with React</h1>
        {maxPage && dataPerPage && (
          <Paginator
            dataPerPage={dataPerPage}
            changeDataPerPage={changeDataPerPage}
            pages={maxPage}
            changePage={changePageNumber}
          />
        )}
        {isLoading ? <p> Loading ... </p> : <UserList list={list} />}
        {errorMsg && <p>{errorMsg}</p>}
      </header>
    </div>
  )
}
```

## Conclusion

React is powerful when combined with RXJS and TypeScript is the cherry on top ( actually more ). with the facade pattern all the business logic is hidden inside. and the components do not need to know how data is pulled (because it it pushed) or managed. just subscribe to the data stream. and re-render whenever it emits. 

Github Repo: https://github.com/ouss4m4/react-ts
App deployed at : https://master.d25nu9lnqvdjkf.amplifyapp.com