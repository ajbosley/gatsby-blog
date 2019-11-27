---
title: TrainingWall - Authentication and Authorization
date: "2019-05-08T20:40:00Z"
category: "Security"
tags: ["JWT","Bcrypt","Authorization","Authentication","Atlas","Encryption"]
description: "After reading this far in the series, I haven't told you what my app is actually meant to do. Well, lets not spoil everything in one go!"
---

## After reading this far in the series, I haven't told you what my app is actually meant to do. Well, lets not spoil everything in one go!

The **TrainingWall** app covers, in its current form, one main use case. Creating routes on rock climbing training boards irrespective of board shape, size and design. If you can photograph it, you can create routes for it.

A climbing center can have many boards, each board can have many routes. Routes are created by users, anonymous or registered.

This design leads way for three different types of user:

* Anonymous - *Under 16's for GDPR compliance, no data stored on user*
* Registered
* Center staff

### What's the difference between authentication and authorization?

Authentication is proving you are who you say you are.

Authorization is checking whether you have permission to perform an action, more importantly, it prevents you from performing actions you do not have permission to make.

## TrainingWall Authentication

When looking at authentication, you're immediately dealing with sensitive data, like it or not, it's there so embrace it. Most of all, secure it. Thankfully **Atlas** has one click, encryption at REST.

### Our data is secured at REST in the database but what are we going to do about passwords and in transit data?

In transit data is secured using **HTTPS** protocols as standard. We'll get onto **SSL** certificates for the server later.

Password management can present you with a world of hurt if your system is ever breached, and you notice, and the data is leaked. Encryption at REST is great but storing a plain text password in a database is tempting fate. No, no, no.

My favourite encryption package has to be **Bcrypt** as I've found it so easy to work with and it hasn't been cracked, yet.

The only frustrating problem I have encountered using **Bcrypt** has been the speed of support for **NodeJS** updates. This has caused me some pains, entirely due to my own error and poor use of **Node version Manager (NVM)**. If you aren't already using **NVM** I highly suggest it.

Keeping packages locked to versions you have tested on QA is a crucial part of the development process, why not do the same for your server-side code? This also allows you to develop for different cloud service providers as they may support different **NodeJS** versions and you can test them differently.

Back to **Bcrypt**. What does it do?

**Bcrypt** uses an encryption algorithm and a salt to garble up and encrypt fields. The only field I'm worried about is the users password.

First the user signs up with a password, that password is then sent securely using HTTPS to my server. My server then uses **Bcrypt** to securely hash the password and stores the hashed password in the database.

### How do users login after registration?

After registration a registered user can authenticate by sending their email and password to the specified end-point over HTTPS. The password is then hashed again using **Bcrypt**, if the hash matches the hash stored in the database, so do the passwords. This user is who they say they are, or at least they know the users password... woo! Two factor authentication is far more secure but is it really necessary for an app that doesn't handle finance or much personal data?

## TrainingWall Authorization

### Great, we can create users and authenticate now, why do we need authorization?

Consider the following scenario.

> A center has one board, who should be able to change this boards details and how can we be sure they have permission? This is where authorization comes in.

Editing a user, creating a route, editing a route, creating a board, editing a board, creating a center and editing a center are the main processes that require authorization in the **TrainingWall** app.

I chose to use **JWT's** here as they work really well with the simple local `key: value` storage employed by **React Native**.

Contained within my **JWT's** are some user details. Their username, date of birth, permission level *i.e staff or not staff* and their user id. The **JWT** can be sent along with all requests but is only read and checked by restricted end points or restricted actions.

If a request is sent to an endpoint that is restricted and the users **JWT** does not grant the required permission, the request stops before executing any code. It is rejected before running the business logic locked away behind authorization.

### There we have it, that's how I handle user authentication and authorization for the TrainingWall.

**Next up:** *entersomethinghere*