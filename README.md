# Shopify-Backend-Developer-Intern-Challenege

Shopify Backend Developer Intern Challenge - Summer 2022

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Follow the below steps to setup the project

### Step I: Setting up React

#### Clone the project from GitHub link provided

* *git clone <https://github.com/dhrumil29796/Shopify-Backend-Developer-Intern-Challenge.git>*

* *cd Shopify-Backend-Developer-Intern-Challenge*

* *npm install* (this command will install all the dependencies required for the project to run - basically downloads the node_modules)

### Step II: Setting up Firesbase & Firestore

* Add a Project in Firebase:
  * After logging in head over to the Firebase Console and click Add Project.
  * Enter the project name and continue.
  * With this we would have successfully created the Firebase project.
* Create a Firestore DB:
  * On sidebar select Firestore Database.
  * Click on Create Database button & a prompt will appear asking to start the database in production mode or test mode.
    * Choose Start in Test Mode and click next.
    * With the an empty NoSQL Firestore DB is created.

### Step III: Adding Firebase Config to the React Project

* To connect with the Firebase we first need to install the latest Firebase SDK.
  * *npm install firebase*
  * Then add the Firebase Config to the *.env* file in the project.

### Step IV: After setting up everything

* Run the following command to start the application
* *npm start*
