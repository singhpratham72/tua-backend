# Tua Backend - RESTful API for Mobile Payments

Tua Backend is a Node.js application that provides a RESTful API for the Tua mobile payments app. It serves as the backend server responsible for handling requests related to creating and managing bank transfers. The API is built using Express.js and the data is stored in a MongoDB database using Mongoose.

## API Endpoints

The Tua Backend API provides the following endpoints:

- `POST /api/create-transfer`: Registers a new bank transfer by accepting the necessary details and storing them in the MongoDB database.

- `GET /api/transfers`: Retrieves a list of all transfers from the MongoDB database.

- `GET /api/transfers/:ID`: Retrieves the details of a specific transfer by its ID.

## Installation and Setup

To run the Tua Backend server locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/tua-backend.git`
2. Change directory to the project: `cd tua-backend`
3. Install dependencies: `npm install`
4. Set up the environment variables:
   - Create a `.env` file in the root directory.
   - Add the following content to the `.env` file:
     ```
     DATABASE_URL = your_mongodb_connection_string
     ```
     Replace `your_mongodb_connection_string` with the actual MongoDB connection string.
5. Start the server: `npm run dev`
6. The server will start running on `http://localhost:3000`.

## Usage

Once the server is running, you can make requests to the available API endpoints using tools like Postman or directly from the Tua mobile app. Here are the available API endpoints:

- **POST /api/create-transfer**:
  - Accepts a JSON payload containing the necessary transfer details (sender, sender bank details, beneficiary, and amount).
  - Creates a new transfer and stores it in the MongoDB database.
  - Returns a response with the newly created transfer details.

- **GET /api/transfers**:
  - Retrieves a list of all transfers from the MongoDB database.
  - Returns a response with an array of transfer objects.

- **GET /api/transfers/:ID**:
  - Retrieves the details of a specific transfer by its ID.
  - Requires passing the transfer ID as a parameter in the URL.
  - Returns a response with the transfer details object.

## Contact

For any inquiries or feedback, please contact me at singhpratham72@gmail.com.