import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const port = 5000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.set('view engine', 'ejs');

const movieList = [
  {
    id: 1,
    title: 'Terminator',
    year: 1984
  },
  {
    id: 2,
    title: 'Rocky',
    year: 1976
  }
]

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

app.get('/movies/', (req, res) => {
  res.send({ movies: movieList, count: movieList.length });
});

app.post('/movies/', (req, res) => {
  const movie = req.body;
  movieList.push(movie);
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
