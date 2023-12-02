# GamerConnect

![Gamer-Connect-Logo](https://github.com/JamieB92/Gamer-Connect-Frontend-PP4/assets/117354147/82333fa3-9cae-4936-91e4-dfd48b885e3e)

Welcome to GamerConnect, the ultimate social media platform for gamers!

GamerConnect is a dynamic and inclusive platform designed for gamers of all ages and backgrounds. Whether you're a seasoned pro or just starting your gaming journey, our platform is tailored to bring the gaming community together.

This is the Frontend Repo for the project please click [here](https://github.com/JamieB92/Gamer-Connect-Backend-PP4) for the backend repo.

## Features
- Game Clips & Screenshots: Share your gaming triumphs, epic moments, and funniest fails with our intuitive media uploading features.

- Likes & Follows: Connect with fellow gamers, support their content with likes, and build your own dedicated following.

- Find Gamers: Discover like-minded players and create lasting gaming partnerships. Find friends to join you in your gaming adventures!

## Why GamerConnect?
- Community-First Approach: GamerConnect puts the community at the heart of everything we do. We're all about creating connections, friendships, and epic gaming memories.

- User-Friendly Interface: Our platform is designed with simplicity in mind, ensuring an easy and enjoyable experience for users of all levels.

- Diverse Gaming Experience: No matter your preferred platform, genre, or style, you'll find a welcoming and diverse community here.

## How to Get Started
- Sign up for a GamerConnect account.
- Customize your profile with your favorite games, gaming interests, and a profile picture.
- Start uploading your game clips, screenshots, and engage with the gaming community.
- Connect with other gamers, follow your favorite content creators, and make new gaming buddies.
- Join the Community
- GamerConnect is not just a platform; it's a gaming family waiting to welcome you. Start your gaming journey, connect with fellow players, and level up your social gaming experience today.

## Feedback and Contributions
- We welcome your feedback and contributions to make GamerConnect even better. Feel free to report issues, suggest improvements, and contribute to our open-source development.


# User Stories

## Epic 1 - Post Sharing & Interaction:

### Create Gaming Posts: 
As a GamerConnect user, I aim to share my gaming experiences by crafting posts containing clips and images, facilitating connections with the gaming community.

### View All Posts:
As a GamerConnect user, I wish to scroll through all the latests posts on the site

### View Post Details: 
As a GamerConnect user, I want to check out individual posts to learn more about interesting gaming posts.

## Epic 2 - Content Discovery & Engagement:

### Site Navigation
As a GamerConnect user, I want a responsive navbar that allows me to easily move between different pages on the site.

### Show Appreciation: 
As a GamerConnect user, I want to show my liking for interesting posts to express support.

### Keyword-Based Search: 
As a GamerConnect user, I aim to search for posts and user profiles using keywords to find content and gamers matching my interests.

### Review Liked Posts: 
As a GamerConnect user, I want a straightforward way to revisit posts I've liked, making it easy to relive favorite gaming moments

## Epic 3 - Post-Specific Interactions:

### Post Editing Privileges: 
As a post owner on GamerConnect, I aim to have control over the editing of my post title and description to ensure accuracy and updates.

### Active Commenting: 
As a GamerConnect user, I intend to contribute to post discussions by adding comments, allowing me to share thoughts and engage with fellow gamers.

### Comment Control: 
As the owner of a comment, I wish to have the capability to delete and edit my comments, allowing me to manage the content within the application.

## Epic 4 - User Profiles & Connections:

### New Account Creation:
As a GamerConnect user, I intend to establish a fresh account to access all the privileges available to registered gamers.

### User Profile Viewing:
As a GamerConnect user, I want to check out fellow gamers' profiles to explore their gaming posts and learn more about their gaming experiences.

### User Following & Unfollowing: 
As a GamerConnect user, I want to be able to follow and unfollow other gamers.

### Profile Customization: 
As a GamerConnect user, when logged in, I want to personalize my gaming identity by changing my profile picture and updating my bio.

## Epic 5 - Developer 

### Initial Backend Setup
As a developer, I need to set up the backend project structure for seamless project development.

### Initial Frontend Setup
As a developer, I must configure the frontend project structure to facilitate project development.

### Deploy Backend
As a developer, I need to guarantee the successful deployment of the project's backend for site accessibility.

### Deploy Frontend
As a developer, I must ensure the successful deployment of the project's frontend for users to interact with.

### Database Setup
As a developer, it's crucial to create a database and integrate it into the project for effective information storage.

# Features

### Site Navigation

#### User Story: 
As a GamerConnect user, I want a responsive navbar that allows me to easily move between different pages on the site.

#### Image Place Holder

A navigation bar has been implemented, transitioning into a hamburger menu on smaller devices to prevent navigation item overlap. This ensures users can access and navigate the site seamlessly on devices of any size. The navbar is user-friendly, allowing easy navigation and smooth transitions between each page.
The Navbar shows distinct icons based on the user's sign-in status, enabling them to easily distinguish whether they are logged in or out.

### New Account Creation

#### User Story:
As a GamerConnect user, I want to create a new account to enjoy all the benefits available to registered users.

#### Placeholder image

A user-friendly sign-up page has been introduced, providing a clear and straightforward registration process. This enables users to register with GamerConnect, establishing a profile for them upon registration. After completing the registration, users are directed to a login page where they can access their account using the created username and password. Once logged in, users gain access to all privileges reserved for the GamerConnect Community.



## Design

#### Colors: 
![color-palete](https://github.com/JamieB92/Gamer-Connect-Frontend-PP4/assets/117354147/10f0a07e-09cf-464a-9e78-291c79091c3d)


 # Deployment
Here you can find the instructions to recreate the deployment of the project

## Backend Deployment

### Github
- In the top right of the page click the plus symbol
- Click New Repository
- Select Template - Code-Institute-Org/gitpod-full-template
- Name the repository (Reference Backend)
- Click Create

### Gitpod (Please use Chrome or Firefox)
- open a new tab in your browser and go to your browsers extensions store
- Search for Gitpod
- Install Gitpod extension
- Go back to your newly created repo
- Click the Green Gitpod Open button
- Click Continue with Github 
- Gitpod will now create a workspace 

### Django Setup
- In your IDE open a new terminal
- Enter enter in the terminal pip3 install 'django<4'
- Enter in the terminal django-admin startproject {{project_name}} .
- Enter in the terminal to create an App with - python manage.py startapp {{app_name}}
- Add the new app to the allowed apps in the settings.py file.


### Cloudinary and Pillow
- Go to Cloudinary - https://cloudinary.com/
- Create an account
- Click dashboard
- Copy your cloudinary API Environment variable
- Install Cloudinary in the terminal with - pip install django-cloudinary-storage
- Install Pillow in the terminal with - pip install Pillow
- Now go to settings.py in your project 
- In installed apps add 'cloudinary_storage' above 'django.contrib.staticfiles' and 'cloudinary' below.
- create an env.py file in the top directory
- add your cloudinary API Environment variable to the env.py file
- add the following to settings.py underneath "from pathlib import Path":
        
        import os

        if os.path.exists('env.py'):
            import env

        CLOUDINARY_STORAGE = {
            'CLOUDINARY_URL': os.environ.get('CLOUDINARY_URL')
        }
        MEDIA_URL = '/media/'
        DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'


## Frontend Setup:

### Github
- In the top right of the page click the plus symbol
- Click New Repository
- Name the repository using lowercase to allow React to create an app
- Click Create

### Gitpod (Please use Chrome or Firefox)
- open a new tab in your browser and go to your browsers extensions store
- Search for Gitpod
- Install Gitpod extension
- Go back to your newly created repo
- Click the Green Gitpod Open button
- Click Continue with Github 
- Gitpod will now create a workspace 

### Heroku Setup: 

- Navigate to [heroku](https://id.heroku.com/login) and create an account
- Click the "New" button.
- Select "Create New App."
- Provide an app name.
- Choose a region and click "Create App."
- Select region and click create app

### Setting Up React Using CI template:

- Enter the following in your workspaces terminal (This may take a couple of minuetes).

        npx create-react-app . --template git+https://github.com/Code-Institute-Org/cra-template-moments.git --use-npm

- Enter npm install in the terminal
- Then enter the following to fix [issue](https://github.com/JamieB92/gamer-connect-frontend-pp5/issues/1) with CI template:

        npm i react-scripts@latest

- Enter in ther terminal

        npm start

- You should see the react logo now open in the local server


### Connecting FrontEnd with the Backend in Heroku:
- Go to Heroku
- Load your front end app (gamer-connect)
- Open App 
- Copy URL
- Now load your API project (gamer-connect-api)
- Go to settings 
- Reveal config vars
- create a new Var and paste the URL in the value: 

        Key - CLIENT_ORGIN  
        Value - {{front_end_project_url}}

- Now go back to Gitpod
- Go to your development server and copy URL
- Go back to Heroku
- Go to settings 
- Reveal config vars
- create a new Var and paste the URL in the value: 

        Key - CLIENT_ORGIN_DEV 
        Value - {{front_end_dev_server_url}}

Note: Gitpod will change the dev server URL every so often so update when needed

### Axios 

- Run the following in the terminal:

        npm install axios

- Create a folder named api in the src folder
- create a file named axiosDefaults.js
- Setup your api settings, when setting the base URL make sure to use your Heroku backend apps URL.
- import axios in to APP.js

