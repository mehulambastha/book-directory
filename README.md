# Book-Directory
Task for applying to TheGoodGameTheory

## Installing and Running
1. Clone the repository to your local system
   ```bash
   git clone https://github.com/mehulambastha/book-directory.git
   ```
2. Move into the directory
   ```bash
   cd book-directory
3. Install the required dependencies
   ```bash
   npm install
   ```
4. Run the server with nodemon!
   ```bash
   nodemon server.js
   ```
The server will be running at http://localhost:2001 (or port 2002, if 2001 doesn't work)

# Additional requirements
Make a mongoDB atlas account and create a database in the cloud. Now take your connection string, and put it in the .env file
*Sample connection string*
```bash
mongodb+srv://mehul:<your-password>@cluster0.9mrxdm8.mongodb.net/<your-database-name>?retryWrites=true&w=majority
```

You're all set to go!

## API Endpoints
1. ``` POST /books/ ``` To create new books
2. ``` GET /books/ ``` To view saved books
3. ``` PUT /books/:id/ ``` To update a book
4. ``` DELETE /books/:id/ ``` To delete a book

## Schema Structure for book data
```bash
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: false
    }
```

## Directory Structure
```bash
├── controllers
├── database
├── models
├── node_modules
├── package-lock.json
├── package.json
├── routes
└── server.js
```

Thank you for spending your time exploring this project!
