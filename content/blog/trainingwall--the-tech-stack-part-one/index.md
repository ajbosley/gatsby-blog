---
title: TrainingWall - The Tech Stack (back-end)
date: "2019-05-08T17:24:00.456Z"
category: "Back-End"
tags: ["NodeJS","ExpressJS","MongoDB","Mocha","Chai"]
---

## In this post I'm going to cover the Tech Stack I chose as a back-end for my app, TrainingWall.

When starting a new project, commercial or personal, I'm always presented with the question:

> What tech stack do I use for this?

Sometimes it's a very simple and easy question to answer, *"**What you know best**"* other times it can be a real challenge and the initial investment in architectural planning can put me off a project.

When working on my own personal projects I tend to be a bit more exploratory and implement technologies I'm not as familiar with. Do I value my personal time less than my work time, or is it just more fun to learn new things, new ways and at least attempt to keep up to date with the ever increasing pace of JavaScript and web development practices?

To answer this question I looked at the outcomes I want my backend to deliver.

## Requirements

* REST API - *Could easily, and probably will in the future, add a GraphQL layer.*
* Automated testing
* Authentication
* Authorization
* Connects to a database

That's a very generic and rather rudimentary set of requirements right? But it gives a good start and besides, every app should be test-able!

I've almost exclusively worked with JavaScript since graduating university and love the language along with its incredible community of dedicated developers, so I chose **NodeJS** to write the server, **ExpressJS** to handle my API endpoints and routing, **MongoDB** as my database and **Mocha w Chai** as my testing framework.

**NodeJS** is a very well supported platform with an incredible number of open source packages, everything from indenting your code to machine learning libraries. This incredible eco-system leaves you with a wealth of packages to choose from that can do pretty much anything, certainly an overwhelming quantity for any newbie. I chose to stick with **v8.13.^** at the time of writing due to package support.

### Is it important to choose a long term support (LTS) version?

Support for **NodeJS** is similar to that of Linux, a distribution or release version is chosen, and scheduled, for *long term support* and it therefore receives *long term support* for packages included with the release version and larger packages tend to stick with this support cycle. I say tend to as some packages aren't as well maintained as others. Keep in mind that a lot of packages are maintained by the community, people like you and I, just more generous!

### Now that I've chosen NodeJS, why did I choose ExpressJS over, say, Koa?

Choosing **Koa** may have been a smart choice if I was interested in following the state of JavaScripts surveys. They plug the average wage for **Koa** developers as XYZ% higher than **ExpressJS** devs, but life is not all about money. I could've spent my time learning **Koa** or I could work towards delivering the project and my knowledge of **ExpressJS** is greater. The efficiencies brought by **Koa** aren't needed for this application, the expected use is very low and not intensive.

### We have a server technology, and a set of HTTP utilities, why MongoDB?

One of the biggest advantages I've found when using **MongoDB** and **Atlas** has got to be the incredible speed with which you can create schemas and adapt them to any use case, even halfway through development.

I put a large value on this factor when I'm building a prototype, schemas are likely to evolve during development, they're also very likely to evolve once the first version releases to production! It takes a while to stabilise a database schema when you're one man. *Nobody is faultless, we all overlook things.*

**Atlas** has a very good free tier that enables you to get up and running with a development and production database without any hassle.

Creating schemas for a *"schema-less database"* seems odd, but it isn't. It's normal to want structure, that's what a database is after all, a bunch of data points organised in a query-able and predictable manner.

I've worked with two different frameworks that apply schemas to **MongoDB** databases, **Mongoose** and **LoopBack**. **LoopBack**  is very opinionated in database and endpoint structuring that I wanted, it would've been a fine fit and the useful CLI tools would've made for faster development. **LoopBack** is also built upon both **Mongoose** and **ExpressJS**, so I chose to work with the building blocks and apply my own opinions.

### This leaves the testing framework

**Mocha** is a very simple to read testing framework and has a variety of different extensions but most of all, it's my favourite coffee related drink. The little things. 

To clarify, I'm not a fan of **Chai** in my coffee but I'm more than happy to use it for HTTP testing!

**Next up:** *The Tech Stack (front-end)*