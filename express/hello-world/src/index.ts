import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/books/', (req, res) => {
  res.send('books');
});

app.get('/books/:bookid', (req, res) => {
  const bookid = req.params.bookid;
  res.send(`book: ${bookid}`);
});

app.listen(port, () => {
// tslint:disable-next-line:no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
