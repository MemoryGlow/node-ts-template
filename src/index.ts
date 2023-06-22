import express, { Express } from 'express';
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});
app.listen(3000);

function a() {
  return console.log('algo');
}

function aa() {
  return console.log('algo');
}
const b = () => {
  console.log('a');
};
