module.exports = {
  siteMetadata: {
    title: `Oussama Baaziz`,
    author: {
      name: `Baaziz Oussama`,
      summary: `Software Developer with a passion for clean code architecture and design patterns`,
    },
    description: `Baaziz Oussama. Software Developer with a passion for clean code architecture and design patterns`,
    siteUrl: `https://bzouss.com`,
    social: {
      twitter: `0uss4m4`,
    },
    projects: [
      {
        title: "SnapShot",
        desc:
          "Full Stack projects allows users to browse images. requires login to post and comment on other people photos. hosted on Heroku Free Tier slows the initial load",
        tags: ["Heroku", "MongoDB", "React", "Express"],
        imgName: "snapshot800600",
        code: "https://github.com/ouss4m4/snapShot",
        live: "https://mern-app.herokuapp.com/",
      },
      {
        title: "SalesOrder DDD API",
        desc:
          "Domain-Driven Design with Clean Architecture Concepts API to create Clients Items and Orders. Architecture understanding is the GOAL of the api not the data",
        tags: ["Express", "Node", "MongoDB", "DDDesign"],
        imgName: "dddsales800600",
        code: "https://github.com/ouss4m4/ddd-sales",
        live: "",
      },
      {
        title: "Shopping List",
        desc:
          "Flutter cross platform app to create a shopping list that contains the item name , quantity and add a photo if needed",
        tags: ["Flutter", "Dart", "Android", "iOS"],
        imgName: "flutter-proj",
        code: "https://github.com/ouss4m4/shopping_list",
        live: "https://shop-together-8d5e3.web.app/",
      },
      {
        title: "Task Manager",
        desc:
          "Drag n Drop Task manager with persistance done in react deployed with Amazon Amplify",
        tags: ["React", "React-dnd", "Amazon", "Amplify"],
        imgName: "tasks-proj",
        code: "https://github.com/ouss4m4/Task-tracker",
        live: "https://master.d3e64dmv8w4bbk.amplifyapp.com/",
      },
      {
        title: "Reactive Programming",
        desc:
          "With the introduction of React hooks. working with rxjs subscriptions it now easily maintainable and the result is a smooth UI/UX ",
        tags: ["React", "RXJS", "Amplify"],
        imgName: "rxjsreact800600",
        code: "https://github.com/ouss4m4/react-ts",
        live: "https://master.d25nu9lnqvdjkf.amplifyapp.com/",
      },
      {
        title: "DigIncome.com",
        desc:
          "Blog i built for my  friend to write about his digital income adventures. to be converted to a JAM stack for publishing articles",
        tags: ["Gatsby", "Netlify", "MarkDown", "Amplify"],
        imgName: "digincome-proj",
        code: "https://github.com/ouss4m4/digincome",
        live: "https://digincome.com/",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `bzouss`,
      },
    },
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-dark-mode",
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
