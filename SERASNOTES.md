npm create vite@latest
npm i
config eslint file
replace app.jsx with boilerplate
npm run dev
make components and services directory
create src/services/petService.js
git init
git add --all
git commit -m "init commit"
make repo
connect repo

//===============================================

IN A SEPARATE TERMINAL cd into your back end repo 
run nodemon to run the back end server
You can verify it's running in postman with a GET localhost:3000/pets

*SERVER is running on port 3000
*FRONT END is running on port 5173

//================================================

Using environment variables with Vite
With a SPA like React, we want the back-end and front-end to be as loosely coupled as possible. This means that instead of hard-coding our localhost:3000 address into the front-end codebase for our server calls, we want to use an environment variable that can change depending on context.

That way, if we deploy an app, we only need to tell the React app where the back-end is located using an environment variable.

config env with vite url
bring the url into the services file

🚨 Environment variables are loaded when the app is first run, and Vite does not track changes to the .env file. If you alter your .env file, you must restart your development server for the changes to take effect.

restart front end server by using npm run dev