---
title: Back To React
date: "2021-01-03"
description: First React Project Since v16 beta release.
---

> you can skip past this personal story i wrote for english practicing purpose and go straight to the code.

Angular Or React. I got tired of this question long time ago. communities bashing and popularity shifting between the frameworks. Sadly for me at that time (turned out to be a Good thing) . i had to use Angular at work. and keep playing with React on my own free time. but as the daily work got more stressful with projects getting more complex and deadlines approaching fast. i gave up on my side coding and night time became more of a watching conferences session instead of Coding.

So i spent the last 2 years coding Angular at work .on multiple platforms , we made Desktop apps using Angular + Electron. Mobile Apps Using NativeScript+Angular. And Single Page Applications too. I grasped the Angular architecture very well. and it influenced my approaches of thinking and designing Front End Apps. with all the Services & Hierarchy angular provides and kind of enforces at some levels.

Now that time allows it again, i had to get back in shape with React. so i decided to start with a simple Drag n Drop example
(because no one likes Todos ) and try to understand the React Hooks and see what's all the hype about.

## Before Any React Code

one thing i adopted lately is that my business logic (or domain) should not be tied to any framework "as possible". so i started by creating a file called `tasks.js` and put all my task related code in it.

```javascript
class TasksLogic {
  fakeData = [
    { title: "ability to delete tasks", status: IN_PROGRESS },
    { title: "persist on local storage", status: IN_REVIEW },
    { title: "create new react project", status: DONE },
  ]

  getTasks() {
    return this.fakeData
  }

  getTasksDone(list) {
    return list.filter(task => task.status === DONE)
  }

  getTasksInProgress(list) {
    return list.filter(task => task.status === IN_PROGRESS)
  }

  getTasksInReview(list) {
    return list.filter(task => task.status === IN_REVIEW)
  }
  getTasksToDo(list) {
    return list.filter(task => task.status === TO_DO)
  }

  addTask(list, title) {
    return list.concat([{ title, status: TO_DO }])
  }
}

export const taskLogic = new TasksLogic()
```

## Adding A Task

I created the popular custom hook called `useFormState` and i added one more function export to resetInput.

```jsx
import { useState } from "react"

export default function useFormState(initialValue) {
  const [value, setValue] = useState(initialValue)
  const handleChange = e => {
    setValue(e.target.value)
  }
  const resetInput = () => setValue("")

  return { value, onChange: handleChange, resetInput }
}
```

and a `taskForm.js` to handle user typing through the custom hook. and it should receive a function as prop called `addTaskToList` to call on a valid form submission

```jsx
function TaskForm({ addTaskToList }) {
  const { value, onChange, resetInput } = useFormState("")
  const handleSubmit = e => {
    e.preventDefault()
    if (value.trim().length) {
      addTaskToList(value)
      resetInput()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Add A Task</label>
      <input
        name="task"
        placeholder="task name"
        value={value}
        onChange={onChange}
        type="text"
      />
    </form>
  )
}

export default TaskForm
```

## Showing The Lists

after reading [react-dnd](https://react-dnd.github.io/react-dnd/docs/overview) documentation. i created a `TaskList.js` component with a **Drop reference** so it handles Tasks Dropping. and a `TaskItem.js` with a **drag reference** to it makes the item draggable. this was so easy and it really is not the point of this article. you can still check the full code on my [repo](https://github.com/ouss4m4/back-to-react).

the `TaskItem.js` is a component that receives a Task and renders it, (with the drag ref & hook) nothing else.

```jsx
const TaskItem = task => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.TASK, task },
    begin: () => ({ task }),
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })
  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontWeight: "bold",
        cursor: "move",
      }}
      className="list-item"
    >
      <p> {task.title} </p>
    </div>
  )
}

TaskItem.propTypes = {
  title: PropTypes.string,
  status: PropTypes.oneOf([IN_PROGRESS, TO_DO, IN_REVIEW, DONE]),
}

export default TaskItem
```

the `TaskList.js` is a component that receives a list of tasks , and an  editTask function

```jsx
function TaskList({ list, editTask, listType }) {
  const [, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: dropedTask => handleItemDrop(dropedTask.task),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  })
  // when an item get dropped on this list, we call editTask with the DropedItem and the provided listType
  const handleItemDrop = task => {
    editTask(Object.assign({ ...task }, { status: listType }))
  }
  return (
    <div ref={drop}>
      <div className="task-list">
        {list &&
          list.map((item, index) => (
            <TaskItem key={index} title={item.title} status={item.status} />
          ))}
      </div>
    </div>
  )
}
```

and i wrapped everything in a container `TasksContainer.js`

```jsx
function TasksContainer() {
  const { tasksList, addTask, editTask } = useTasksList()
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <TaskForm addTaskToList={addTask} />
        <div className="tasks-main">
          <div className="list-wrap">
            <h4>TO DO</h4>
            <TaskList
              list={taskLogic.getTasksToDo(tasksList)}
              editTask={editTask}
              listType={TO_DO}
            />
          </div>
          /* there are 3 more TaskLists rendered below with different listTypes.
          removed to avoid repetition. */
        </div>
      </div>
    </DndProvider>
  )
}
```

## The Main Reason For This Article

now you see that `TasksContainer` use a custom hook called `useTasksList` to get the itemsList and 2 functions. this is where i had some doubts. i treated this custom hook like a shared service if you get what i mean.
and it is working as i intended it to be (expect for the localstorage in the same function).

```jsx
export const useTasksList = () => {
  const savedTasks = tryLocalStorage()
  const [tasksList, setTasksList] = useState(savedTasks)

  const addTask = taskName => {
    const newList = taskLogic.addTask(tasksList, taskName)
    setTasksList(newList)
    persistToStorage(newList)
  }

  const editTask = editedTask => {
    const newList = taskLogic.editTask(tasksList, editedTask)
    setTasksList(newList)
    persistToStorage(newList)
  }

  return { tasksList, addTask, editTask }

  const tryLocalStorage = () => {
    const storedTasks = localStorage.getItem("taskList")
    let parsedTasks = []
    if (storedTasks) {
      try {
        parsedTasks = JSON.parse(storedTasks)
      } catch (error) {
        // error parsing tasks
      }
    } else {
      parsedTasks = taskLogic.getTasks() // this returns fake tasks
      persistToStorage(parsedTasks)
    }
    return parsedTasks
  }

  const persistToStorage = taskList => {
    const stringTasks = JSON.stringify(taskList)
    localStorage.setItem("taskList", stringTasks)
  }
}
```

_But custom hooks are supposed to be Reusable, am i wong? 😕_

as there is no async data for the moment. and no useEffect() yet.
it looks like this is one way of using React Hooks and it looks so clean and readable compared to stateful components. but the reusability point got me confused.

What is your opinion on this approach ? am i doing it wrong here ?
i would love to read your opinion on the `useTasksList` hook.

Thank you for reading.

GithubRepo: https://github.com/ouss4m4/back-to-react  
deployed at: https://master.d3e64dmv8w4bbk.amplifyapp.com

<!-- live:  https://master.d3e64dmv8w4bbk.amplifyapp.com/ -->

<!-- repo: https://github.com/ouss4m4/back-to-react -->
