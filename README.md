# Transaction Managment App

[Live Demo](https://ornate-kulfi-cf002a.netlify.app/)
[YouTube](https://youtu.be/SkS4hNU2koo)
## Overview

Transaction Management is a Fullstack app built to help real estate agents view their houses under contract from a birds-ey view.  Being a realtor myself, I notice that once we pass a certain number of homes under contract, we lose focus and track. 
This app helps realtors see where they are in every transaction and what steps follow next. 


## Images

![Home Page with transactions ](https://i.imgur.com/BAAaqv3.png)

![enter image description here](https://i.imgur.com/3i9UDIs.png)

![enter image description here](![](https://i.imgur.com/d6ovFXE.png)

![enter image description here](![](https://i.imgur.com/r9sUMc5.png)

![enter image description here](![](https://i.imgur.com/fY8fSFU.png)

# Process

I first started off by creating all of the components. In total, we have 4 components. I installed React Bootstrap to design a very simple UI/UX layout. I went with a clean minimal layout to emphasize the functionality of the app. 

I used the context API to keep track of the state of all the components. Inside the datatContext.js file, we have the function that is shared between every single component. 
I also created a reducer that will allow me to keep track of the old state and give me a new state.

In the Hero section of the app, you can add a new transaction and you can choose between a seller or a buyer. Each option has a set of different steps. When the user hits add transaction I check what option the user picked if it's a seller I only display seller data onto the screen vice versa with the buyer. 

The user can edit each transaction and change between a seller and buyer, we also have the option to delete a transaction. 

On the main homepage, the user filters the transactions between Buyers and Sellers. He can also Archive the transaction when he is done with it. He can access the archived transactions in separate tabs. 

On the transactions tab, he can un-Archive the transactions and also delete the transaction for good. 

## Built With 

 -  React
 -   Styled Components
 -   React Router v6
 -   Context API
 -   Hooks:
    -   useState
    -   useEffect
    -   useContext
    -   useReducer
   
 - Node.js
 - Express.js
 - MongoDB

## What I learned 

-   How to implement the Context API
-   How to use React Router v6
-   How to use reducer instead of useState
- How to build REST APIs
- How to integrate the frontend with the backend
- How to use express.js to build a server

### Continued Development

I would like to learn about authentication and authorization. Add different types of roles to users. 
## Made By

-   Personal Portfolio:  [Jonaathanaldas.com ](https://jonathanaldas.com/)
