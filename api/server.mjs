import app from './src/app.mjs'

const PORT = process.env.PORT || 3700;

app.listen(PORT, () => {
  console.log('App running on http://localhost:3700');
});