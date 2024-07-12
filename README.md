# Backend User Management System

## **Description**

This is the backend of a User Management System that allows for user registration and retrieval of user data. It is built using Node.js, Express, and MongoDB.

## **Features**

- User registration with validation
- Retrieval of user data with pagination and search functionality
- Global error handling for consistent error responses

## **Installation**

- Clone the repository.
- Install dependencies using npm install.
- Set up environment variables in a .env file based on the provided .env.example.
- Start the server using npm run dev.

## **Usage**

- Register a new user by sending a POST request to /user/register with the required user details.
- Retrieve all users or search for users by sending a GET request to /user with optional query parameters for search and pagination.