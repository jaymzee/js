import express from 'express';
import expressLayouts from 'express-ejs-layouts';

const app = express();
const port = 5000;

app.use(express.static('public'));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', 'layouts/default');

app.get('/', (req, res) => {
  res.render('index', { message: 'Hello, World!', caption: 'Greeting' });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
