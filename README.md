# Transaction Management App

[Live Demo](https://ornate-kulfi-cf002a.netlify.app/)
[YouTube](https://www.youtube.com/watch?v=MYLQmAo_Nb4)
## Overview

Transaction Management is a CRUD app built to help real estate agents view their houses under contract from a birds-ey view.  Being a realtor myself, I notice that once we pass a certain number of homes under contract, we lose focus and track. 
This app helps realtors see where they are in every transaction and what steps follow next. 

## Images

![First look at the page ](https://i.imgur.com/QV1l4Cj.png)

![enter image description here](https://i.imgur.com/3n5hv7d.png)

![enter image description here](https://i.imgur.com/N6gBDTj.png)

![enter image description here](https://i.imgur.com/K2qxwMy.png)

![enter image description here](https://i.imgur.com/ylpfkzG.png)

# Process

I first started off by creating all of the components. In total, we have 4 components. I installed React Bootstrap to design a very simple UI/UX layout. I went with a clean minimal layout to emphasize the functionality of the app. 

I used the context API to keep track of the state of all the components. Inside the datatContext.js file, we have the function that is shared between every single component. 
I also created a reducer that will allow me to keep track of the old state and give me a new state.

In the Hero section of the app, you can add a new transaction and you can choose between a seller or a buyer. Each option has a set of different steps. When the user hits add transaction I check what option the user picked if it's a seller I only display seller data onto the screen vice versa with the buyer. 

The user can edit each transaction and change between a seller and buyer, we also have the option to delete a transaction. 

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

## What I learned 

-   How to implement the Context API
-   How to use React Router v6
-   How to use reducer instead of useState

### Continued Development

I would like to learn about authentication and add a user login. I would also like to learn about backend development or Supabase so that a user's transactions can be saved in a database. I will also like to add additional functionality to each eachClient component. I would like to add a comment section and the ability to add files. 

## Made By

-   Personal Portfolio:  [Jonaathanaldas.com ](https://jonathanaldas.com/)
