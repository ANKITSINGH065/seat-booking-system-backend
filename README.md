# Seat Booking Backend

This is the backend service for the Seat Booking system. It provides APIs for user authentication, seat management, and booking functionality. The backend is built using **Node.js** and **Express.js** and uses **MongoDB** as the database.

## Features

- **User Authentication**: Register and log in users securely using JWT.
- **Seat Management**: Manage seat availability and reset bookings.
- **Seat Booking**: Book seats with priority for seats in the same row.
- **RESTful API**: Provides endpoints for frontend integration.

## Tech Stack

- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing user and seat data.
- **Mongoose**: ODM for MongoDB.
- **JWT**: For secure user authentication.
- **dotenv**: For environment variable management.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ANKITSINGH065/seat-booking-system-backend.git
   cd seat-booking/backend
   npm install
   npm start
