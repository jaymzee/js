import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.status(404).send("can't find that");
});

app.get('/books/', (req, res) => {
    res.send('books');
});

app.get('/books/:bookid', (req, res) => {
    const bookid = parseInt(req.params.bookid, 10);
    res.send(`book: ${bookid}`);
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Example app listening at http://localhost:${port}`);
});
