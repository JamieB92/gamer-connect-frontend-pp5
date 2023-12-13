# GamerConnect

![Gamer-Connect-Logo](https://github.com/JamieB92/Gamer-Connect-Frontend-PP4/assets/117354147/82333fa3-9cae-4936-91e4-dfd48b885e3e)

Welcome to GamerConnect, the ultimate social media platform for gamers!

GamerConnect is a dynamic and inclusive platform designed for gamers of all ages and backgrounds. Whether you're a seasoned pro or just starting your gaming journey, our platform is tailored to bring the gaming community together.

This is the Frontend Repo for the backend repo please click [here](https://github.com/JamieB92/Gamer-Connect-Backend-PP4).

For the live site - https://gamer-connect-625bab79a49e.herokuapp.com/

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

## Planning: 

![Kanban](https://res.cloudinary.com/dxxzc99pz/image/upload/v1702439184/kanban_m7uori.png)

This project was executed following agile methodologies, employing incremental sprints to deliver small features. 
The project's Kanban board was established using GitHub Projects, and additional details can be accessed [here](https://github.com/users/JamieB92/projects/6). 
<br>This board provides an overview of the project cards and their respective statuses. 

![Kanban](https://res.cloudinary.com/dxxzc99pz/image/upload/v1702439173/Screenshot_2023-12-12_164712_ctofpc.png)

I structured the database with PostgreSQL due to its reliability and advanced features. <br> 
To visualize and manage the schema, I employed DbVisualizer, enabling a detailed examination of tables and relationships. 

# User Stories

## Epic 1 - Post Sharing & Interaction:

### Create Gaming Posts (Images): 
As a GamerConnect user, I aim to share my gaming experiences by crafting posts containing images, facilitating connections with the gaming community.

### Create Gaming Posts (Videos): 
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

### Delete a Post Privilige:
As a GamerConnect user, I want to delete my posts this will allow me to manage my content.

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

### Display GamerConnects most popular profiles
As a GamerConnect user, I want to effortlessly find and connect with popular profiles in the gaming community.

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

![Navbar](https://res.cloudinary.com/dxxzc99pz/image/upload/v1702440903/navbar_e71pqk.png)

A navigation bar has been implemented, transitioning into a hamburger menu on smaller devices to prevent navigation item overlap. This ensures users can access and navigate the site seamlessly on devices of any size. The navbar is user-friendly, allowing easy navigation and smooth transitions between each page.
The Navbar shows distinct icons based on the user's sign-in status, enabling them to easily distinguish whether they are logged in or out.

### New Account Creation

#### User Story:
As a GamerConnect user, I want to create a new account to enjoy all the benefits available to registered users.

![singupform](https://res.cloudinary.com/dxxzc99pz/image/upload/v1702441030/signupform_j6pccu.png)

A user-friendly sign-up page has been introduced, providing a clear and straightforward registration process. This enables users to register with GamerConnect, establishing a profile for them upon registration. After completing the registration, users are directed to a login page where they can access their account using the created username and password. Once logged in, users gain access to all privileges reserved for the GamerConnect Community.

### Create a post with a Image

#### User Story
As a GamerConnect user, I aim to share my gaming experiences by crafting posts with an image, facilitating connections with the gaming community.

![imagepostform](https://res.cloudinary.com/dxxzc99pz/image/upload/v1702441583/imagepostform_h5haxj.png)

For a registered user, a user-friendly form has been developed to effortlessly facilitate post creation. This not only encourages users to express their creativity but also contributes to the growth of the community and enhances the overall application experience. The form has been designed to be straightforward and intuitive, ensuring a seamless and enjoyable posting process for users.

### Create a post with a Video

#### User Story
As a GamerConnect user, I aim to share my gaming experiences by crafting posts with a video, facilitating connections with the gaming community.

![videopostform](https://res.cloudinary.com/dxxzc99pz/image/upload/v1702441585/clipuploadform_j7hvyh.png)

For a registered user, a user-friendly form has been developed to effortlessly facilitate post creation. This not only encourages users to express their creativity but also contributes to the growth of the community and enhances the overall application experience. The form has been designed to be straightforward and intuitive, ensuring a seamless and enjoyable posting process for users.


### View all Posts

#### User Story
As a GamerConnect user, I want to easily browse through the newest posts on the site.

![allposts](https://res.cloudinary.com/dxxzc99pz/image/upload/v1702441518/allposts_wrvrbr.png)

Users can effortlessly navigate through the content available on GamerConnect using the seamlessly designed post page. The interface provides a user-friendly platform where individuals can leisurely scroll through an organized presentation of the freshest posts. 
This ensures that users indulge in a fluid and instinctive browsing encounter, enhancing their overall exploration of the latest updates and engaging content.

### View an individual posts details

#### User Story
As a GamerConnect user, I want to check out individual posts to learn more about interesting gaming posts.

![indvpost](https://res.cloudinary.com/dxxzc99pz/image/upload/v1702441811/Screenindvidualpost_b8yu3d.png)


Upon selecting a post of interest, users are directed to the post view interface, where they can delve into a detailed examination of the individual post. Within this post view, users gain the ability to explore the content more comprehensively and engage further by perusing all associated comments. This seamless transition provides users with an immersive experience, enabling them to interact extensively with the content and participate in the broader community conversation surrounding the post.

### Show Appreciation

#### User Story
As a GamerConnect user, I want to show my liking for interesting posts to express support.

![like](https://res.cloudinary.com/dxxzc99pz/image/upload/v1702441584/like_ehqxnx.png)

Users have the opportunity to convey their endorsement and encouragement on GamerConnect through the simple yet impactful action of liking posts. 
This interactive feature serves as a precise gauge, effectively mirroring users' genuine appreciation for captivating and noteworthy content within the platform. 
Engaging in the process of liking a post has been designed to be effortlessly straightforward, ensuring a seamless and expeditious experience for users, thereby contributing to a user-friendly and enjoyable interaction with the platform.

### Keyword Based Search 

#### User Story:

As a GamerConnect user, I aim to search for posts and user profiles using keywords to find content and gamers matching my interests.

![search](https://res.cloudinary.com/dxxzc99pz/image/upload/v1702441968/keywordsearch_cf8n6e.png)

Users can easily find posts and user profiles on GamerConnect by using relevant keywords. The search function accurately retrieves content aligned with the entered keywords, ensuring a simple and smooth experience through the user-friendly interface.


### Post Editing Privileges

### User Story: 

As a GamerConnect post owner, I want to be able to edit my post title and description for accuracy and updates.


![edit1](https://res.cloudinary.com/dxxzc99pz/image/upload/v1702441583/editpost1_xlmsvb.png)

![edit2](https://res.cloudinary.com/dxxzc99pz/image/upload/v1702441582/editpost_form_kc5nrr.png)


Users can easily change their posts by clicking on the options icon on the post and selecting edit, making it simple to keep their content up-to-date. This user-friendly feature ensures quick and accurate updates to titles and descriptions, making the experience dynamic. By allowing easy edits, this encourages users to take charge of their content, adding their own touch and making the community stronger.

### Delete a Post Privilige

As a GamerConnect user, I want to delete my posts this will allow me to manage my content.

![edit1](https://res.cloudinary.com/dxxzc99pz/image/upload/v1702441582/delete_rl2sbg.png)

Post owners can easily delete their posts with a designated icon. The process is user-friendly and accessible, allowing post owners to manage their content effortlessly.

### Active Commenting

#### User Story

As a GamerConnect user, I want to join post conversations by commenting, sharing thoughts, and interacting with fellow gamers.

![comment](https://res.cloudinary.com/dxxzc99pz/image/upload/v1702441586/comment_dt6xrv.png)

On GamerConnect, users can easily add comments to posts. The platform accurately shows user comments in post discussions. Commenting is simple and user-friendly, encouraging gamers to engage with each other.

### Comment Control

#### User Story

As a comment owner, I want to be able to edit and delete my comments, giving me control over the content in the app.

![commentedit](https://res.cloudinary.com/dxxzc99pz/image/upload/v1702441581/commentcontrol_xor1vt.png)


Users who own comments can easily modify their contributions using simple and user-friendly options. The platform seamlessly integrates editing features, allowing individuals to quickly adjust their posts for accuracy or clarity without any hassle. 
The delete function is seamlessly integrated, providing an efficient way for comment owners to swiftly remove their content. These straightforward processes empowers users to keep their comments relevant and aligned with their intentions.

### Display GamerConnects most popular profiles

#### User Story

As a GamerConnect user, I want to effortlessly find and connect with popular profiles in the gaming community.

![commentedit](https://res.cloudinary.com/dxxzc99pz/image/upload/v1702443258/pp_fum1du.png)

When users log in, they'll find a section on the homepage highlighting popular profiles with pictures and usernames.
<br> Clicking on a profile thumbnail takes users directly to the detailed profile view, making it easy to discover and connect with influential gamers.

### User Following & Unfollowing

#### User Story
As a GamerConnect user, I want to be able to follow and unfollow other gamers.

![follow](https://res.cloudinary.com/dxxzc99pz/image/upload/v1702443764/follow_qphzou.png)

Users can easily follow and unfollow other gamers, enhancing their ability to connect within the gaming community. The platform accurately records and displays the user's following status for others, providing transparency in connections and allowing users to manage their network with ease.

### Connect Through Shared Gaming Interests

#### User Story
I want to explore what games others are playing and showcase my own,
So I can connect with fellow gamers looking for friends.

![games](https://res.cloudinary.com/dxxzc99pz/image/upload/v1702444267/games_kj3btq.png)

 Users can explore the gaming preferences of others and exhibit their own. Game cards provide clear information, including the game title, user details, and whether they're seeking gaming friends.

## Future Feature Ideas

### Messaging System:

- Objective: Enable direct communication.
- Description: Introduce an integrated messaging system for users to coordinate gaming sessions, discuss strategies, and connect with others who share similar interests.
- Benefits: Facilitates real-time communication, enhances community engagement, and centralizes user interactions.

### Streaming Capability:

- Objective: Share gaming experiences through live streams.
- Description: Integrate a streaming feature allowing users to broadcast gameplay live, fostering community engagement and enabling gamers to showcase their skills and strategies.
- Benefits: Enhances content diversity, encourages user-generated content, and provides a dynamic platform for showcasing gaming prowess.

## Design

### Colors: 
![color-palete](https://res.cloudinary.com/dxxzc99pz/image/upload/v1702438428/colors_wienin.png)

### Font - Google Font Lexend

### Layout:

![color-palete](https://res.cloudinary.com/dxxzc99pz/image/upload/v1702439162/wf-home_arpvbh.png)

![color-palete](https://res.cloudinary.com/dxxzc99pz/image/upload/v1702439162/wf-profile_fi5jdl.png)


 # Setup and Deployment
Here you can find the instructions to recreate the projects

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



## Backend Setup

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

### Heroku Setup: 

- Navigate to [heroku](https://id.heroku.com/login) and create an account
- Click the "New" button.
- Select "Create New App."
- Provide an app name.
- Choose a region and click "Create App."
- Select region and click create app

### Django and Django Rest Framework Setup
- In your IDE open a new terminal
- Enter in the terminal pip3 install 'django<4'
- Enter in the terminal django-admin startproject {{project_name}} .
- Enter in the terminal to create an App with - python manage.py startapp {{app_name}}
- Add the new app to the allowed apps in the settings.py file.
- Enter in the terminal - pip install djangorestframework
- Now go to settings.py and add 'rest_framework' to installed apps.
- Enter in the terminal pip install django_filter
- Now go to settings.py and 'django_filers' to installed apps.
- pip freeze > requirements.txt


### Cloudinary and Pillow
- Go to Cloudinary - https://cloudinary.com/
- Create an account
- Click dashboard
- Copy your cloudinary API Environment variable
- Install Cloudinary in the terminal with - pip install django-cloudinary-storage
- pip install django-cloudinary-storage[video]
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


### dj_rest_auth
- run the following in the terminal - pip3 install dj-rest-auth==2.1.9
- Add the following in INSTALLED_APPS in settings.py:

        'rest_framework.authtoken',
        'dj_rest_auth',

- Add the following in the main app (gamer_connect_api) urls.py: 

        path('dj-rest-auth/', include('dj_rest_auth.urls')),

- Now migrate the db with  python manage.py migrate
- run the following in the terminal - pip freeze > requirements.txt

### All Auth
- run the following in the terminal -  pip install 'dj-rest-auth-[with_social]'
- got to INSTALLED_APPS and add the following:

        'django.contrib.sites',
        'allauth',
        'allauth.account',
        'allauth.socialaccount',
        'dj_rest_auth.registration',

- Underneath INSTALLED_APPS add:

        SITE_ID = 1

- Add the following in the main app (gamer_connect_api) urls.py:     

        path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
- run pip freeze > requirements.txt 

### JWT Tokens
- Run the following in the terminal - pip install djangorestframework-simplejwt
- add DEV to env.py
- Add the following in settings.py under BASE_DIR :

        REST_FRAMEWORK = {
            'DEFAULT_AUTHENTICATION_CLASSES': [(
                'rest_framework.authentication.SessionAuthentication'
                if 'DEV' in os.environ
                else 'dj_rest_auth.jwt_auth.JWTCookieAuthentication'
            )]
        }

- Again in setting.py add the following under REST_FRAMEWORK : 

        REST_USE_JWT = True
        JWT_AUTH_SECURE = True
        JWT_AUTH_COOKIE = 'my-app-auth'
        JWT_AUTH_REFRESH_COOKIE = 'my-refresh-token'
        
        REST_AUTH_SERIALIZERS = {
            'USER_DETAILS_SERIALIZER': 'gamer_connect_api.serializers.CurrentUserSerializer'
        }
- Create serializers.py and create dj_rest_auth
- python manage.py migrate
- run pip freeze > requirements.txt 

## Backend Deployment 

### ElephantSQL(Database):
- Navigate to https://www.elephantsql.com/
- Click Login/Creat a account.
- Click "Create New Instance".
- Create a name for the instance.
- Select Tiny Turtle.
- Leave Tags empty and click "Select Region".
- Select your region.
- Click Review in the bottom right corner.
- Click Create instance.
- Click on your newly created instance.
- Copy the URL of the instance.
- Go to Heroku 
- Click on settings and reveal config vars
- set the key as DATABASE_URL and paste in the url in the value :

       [DATABASE_URL]   [postgres://xxxxxxxxxxxxxxxxxxxxx]

- Now go back to your IDE 
- Run pip3 install dj_database_url==0.5.0 psycopg2 in the terminal
- go to settings.py and import dj_database_url underneath the import for os

        import os
        import dj_database_url
- Still in settings.py update the DATABASES section with the following: 

        if 'DEV' in os.environ:
            DATABASES = {
                'default': {
                    'ENGINE': 'django.db.backends.sqlite3',
                    'NAME': BASE_DIR / 'db.sqlite3',
                }
            }
        else:
            DATABASES = {
                default': dj_database_url.parse(os.environ.get("DATABASE_URL"))
            }

- add you db url to env.py :

        os.environ['DATABASE_URL'] = "<your PostgreSQL URL here>"

- Temporarly comment out DEV so that the external db can connect to your IDE
- Go back to settings.py and add a print satement at the bottom of the database if else statement:

        
        if 'DEV' in os.environ:
            DATABASES = {
                'default': {
                    'ENGINE': 'django.db.backends.sqlite3',
                    'NAME': BASE_DIR / 'db.sqlite3',
                }
            }
        else:
            DATABASES = {
                default': dj_database_url.parse(os.environ.get("DATABASE_URL"))
            }
            print("connected")

- -–dry-run your makemigrations with following in the terminal:

    python3 manage.py makemigrations --dry-run

- if succesful connection is made you should see connected in the terminal
- Remove print statement
- Run python3 manage.py migrate
- Create yourself a super user for the database by running - python3 manage.py createsuperuser
- Follow the steps to create your superuser username and password
- Confirm this has been added by going back to Elephantsql
- click on your instance 
- select browser in the left navigation
- Click the table queries and select auth_user
- When you click execute you should now see your new superuser

### IDE Setup For Deployment: 

- In the terminal of your IDE run - pip3 install gunicorn django-cors-headers
- Run in the terminal - pip freeze --local > requirements.txt
- Create a Profile in the top level of the project (Needed for Heroku)
- Add the following to the Procfile: 

        release: python manage.py makemigrations && python manage.py migrate
        web: gunicorn gamer_connect_api.wsgi

- Go to settings.py and take your Heroku app's URL and add to ALLOWED_HOSTS

        ALLOWED_HOSTS = ['localhost', '{{your_app_name}}.herokuapp.com']
- Add corsheaders to INSTALLED_APPS underneath dj_rest_auth.registration

        INSTALLED_APPS = [

            'dj_rest_auth.registration',
            'corsheaders',
        ]

- Add corsheaders middleware to the TOP of the MIDDLEWARE

            SITE_ID = 1
            MIDDLEWARE = [
                'corsheaders.middleware.CorsMiddleware',
                ...
            ]
- Under the MIDDLEWARE list, set the ALLOWED_ORIGINS for the network requests made to the server with the following code:

            if 'CLIENT_ORIGIN' in os.environ:
                CORS_ALLOWED_ORIGINS = [
                    os.environ.get('CLIENT_ORIGIN')
                ]
            else:
                CORS_ALLOWED_ORIGIN_REGEXES = [
                    r"^https://.*\.gitpod\.io$",

- Enable sending cookies in cross-origin requests to allow users to use authentication.

            else:
                CORS_ALLOWED_ORIGIN_REGEXES = [
                    r"^https://.*\.gitpod\.io$",
                ]

            CORS_ALLOW_CREDENTIALS = True


- Set the JWT_AUTH_SAMESITE attribute to 'None' to allow the front end and the API to talk between different platforms
            
            JWT_AUTH_COOKIE = 'my-app-auth'
            JWT_AUTH_REFRESH_COOKE = 'my-refresh-token'
            JWT_AUTH_SAMESITE = 'None'

- Remove the default SECRET_KEY and replace with the following to use env.py

            SECRET_KEY = os.getenv('SECRET_KEY')
    
- Create a NEW value for your SECRET_KEY environment variable and add it to env.py file:

            os.environ.setdefault("SECRET_KEY", "YourNewKey")


- Set DEBUG to be True only if the DEV environment variable exists.

            DEBUG = 'DEV' in os.environ

- Comment DEV back in env.py

- Run - pip freeze --local > requirements.txt
- Add, Commit & Push to Github



### Connect ElephantSQL instance to Db Visualizar

- Install DB visualizar
- Log into ElephantSQL 
- Go to your istance
- stay on details tab
- Once DBVisualizer is installed start it up
- Click on Create a Connection
- Select driver name as PostGresSQL
- This will take you to a new page
- In the form enter following details from your isntance:

    - Give your DB a name
    - In the database Server enter your ElephantSql Server but leave out the inastance name in the bracket at the end so it looks like this:

            {{name}}.db.elephantsql.com

    - Take your User & Default database from Elephant SQL and enter it in the Database field and the Database UserId field in DbViusalizar
    - Keep password source as `From Database Password Field`
    - Copy your password from ElephantSQL and enter it in the Database Password field.
    - Click Connect 

### Heroku Deployment

- Go to the "Settings" tab and click "Reveal Config Vars."
- Add the following configuration variables:
- SECRET_KEY: (Your secret key)
- DATABASE_URL: (You should already have this if you created an elephantSQL PostGresdb)
- CLOUNDINARY_URL: (Cloudinary API URL)
- DISABLE_COLLECTSTATIC: 1
- Click the "Deploy" tab.
- Scroll down to "Connect to GitHub" and sign in/authorize when prompted.
- In the search box, locate the repository you wish to deploy and click "Connect."
- Scroll down to "Manual Deploy" and select the main branch.
- Click "Deploy."
- The app should now be successfully deployed.



## Testing :

### Test Scenario : Image Upload Functionality
#### Objective: Ensure a logged-in user can successfully upload images for their gaming posts.
Test Steps:

- Log in with a valid user account.
- Navigate to the "Create" link.
- Select the option to upload an image.
- Upload an image file.
- Verify that the image is displayed correctly in the post preview.
- Submit the post and check if the image is visible on the platform.

Result: The image uploaded was displayed correctly in the post preview, and the image was visible on the platform as expected.

### Test Scenario : Post without Image
#### Objective: Ensure a logged-in user cannot create a post without uploading an image.
Test Steps:

- Log in with a valid user account.
- Navigate to the "Create" link.
- Enter post details without attaching an image.
- Submit the post.

Result: An alert error message prevented the post submission without attaching an image, as expected.

### Test Scenario : Video Upload Functionality
#### Objective: Ensure a logged-in user can successfully upload videos for their gaming posts.
Test Steps:

- Log in with a valid user account.
- Navigate to the "Create" link.
- Select the option to upload a video.
- Upload a video file.
- Verify that the video is displayed correctly in the post preview.
- Submit the post and check if the video is visible on the platform.

Result: The video uploaded was displayed correctly in the post preview, and the video was visible on the platform as expected.

### Test Scenario : Post without Video
#### Objective: Ensure a logged-in user cannot create a post without uploading a video.
Test Steps:

- Log in with a valid user account.
- Navigate to the "Create Post" section.
- Enter post details without attaching a video.
- Submit the post.
- Result: An alert error message prevented the post submission without attaching a video, as expected.

#### Overall Result Summary for Logged-In User:
Image and Video Upload: A logged-in user can successfully upload both images and videos for their gaming posts. <br>
Post Creation Without Media: A logged-in user is prevented from creating posts without attaching an image or video, triggering an alert.


### Test Scenario : Logged-Out User Attempts Post Creation
#### Objective: Ensure a logged-out user cannot access the image upload functionality.
Test Steps:

- Log out of the user account.
- Attempt to navigate to the "Create" section by using the endpoint "/posts/create".
- Verify that the site redirects the user to the home page.

Result: A logged-out user attempting to access the use the create a post functionality is redirected to the home page, preventing post creation without authentication, as expected.



### Test Scenario: Scroll Through Posts
#### Objective: Ensure users can scroll through all the latest posts on the site.
Test Steps:

- log in with a valid user account.
- Navigate to the home.
- Scroll through the posts.

Result: Users can successfully scroll through all the latest posts on the site, as expected.


### Test Scenario: View Individual Post
#### Objective: Ensure users can view detailed information about an individual post.
Test Steps:

- Log in with a valid user account.
- Click on a post from the home section.
- Verify that detailed information, including post content and comments, is displayed correctly.
- Check for options to like and comment the post.

Result: Users can successfully view detailed information about an individual post, including post content and comments. Options to like and comment the post are available, as expected.


### Test Scenario: Responsive Navbar
#### Objective: Ensure the navbar is responsive and allows easy navigation between different pages on the site.
Test Steps:

- Log in with a valid user account.
- Navigate to different pages using the responsive navbar.
- Verify that all navbar links are accessible and lead to the correct pages.

Result: The navbar is responsive, showing different icons based on the user's signed-in status. All navbar links are accessible and lead to the correct - pages, as expected.


### Test Scenario: Like a Post
#### Objective: Ensure users can like posts to express support.
Test Steps:

- Log in with a valid user account.
- Navigate to a post.
- Click on the like button.
- Verify that the like count increments, indicating successful like.
Result: The like count incremented, indicating successful like of the post.

### Test Scenario: Unlike a Post
#### Objective: Ensure users can unlike posts.
Test Steps:

- Log in with a valid user account.
- Navigate to a post.
- Click on the like button.
- Click on the like button again (unlike).
- Verify that the like count decrements, indicating successful removal of the like.
Result: The like count decremented upon unliking, demonstrating that users can both like and unlike a post.

### Test Scenario: Unable to Like Own Post
#### Objective: Ensure users cannot like their own posts.
Test Steps:

- Log in with a valid user account.
- Navigate to a post owned by the user.
- Attempt to like the post.
- Recieved message "You cant like your own post" 

Result: Users are unable to like their own posts, preventing self-liking as expected.


### Test Scenario: Search Functionality
#### Objective: Ensure users can search for posts and user profiles using keywords.
Test Steps:

- Log in with a valid user account.
- Enter a keyword in the search bar.
- Verify that search results include relevant posts and user profiles.

Result: Search results include relevant posts and user profiles based on the entered keyword, as expected.

### Test Scenario: Search Functionality(Cant find a post)
#### Objective: Ensure users get a message if their are no posts associated to the input
Test Steps:

- Log in with a valid user account.
- Enter a keyword in the search bar.
- Verify that search results displays the following message "No results found. Adjust the search keyword."

Result: Search results that dont include relevant posts and user profiles are shown a image and message.



### Test Scenario: Liked Posts Section
#### Objective: Ensure users can easily revisit posts they've liked.
Test Steps:

- Log in with a valid user account.
- Click on the "Liked Posts" link in the navbar.
- Verify that all liked posts are displayed.

Result: All liked posts are displayed in the "Liked Posts" section, providing a straightforward way to revisit favorite gaming moments, as expected.


### Test Scenario: Edit Post
#### Objective: Ensure post owners can edit their post title and description.
Test Steps:

- Log in with a valid user account.
- Navigate to a post owned by the user.
- Find and click on the "Edit" option.
- Modify the post title and description.
- Save the changes.
- Visable confirmation message.
- Verify that the post is updated with the new information.

Result: The user was successfully taken to the edit form, and the post was updated with the new information as expected.


### Test Scenario: Delete Post
#### Objective: Ensure users can delete their posts.
Test Steps:

- Log in with a valid user account.
- Navigate to a post owned by the user.
- Find and click on the "Delete" option.
- Confirm the deletion.
- Verify that the post is removed from the platform.

Result: A confirmation alert appeared, and the post was successfully removed from the platform.


### Test Scenario: Add Comment
#### Objective: Ensure users can actively contribute to post discussions by adding comments.
Test Steps:

- Log in with a valid user account.
- Navigate to a post.
- Enter a comment in the comment section.
- Verify that the comment is successfully added and visible.

Result: The comment was successfully added and visible in the comment section.

### Test Scenario: Edit/Delete Comment
#### Objective: Ensure comment owners can edit and delete their comments.
Test Steps:

- Log in with a valid user account.
- Navigate to a post with user comments.
- Find and click on the "Edit" option for a comment.
- Modify the comment and save changes.
- Verify that the comment is updated.
- Find and click on the "Delete" option for a comment.
- Confirm the deletion.
- Verify that the comment is removed from the post.

Result: The comment was successfully updated, and the deletion confirmation appeared, removing the comment from the post.


### Test Scenario: Create New Account
#### Objective: Ensure users can successfully create a new account.
Test Steps:

- Navigate to the registration page.
- Enter valid registration information.
- Submit the registration form.
- User is directed to login page
- Login with newly created credentials

Result: The new account was created successfully, and the user was logged in.


### Test Scenario: View User Profile
#### Objective: Ensure users can view fellow gamers profiles.
Test Steps:

- Log in with a valid user account.
- Navigate to a user profile from a post or search results.
- Verify that the user profile displays relevant information, including posts and user details.

Result: The user profile displayed relevant information, including posts and user details.

### Test Scenario: Follow/Unfollow User
#### Objective: Ensure users can follow and unfollow other gamers.
Test Steps:

- Log in with a valid user account.
- Navigate to a user profile.
- Click on the "Follow" button.
- Verify that the user is added to the follower list.
- Click on the "Unfollow" button.
- Verify that the like count decrements, indicating successful removal of the like.

Result: The user was successfully added to the follower list and removed upon unfollowing.

### Test Scenario: Customize Profile
#### Objective: Ensure users can personalize their gaming identity by changing their profile picture and updating their bio.
Test Steps:

- Log in with a valid user account.
- Navigate to the "Profile Settings" section.
- Change the profile picture.
- Update the bio.
- Save the changes.
- Verify that the profile is updated with the new information.

Result: The profile was successfully updated with the new information.

### Test Scenario: Popular Profiles Section
#### Objective: Ensure users can effortlessly find and connect with popular profiles in the gaming community.
Test Steps:

- Log in with a valid user account.
- Navigate to the "Popular Profiles" section.
- Click on a popular profile.

Result: Upon submitting the contact form, the user receives an on-screen message confirming that the message has been successfully received. The message is clear and assures the user that their contact request has been acknowledged.


### Test Scenario: View Contact Requests in Admin Panel
#### Objective: Ensure the admin can view contact requests in the Django admin panel.
Test Steps:

- Log in with the admin superuser account.
- Navigate to the Django admin panel using the endpoint /admin/.
- Locate and access the section related to contact requests.
- Verify that the recently submitted contact request is displayed in the admin panel.

Result: The admin can successfully view and access contact requests in the Django admin panel. The integration allows for efficient management of user inquiries.

### Test Scenario: Create and Delete Game Post
#### Objective: Ensure users can successfully create and delete game posts, and the information is accurately displayed in the game section and on the user's profile.
Test Steps:

- Log in with a valid user account.
- Navigate to logged in users profile.
- Click on the profile edit icon.
- Click on add a game
- Create a new game post by entering details about the currently played game and indicating if looking for friends to play.
- Verify that the created game post is displayed in the game section and on the user's profile.
- Navigate to back to the profile.
- Delete button should now be visable
- Delete the created game post.
- Verify that the deleted game post is no longer displayed in the game section and on the user's profile.

Result: Users can successfully create and delete game posts. The information is accurately displayed in the game section and on the user's profile, ensuring that users can share their current gaming preferences and connect with others.

## React -ES Lint Validator

Regrettably, when I first learned about eslint, I faced challenges in the installation process and encountered difficulties in configuring it to work seamlessly. Unfortunately, these issues, combined with time constraints, prevented me from conducting a thorough test with eslint. I will aim to integrate eslint into the project moving forward to ensure a more robust and reliable code quality check in the future.


## LightHouse testing

![LightHouse](https://res.cloudinary.com/dxxzc99pz/image/upload/v1702460394/lighthouse_lyrfze.png)

During the Lighthouse testing, it was observed that the performance was below the desired standard. 
This outcome, attributed to the the amount images and videos being rendered, suggests an opportunity for improvement in subsequent iterations by implementing image and video compression before the upload process.<br>
Unfortunately, the time constraints this has not been released.



## API Testing

The APIs underwent local testing in the development phase, with the primary testing conducted as an integral part of the front-end repositories. This included manual testing of the actual APIs through form inputs and page loads.

pep8 testing was applied to all folders, revealing several small issues such as lines exceeding length limits, unnecessary blank spaces, indentation problems, and docstring concerns.

All identified issues were addressed, with the exception of extended lines in migration files and settings.

Unit testing was carried out as well on the Posts app following along with the walkthrough material for DRF_API
You can find the unit testing [here](https://github.com/JamieB92/Gamer-Connect-Backend-PP4).


## Bugs 

Presented below is a comprehensive list of bugs identified during the development phase. Each bug is accompanied by its individual issue story, and you can access a detailed investigation for each one at the provided link.

 - [Issue 19](https://github.com/JamieB92/Gamer-Connect-Backend-PP5/issues/19) - Unable to Upload Video to Cloudinary.
 - [Issue 1](https://github.com/JamieB92/gamer-connect-frontend-pp5/issues/1) - Dev server wont open after install of React Gitpod template.
 - [Issue 2](https://github.com/JamieB92/gamer-connect-frontend-pp5/issues/2) - User would stay signed in even the logout function was called.
 - [Issue 5](https://github.com/JamieB92/gamer-connect-frontend-pp5/issues/5) - When Uploading a image or a video displaying incorrect route directory to access files. 
 - [Issue 7](https://github.com/JamieB92/gamer-connect-frontend-pp5/issues/7) - Post not showing preview of video and throwing an error when clicking play on mobile browser
 - [Issue 21](https://github.com/JamieB92/Gamer-Connect-Backend-PP5/issues/21) - Unable follow and unfollow a user


### [Issue 6](https://github.com/JamieB92/gamer-connect-frontend-pp5/issues/6) - User getting logged out as soon as page refreshes on a mobile browser.

The identified issue is a known bug preventing the application from opening on Apple mobile devices on various browsers. Specifically, when users attempt to log in, they are redirected back to the login page. This bug stems from the failure to save cookies in the local storage. 
#### To address this issue on Safari web browsers, it is necessary to disable "Prevent Cross-Site Tracking" in the browser settings.

For a further release I am looking at resolving this by deploying both the Heroku apps to one domain which I believe will resolve the issue.
I have linked in the issue the steps needed to take to do this and will be looking to implement in the new year.

## Techonlogies Used
- React
- Django Rest Framework
- Bootstrap
- Heroku
- ElephantSQL
- VisualizerDB
- Github
- Gitpod
- Git
- Cloudinary

## Dependencies

### React:

    {
    "name": "moments",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "@testing-library/jest-dom": "^5.17.0",
        "@testing-library/react": "^11.2.7",
        "@testing-library/user-event": "^12.8.3",
        "axios": "^0.21.4",
        "bootstrap": "^4.6.0",
        "jwt-decode": "^3.1.2",
        "react": "^17.0.2",
        "react-bootstrap": "^1.6.3",
        "react-dom": "^17.0.2",
        "react-infinite-scroll": "^0.1.5",
        "react-infinite-scroll-component": "^6.1.0",
        "react-player": "^2.13.0",
        "react-router-dom": "^5.3.4",
        "react-scripts": "^5.0.1",
        "web-vitals": "^1.1.2"
    },           

### Django: 

        asgiref==3.7.2
        cloudinary==1.36.0
        dj-database-url==0.5.0
        dj-rest-auth==2.1.9
        Django==3.2.23
        django-allauth==0.44.0
        django-cloudinary-storage==0.3.0
        django-cors-headers==4.3.1
        django-filter==23.4
        djangorestframework==3.14.0
        djangorestframework-simplejwt==5.3.0
        gunicorn==21.2.0
        oauthlib==3.2.2
        Pillow==10.1.0
        psycopg2==2.9.9
        PyJWT==2.8.0
        python-magic==0.4.27
        python3-openid==3.2.0
        pytz==2023.3.post1
        requests-oauthlib==1.3.1
        sqlparse==0.4.4
        urllib3==1.26.15




## Credits

- Upload image Icon - https://uxwing.com/upload-image-icon/
- Card - https://uiverse.io/adamgiebl/strong-zebra-87 
- No results image - https://www.freepik.com/free-vector/game-with-glitch-effect_7997336.htm#query=game%20over&position=0&from_view=search&track=ais&uuid=0e1e2267-04f0-4cb9-9f89-6bd8403ca94a
- Serach Bar - https://uiverse.io/chethan025/tasty-gecko-98
- Games Form - https://www.pexels.com/photo/white-xbox-one-game-controller-3593986/
- Walkthrough Projects CI - DRF Api and Moments project
- Gareth Mcgirr for the idea of the Games section / based of his Artist model for his site Doodles.