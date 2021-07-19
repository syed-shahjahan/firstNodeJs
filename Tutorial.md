# Vanilla Node.js REST API No Framework
[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/organization/repository)

## Prerequisites
1. Create a new node.js project
2. Run `npm install -D nodemon`. Installing node monitor package.
3. Create a sample product data json file as example shown below,
```
    [
        {
            "id": "1",
            "name": "Airpods Wireless Bluetooth Headphones",
            "description": "Bluetooth ....",
            "price": 250
        },
        {}
    ]
```
4. Create a server.js file
5. Configure server.js file in package.json file script.
```
    "scripts": {
        "start": "node server.js",
        "watch": "nodemon server.js"
    },
```

## Working on Server.js file

- Import `http` package by `const http = require('http');`
- Add/Create PORT. Example: `const PORT = process.env.PORT || 5000;`
- Add server listener ```server.listen(PORT, (err) => console.log(`Server running on port ${PORT}`));```

### 1. Creating a Hello world server:

Use http.createServer to create a server with request and response parameters.
Set statuscode to 200 and set header & body to a server.
Finally add `res.end()` method.
```
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello world!!!</h1>');
    res.end();
}
```

### 2. Send product data response:

Use writeHead method to set statuscode and header content-type.
Use res.write() method to set response body.
```
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(products));
    res.end();
}
```

### Alternative
Use res.end() method to set the response body instead of res.write() method.
```
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(products));
}
```