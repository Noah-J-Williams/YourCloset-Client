# YourCloset

A closet app that lets you keep track of your clothes to make sure you aren't wasting money on things you won't wear.

## Brainstation Web Development Capstone Project

The problem: My fiance has a clost filled with all kinds of cool clothing, but always talks about how she never wears some of the clothing she owns, and ponders on how much money she spent to wear something even just once, so I decided I would make an app to help her catalogue all of her clothing to make sure she get the most she can out of every clothing purchase, and to increase her mindfullness when it comes to purchasing clothing as to reduce consume waste.

## Tech Stack

Front-end:
Create-react-app, React Router v6, Axios, Sass

Back-end:
Node.js, JWT (JSON Web Tokens), BCrypt, MySQL, Knex, express

Project Setup (Development)

Install required dependencies with npm
`cd client && npm i`
`cd server && npm i`

Back-end setup:

Create a MySQL Database and connect it through Knex with `knex init`

![image](https://user-images.githubusercontent.com/103670304/177542034-694b9813-a3b1-4450-883d-d1bfcce577da.png)  


Add a secret key to the .env (can be any string), and a port of your choosing

![image](https://user-images.githubusercontent.com/103670304/177542398-4390c351-1eb1-4356-83c3-439f7f06de5c.png)

Front-end setup:

Add the project url to the `.env` in the client folder

![image](https://user-images.githubusercontent.com/103670304/177542740-25601334-a730-4c47-8d41-e54a08012fdb.png)

##Run the server and client
I use two terminals, for the client user `npm start`
and for the server use `node server.js`

## Server end-points
all endpoints prefixed by /user
## /register
registers a user
`{
  username: "username string",
  email: "valid email string",
  password: "password string
}`

## /login
login a user, send a jwt token to the client

`{
  email: "valid email string",
  password: "correct password string"
}`

## /data
a get request to /data will return all of the clothing items for a logged in user

a post request to /data will add a new clothing item with 
`{
  cost: "cost float",
  title: "title string",
  category: "category string"
}`

a delete request to /data will delete the clothing item with the specified id

`{
  clothingId: "id int"
}`

## /upWear
increments the wears by one by the clothing id

`{
  clothingId: "id int"
}`

## /downWear
decrements the wears by one by the clothing id

`{
  clothingId: "id int"
}`

## Features
A user is greeted by the landing page with two CTAs
To login to their account or register a new one

![image](https://user-images.githubusercontent.com/103670304/177544629-8412ee71-8eba-4d75-9726-78b7592aa71f.png)


![image](https://user-images.githubusercontent.com/103670304/177544499-f2a207b8-c7b2-4a89-a5b7-d2f6cf76345c.png)

Add a new clothing item with cost, name, and category

![image](https://user-images.githubusercontent.com/103670304/177544721-6d185172-9d31-43c0-bb53-b3f24dc34334.png)

![image](https://user-images.githubusercontent.com/103670304/177544746-d2dad75e-085a-4386-b1e3-7e213502853e.png)

View the highest and lowest cost per wear outfits on their profile page

![image](https://user-images.githubusercontent.com/103670304/177544769-13a54b18-b06c-4b94-9a34-b1ef1c94133f.png)
![image](https://user-images.githubusercontent.com/103670304/177544789-1758bb8a-bd8c-46b8-a31d-d8ac5557d7a7.png)

Log out on their profile page

![image](https://user-images.githubusercontent.com/103670304/177544807-af2e42c3-72ec-42d6-8844-1fa730742d7a.png)

View their clothing items by category

![image](https://user-images.githubusercontent.com/103670304/177545007-0a4f84a4-e16b-4ad9-8ea1-9754456ab92d.png)

Delete clothing items
Increase or decrease the wears of a specific item
View the cost per wear of an item

![image](https://user-images.githubusercontent.com/103670304/177545079-f5e31532-360d-45a4-a988-487e40c7acf3.png)

Lessons learned:

I learned that UI design is much more difficult that I had initially thought, and that having a good idea of what components will be on the page helps to keep code DRY and encapsulate different items into their respective components. When breaking things down into components at the end, it begins to be hard to see which components share items between them.

Next steps:

Add image uploading so a user can see what their clothing item looks like
Add a search function so it is easier to find the clothing you want to wear when you have a large amount
Add a drag and drop outfit preview so create outfits in the app so you don't have to root through your closet
Break down components to make code more DRY
Reduce API calls to reduce cost if deployed
Increase effectiveness and understanding of React Hooks
Create the app in React Native for mobile devices
