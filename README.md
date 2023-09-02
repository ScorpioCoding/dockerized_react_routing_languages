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
=> `git branch -M main` - `git push -u origin main`

### 0.1.2 : Dockerize React Web Application

=> add: Dockerfile  
=> add: Docker-Compose file  
=> add: dockerignore file  
=> `docker compose up -d --build` start command  
=> `docker compose down -v` shutdown command  
=> `localhost:4080` docker port (one can change this)

#

## Commands

npm install sass

npm install react-router-dom

npm install react-i18next i18next

npm install i18next-http-backend

npm install i18next-browser-languagedetector

docker compose up -d --build

docker compose down -v

## Versions:

0.1.0 : Starter React Folder (+ clean up)  
0.1.1 : Sync up local git with gitHub

0.2.0 : Adding Navigation  
0.3.0 : Adding Multi Language [en, nl, fr]  
0.3.1 : Loading Translations from `src` directory  
0.3.2 : Deactivating `i18next-http-backend`  
0.4.0 : Adding MetaData  
0.4.1 : Dockerizing the App -> `localhost:4080`  
0.4.2 : Data - Company Information file  
0.5.0 : Scss - WidePack Scss Library added  
0.5.1 : Copyright Footer added  
0.5.2 : Translation convert to Multiple `json` files  
0.6.0 : Images added  
0.6.1 : Pages - Home  
0.6.2 : Pages - Why  
0.6.3 : Pages - Contact  
0.6.4 : Pages - Location  
0.6.5 : Pages - Gallery
