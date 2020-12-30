---
title: Adding Comments To A Gatsby Blog
date: "2020-12-30"
description: What is a blog post good for if you can not Disqus it.
---

In a previous [post](http://bzouss.com/blog-idea/) i shared my thoughts on why you should create a blog as a developer. specially if you are still on a learning path and would like to improve steadily.

Right after publishing my blog. the next thing i looked for was the easiest way to add a comments. visitors should be able to comment or ask questions and express their views on what i’ve written. and the Gatsbyjs official documentation recommends many options for adding comment functionality, several of them specifically targeted at static sites.

## Implementing Disqus

without much thinking. i picked [Disqus](disqus.com) and searched the Gatsby library and found [Gatsby-Plugin-Disqus](https://www.gatsbyjs.com/plugins/gatsby-plugin-disqus/) . A plugin that simplifies adding Disqus comments to your Gatsby website.

First you need to create an account with [Disqus](disqus.com) and pick a plan. they have a free plan that is nice for starters. and get the `shortname` associated to your account.

then install the plugin.

    yarn add gatsby-plugin-disqus

or using npm

    npm install -S gatsby-plugin-disqus

Add the plugin to your gatsby-config.js file with your **Disqus shortname**.

> Make sure to replace the EXAMPLE inside options with the shortname for your own forum.

    // gatsby-config.js
    module.exports = {
        plugins: [
            {
                resolve: `gatsby-plugin-disqus`,
                options: {
                    shortname: `EXAMPLE`
                }
            },
        ]
    }

i created a component called DiscusArea

    import React from "react"
    import { useStaticQuery } from "gatsby"
    import { Disqus, CommentCount } from "gatsby-plugin-disqus"

    const DiscusArea = ({ id, title, location }) => {
    const data = useStaticQuery(graphql`
        query {
        site {
            siteMetadata {
            title
            siteUrl
            }
        }
        }
    `)
    const siteUrl = data.site.siteMetadata?.siteUrl
    let disqusConfig = {
        url: `${siteUrl + location.pathname}`,
        identifier: id,
        title: title,
    }

    return (
        <>
        <CommentCount config={disqusConfig} placeholder={"..."} />
        <Disqus config={disqusConfig} />
        </>
    )
    }

    export default DiscusArea

The plugin can then be used to place the Disqus comment section anywhere in your page. i placed mine inside the `blog-post.js` file that gatsby use to generate pages posts. right after the Markdown content.

    // blog-post.js
    ...
    <DiscusArea
        location={location}
        title={post.frontmatter.title}
        id={post.frontmatter.date}
    />
    ...

reload the page and you should see comments area at the bottom of your page.

## Conclusion

Comments are a must. it is easy to add a comment system to your blog for people to ask or correct your mistakes. you may even help other developers reading your articles or even get some mistakes corrected.

Disqus works nice with a gatsby blog and it is so easy to add there is no excuse for you to not do it.
go and add comments to your blog now.

Thanks for reading. i appreciate any feedback  
 ( that's why i added comments :D )
