import express from 'express';
import ejsLayouts from 'express-ejs-layouts';

const port = 5000;
const app = express();

app.use(ejsLayouts);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const mascots = [
    { name: 'Sammy', organization: 'DigitalOcean', birth_year: 2012 },
    { name: 'Tux', organization: 'Linux', birth_year: 1996 },
    { name: 'Moby Dock', organization: 'Docker', birth_year: 2013 },
    { name: 'Ferris the crab', organization: 'Rust', birth_year: 2013 },
  ];
  const tagline = 'No programming concept is complete without a cute animal mascot.';

  res.render('index', { mascots, tagline });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Example app listening at http://localhost:${port}`);
});
