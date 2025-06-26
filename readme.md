# Decription
This project is a basic Node.js application for serving static files from a public directory. It uses the built-in http, fs, and url modules alongside third-party packages like mime-types to handle requests and serve files with the correct content type.

Features
Serves static files from the public folder.

Handles requests for files such as index.html, images, CSS, and JavaScript.

Responds with a 404 Not Found status if a file is missing.

Dynamically sets the Content-Type header based on the requested file's MIME type.

# Requirements
Node.js (version 14 or higher).

# Installation
Clone this repository or copy the code into a new project folder.

Navigate to the project directory:

bash
Copy
Edit
cd <WahabAG Simple Server>
Install the required dependencies:


npm install mime-types
Usage
Place your static files (e.g., HTML, CSS, JS, images) in the public folder.

Start the server:


node server.js
Open your browser and navigate to:


http://localhost:8080
# File Structure
pgsql
Copy
Edit
Wahab AG Simple Server/
├── public/
│   ├── index.html
|   |──contact.html
│   ├── style.css
│   ├── index.js
│   └── images/
│       └── example.png
├── server.js
├── package.json
└── README.md
# How It Works
The server listens on port 8080 for incoming HTTP requests.

For each request:

The URL is parsed to determine the requested file path.

The server attempts to read the file from the public directory.

If the file is found:

It is returned with the correct Content-Type header.

If the file is not found:

A 404 Not Found response is returned.

Logs the requested paths and server status in the console.

# Example Output
Server Log

Server is listening on "http://localhost:8080"
Requested path: index.html
Returning: index.html
Requested path: styles.css
Returning: styles.css
NOT FOUND: /nonexistent-file.html
Dependencies
mime-types: Used to determine the MIME type of files based on their extensions.

# Future Enhancements
Add support for environment variables.
Add Frontend javascript for interactivity

Implement caching for frequently accessed files.

Provide better error pages for 404 responses.

