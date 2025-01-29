# my-node-express-mongo-app/README.md

# My Node Express Mongo App

This project is a simple Node.js application using Express.js and MongoDB to handle form submissions. It allows users to submit and retrieve form data, including details such as date, technician name, customer name, amount, mobile number, address, description, and status.

## Project Structure

```
my-node-express-mongo-app
├── src
│   ├── controllers
│   │   └── formController.js
│   ├── models
│   │   └── formModel.js
│   ├── routes
│   │   └── formRoutes.js
│   ├── app.js
│   └── config
│       └── db.js
├── package.json
├── .env
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-node-express-mongo-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```

2. The server will run on `http://localhost:3000`.

## API Endpoints

- **POST /form**: Submit a new form entry.
- **GET /form**: Retrieve all form entries.

## Dependencies

- express: Web framework for Node.js
- mongoose: MongoDB object modeling tool
- dotenv: Module to load environment variables from a `.env` file

## License

This project is licensed under the MIT License.