# Dockerized React Web Application

## REACT.md

React.md is the official documentation that comes with creating a react app.

## Versions

### 0.1.0 : Starter React Folder (+ clean up)

=> `npx create-react-app . --template clean-cra`  
=> `npm start` start development server  
=> `npm run build` create production app  
=> `ctrl+c` stop development server  
=> remove unwanted files and folders  
=> create new folder structure.  
=> mod index.html

### 0.1.1 : Sync up local git with gitHub

=> `git remote add origin git@github.com:__domain__/__repo__`  
=> `git branch -M main`  
=> `git push -u origin main`

### 0.1.2 : Dockerize React Web Application

=> add: Dockerfile  
=> add: Docker-Compose file  
=> add: dockerignore file  
=> `docker compose up -d --build` start command  
=> `docker compose down -v` shutdown command  
=> `localhost:4080` docker port (one can change this)

### 0.1.3 : Update Dependencies (package.json)

=> `npm update`

### 0.1.4 : Sass

=> `npm install sass`  
=> add: folder css  
=> remove index.css  
=> add: App.scss  
=> mod: App.js

### 0.2.0 : React Routing - Navigation Bar

=> `npm install react-router-dom`  
=> add: Pages : Home.js  
=> add: Pages : Contact.js  
=> add: Pages : About.js  
=> add: Pages : index.js  
=> add: css : Home.scss  
=> add: css : Contact.scss  
=> add: css : About.scss  
=> mod: index.js  
=> mod: App.js  
=> add: Components : NavBar.js  
=> add: css : NavBar.scss
