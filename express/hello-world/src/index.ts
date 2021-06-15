import express from 'express';
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.status(404).send("can't find that");
    const user = { name: 'joe' };
    res.render('index', { user });
});

app.get('/books/', (req, res) => {
    res.send('books');
});

app.get('/books/:bookid', (req, res) => {
    const bookid = parseInt(req.params.bookid, 10);
    const book = { bookid };
    res.render('book', { book });
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Example app listening at http://localhost:${port}`);
});
