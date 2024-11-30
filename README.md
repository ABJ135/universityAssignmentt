Here’s the plain text version of the README without code structure, ready to copy:

---

# Library Management System

## Overview  
This project implements a Library Management System using Node.js, Express.js, MongoDB, and Mongoose. It enables managing books, library members, and transactions efficiently through RESTful APIs.

---

## Features  
- Separate endpoints for managing **Books**, **Members**, and **Transactions** independently.  
- A specific feature to handle adding all data at once (`/transactions/addAll`) and retrieving all data together (`/transactions/showAll`).  
- Organized code structure using the MVC (Model-View-Controller) pattern.  

---

## Prerequisites  
- Node.js (v14 or later)  
- MongoDB (local or Atlas)  
- A REST client like Postman for testing.  

---

## Setup Instructions

1. **Clone the Repository**  
   ```
   git clone <repository-url>  
   cd <repository-directory>  
   ```

2. **Install Dependencies**  
   ```
   npm install  
   ```

3. **Configure MongoDB Connection**  
   Update the MongoDB connection string in the database configuration file.

4. **Start the Server**  
   Run the server on port 3000:  
   ```
   node index.js  
   ```  
   The server will start, and you should see:  
   ```
   Server is running on port 3000  
   Connected to MongoDB successfully  
   ```

---

## API Endpoints

### Transactions

1. **Add All Data**  
   **URL:** `/transactions/addAll`  
   **Method:** POST  
   **Purpose:** Add books, members, and transactions data in one request.  
   **Request Body:**  
   {  
     "books": {  
       "title": "The Great Gatsby",  
       "author": "F. Scott Fitzgerald",  
       "genre": "Fiction",  
       "yearPublished": 1925,  
       "availableCopies": 5  
     },  
     "members": {  
       "name": "John Doe",  
       "membershipNumber": "M12345",  
       "email": "john.doe@example.com",  
       "membershipType": "Regular",  
       "contactNumber": "123-456-7890"  
     },  
     "transactions": {  
       "transactionId": "T1001",  
       "bookId": "<book-id>",  
       "memberId": "<member-id>",  
       "issueDate": "2024-11-25",  
       "returnDate": "2024-12-25",  
       "status": "Issued"  
     }  
   }  
   **Response:**  
   {  
     "message": "All data added successfully",  
     "data": {  
       "books": { ... },  
       "members": { ... },  
       "transactions": { ... }  
     }  
   }  

2. **Retrieve All Data**  
   **URL:** `/transactions/showAll`  
   **Method:** GET  
   **Purpose:** Retrieve all books, members, and transactions in one request.  
   **Response:**  
   {  
     "books": [ { ... } ],  
     "members": [ { ... } ],  
     "transactions": [ { ... } ]  
   }  

---

### Books

1. **Add a New Book**  
   **URL:** `/books`  
   **Method:** POST  
   **Purpose:** Add a new book to the database.  

2. **Retrieve All Books**  
   **URL:** `/books`  
   **Method:** GET  
   **Purpose:** Retrieve all books from the database.  

---

### Members

1. **Add a New Member**  
   **URL:** `/members`  
   **Method:** POST  
   **Purpose:** Add a new member to the library.  

2. **Retrieve All Members**  
   **URL:** `/members`  
   **Method:** GET  
   **Purpose:** Retrieve all members from the database.  

---  

## Testing Instructions

### Testing with Postman
1. Open Postman and set the base URL to `http://localhost:3000`.
2. Use the POST endpoints to add books, members, and transactions:
   - Set the method to **POST**.
   - Select the **Body** tab, choose **raw**, and set the format to **JSON**.
   - Provide the required JSON data as per the examples above.
3. Use the GET endpoints to retrieve the data:
   - Set the method to **GET** and access the respective URLs.

---

## Dependencies
- **express**: Web framework
- **mongoose**: MongoDB object modeling
- **body-parser**: Middleware for handling JSON data

---  

Let me know if this works for you or if you need further adjustments!