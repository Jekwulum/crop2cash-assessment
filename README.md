# Project Description
Crop2Cash is an application programming interface (API) built using Node.js, Express.js, and PostgreSQL. It provides a user-friendly API for users to manage their farm-related data efficiently. The system allows users to add, update, and view information about farmers and crops.

# Features
- Create, update, and delete farmer records.
- Add and manage multiple crops for each farmer.
- Filter and search farmers based on specific attributes.

# Installation Instructions
To run the Crop2Cash application on your local machine, follow these steps:

1. Clone the repository: 
   ```shell
   git clone git@github.com:Jekwulum/crop2cash-assessment.git
   ```
2. Install the project dependencies:
   ```shell
   cd crop2cash
   npm install
   ```
3. Set up the PostgreSQL database:
   - Ensure you have PostgreSQL installed and running on your machine.
   - Run the code below on terminal
    ```shell
    npm run pg:init # initializes the data directory where PostgreSQL will store our data
    npm run pg:start # starts the PostgreSQL server
    npm run pg:createdb # creates a PostgreSQL database on the server
    ```
4. Setup the environment variables in a .env file in the project root driectory
   ```shell
   DB_USER=#your_username
   DB_DATABASE=crop2cash
   DB_PASSWORD=#your_password
   ```
5. Run the server
   - With Nodemon for development
   ```shell
   npm run dev
   ```

   - Without Nodemon
   ```shell
   npm run start
   ```

   The application will be accessible at `http://localhost:4000`