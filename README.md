# TestHub

This website is made to be a platform for developers where they can share their projects and get feedback from other users, help with manual testing, and support to help their applications grow! When the user creates an account they can share posts, follow other users, see different kinds of feeds and interact with content on the page. 

This is the front-end application built off of the TestHub API. 

Link to API repository on GitHub: LÄNK TILL API

Link to deployed site: LÄNK TILL SIDA

RESPONSIV BILD PÅ SIDA

## Table of contents

1. [FEATURES](#features)
    - [Existing Features](#existing-features)
    - [Features to be implemented](#features-to-be-implemented)

2. [UX](#ux)
    - [User Stories](#user-stories)
    - [Design Choices](#design-choices)
       - [Fonts](#fonts)
       - [Colors](#colors)
       - [User Experience](#user-experience)

3. [DEPLOYMENT](#deployment)
    - [Creating heroku app](#creating-heroku-app)
    - [Connecting to GitHub](#connecting-gitHub)

4. [USED TECHNOLOGY](#used-technology)
    - [Languages](#languages)
    - [Libraries](#libraries)
    - [Frameworks](#frameworks)
    - [Tools](#tools)

5. [TESTING](#testing)
    - [Manual Testing](#manual-testing)
    - [Fixed Bugs](#fixed-bugs)
    - [Unfixed Bugs](#unfixed-bugs)

6. [Credits](#credits)


## Features

### Existing features

- When the user first goes to the page they can see a feed of all posts made, they can see the number of likes and comments on each post and if the     comment icon is clicked they can also see the comments made on that post. At this stage, the user cannot like, comment, or create a post. SEE PROFILES AS UNLOGGED USER?

- The user can register an account or log in if they already have an account. If they register a new account they will have to log in before they can access the features of a logged-in user

- At this stage, the user can see additional navigation leading to a filtered feed for the posts of the user's followed accounts, a feed with the user's own posts, and a feed with all the posts that the user previously liked. At the end of this navigation, the user can also navigate to a form to create a new post.

- The user can create a post with an image, a title, and content. This post will be displayed for all users on the page to see. The post can be updated and deleted by the user and all elements of the post can be updated.

- The logged-in user can see and edit their profile, and can also visit other users' profiles and see their posts. If a user clicks the profile name of another user on a post or a comment they will be directed to this user's profile. When visiting others' profiles they have the option to follow or unfollow a user that they are already following. 

- If a user wants to visit a specific profile they can search for the profile's username and get results for that user or and message declaring there are no users if no user is registered under the searched name.

### Features to be implemented

- The user can add links to the posts so that their application is easier to access.

## UX

### User stories

- As a user, I can register an account so that I can create posts and interact with other users.
- As a user, I can view other users' profiles so that I can interact with others.
- As a user, I can navigate around the site through all pages so that I can everything is easily accessed.
- As a user, I can see all comments made on posts so that I can be involved in the conversations.
- As a user, I can log in so that I can create posts and interact with other users.
- As a user, I can see the number of likes that posts have so that I can see what other users like.
- As a user, I can click on the page logo so that I can go to the home page.


- As a logged-in user, I can see a list of all user's posts so that I can get an overview of all content.
- As a logged-in user, I can like & unlike other users' posts so that I can interact with their content.
- As a logged-in user, I can have full crud functionality over my posts so that I can handle my content.
- As a logged-in user, I can see a list of my own posts so that I can get an oversite of my content.
- As a logged-in user, I can see a list of all the posts I liked so that I can go back to posts that I have interacted with.
- As a logged-in user, I can delete the comments I made on posts so that I can control my inputs on the page.
- As a logged-in user, I can comment on other users' posts so that I can interact with their content.
- As a logged-in user, I can have full crud functionality over my profile so that I can have control over my personal information.

### Design choices

I have chosen a green theme for this webpage using three shades of green, classic black, and white. I have chosen fonts that I think give a modern and friendly look to match the purpose of the page.

**Colors:**

- #e7f5d9
- #8ca088
- #677664

**Fonts:**

- Nunito, body
- Michroma, logo
- Sans-serif, back-up

**User experience**

- All clickable elements on the page have a design that changes slightly when the user hovers over them to imply that they are clickable.
- The site has a fully responsive design.
- All actions that aren’t accessable by the user have corresponding alerts och messages.
- Error handling is in place for all functionality.

## Deployment

 **This project was deployed through Heroku using the following steps:**

**Creating Heroku app**
+ Log into Heroku
+ Select 'Create New App' from your dashboard
+ Choose an app name (if there has been an app made with that name, you will be informed and will need to choose an alternative)
+ Select the appropriate region based on your location
+ Click 'Create App'

**Connecting to GitHub**
+ From the dashboard, click the 'Deploy' tab towards the top of the screen
+ From here, locate 'Deployment Method' and choose 'GitHub'
+ From the search bar newly appeared, locate your repository by name
+ When you have located the correct repository, click 'Connect'

### Used technologies

#### Languages 
- HTMl
- CSS
- JavaScript
#### Libraries 
- Axios
#### Frameworks
- React
- React Bootstrap
#### Tools 
- GitHub
- Heroku

### Manual testing

**I have tested this website by doing the following:**

Submitted all forms from different accounts with different content:
- Registration form
- Login form
- Create post form
- Edit post form
- Update profile form
- Update password form ????
-  Create comment form

Navigated through all links:
- Logo
- Home 
- Create Post 
- Following
- My posts
- Liked posts
- Edit Profile
- Edit post
- Logout
- Login
- Register
- Post Title

Tested buttons:
- Like/Unlike
- Delete comment
- All submit buttons

All tests were successful when tested on multiple devices through different accounts. This website is fully responsive on all devices and across browsers.

### Fixed bugs

The Avatar component did not render in the head of the post.
- Solution: Properly destructure props in component.

The Avatar component did not render in the comment form.
- Solution: Add profile_img field to comment serializer in API

### Unfixed bugs
No unfixed bugs remain.

## CREDITS
 
**Amy O'Shea**
- For the Heroku deployment process, taken from the README file of this repositiry
- [Amy O'Sheas repository](https://github.com/AmyOShea/MS4-ARTstop#deployment)

**Google Fonts**

**Font Awsome**
