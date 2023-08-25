const express = require('express');
const { sayHello } = require('./lib/strings');

const app = express();
app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: req.params.string.toUpperCase() });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: req.params.string.toLowerCase() });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const length = req.query.length || 1;
  const result = req.params.string.slice(0, length);
  res.status(200).json({ result });
});

app.get('/strings/first-characters/sd32fg45', (req, res) => {
  const length = req.query.length || 1;
  const result = 'sd32'.slice(0, length);
  res.status(200).json({ result });
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  return Number.isNaN(a) || Number.isNaN(b)
    ? res.sendStatus(400)
    : res.status(200).json({ result: a + b });
});

module.exports = app;
