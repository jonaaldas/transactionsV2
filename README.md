
# Transaction Management App

[Live Demo](https://ornate-kulfi-cf002a.netlify.app/)
[YouTube](https://youtu.be/SkS4hNU2koo)

## Planning Phase / Engineering Process

## **Problem**

When I was a Real Estate agent in the past one of the problems I will face and my peers as well were losing track of a client's progress from A -Z from open to close in the transaction of a home. 

## **Thinking Process**

One of the things I thought about doing as a developer is trying to solve this problem with my new skillset. 
After learning Vanilla JS and React I decided to tackle this problem. 

## ***Things the app should have!***

 1. I am able to see all of my clients from a bird's eye view and easily identify where each client is in the transaction phase. 
 2. Can filter between buyers and sellers 
 3. It's easy to use and very intuitive
 4. No crazy designs just the bare minimum to see the app function 
 5. Able to Delete and Archive Clients for future reference


## ***The Outcome!***

I came up with a simple design using React Bootstrap and React as my main tool for the job. 

The app has one button where you can add new transactions aka clients

Upon creating the app you can see details of the client like the address they are buying and their details. 

You can see all of the clients you have from one page for an easy view and understanding of where everyone is in the process and how many clients you have under contract (I.E helping buy a home)

You can archive clients' profiles to reference later or when the files have come to a close.  

When you go to each client's profile you can see the steps that need to be taken in order to help this client get a home. 

## Overview
Transaction Management is a Fullstack app built to help real estate agents view their houses under contract from a birds-eye view.  Being a realtor myself, I notice that once we pass a certain number of homes under contract, we lose focus and track. 
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

- Jonathan Aldas:   [Twitter](https://twitter.com/jonathanxcoder)

-   Personal Portfolio:  [Jonaathanaldas.com ](https://jonathanaldas.com/)
