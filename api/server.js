const app = require('./src/app')

const PORT = process.env.PORT || 3700;

app.listen(PORT, () => {
  console.log('App running on http://localhost:3700');
});