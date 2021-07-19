const http = require('http');
const { getProducts, getProduct, createProduct } = require('./controllers/Product');

const server = http.createServer((req, res) => {
    /**
     * Hello World
     */
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<h1>Hello world!!!</h1>');
    // res.end();

    /**
     * Send response json data
     */
    // res.writeHead(200, {'Content-Type': 'application/json'});

    // res.write(JSON.stringify(products));
    // res.end();

    // short form of res.write + res.end
    //res.end(JSON.stringify(products));

    if (req.url === '/api/products' && req.method === 'GET') {
        getProducts(req, res);
    } else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET') {
        const pid = req.url.split('/')[3];
        getProduct(req, res, pid);
    } else if (req.url === '/api/products' && req.method === 'POST') {
        createProduct(req, res)
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Home Page</h1>');
    }
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, (err) => console.log(`Server running on port ${PORT}`));