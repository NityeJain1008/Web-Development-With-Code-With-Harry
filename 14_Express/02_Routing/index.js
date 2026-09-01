const express = require('express');
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log(req.body.name);
    res.send('POST request to the homepage');
});

app.put('/', (req, res) => {
    res.send('PUT request to the homepage');
});

app.delete('/', (req, res) => {
    res.send('DELETE request to the homepage');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})