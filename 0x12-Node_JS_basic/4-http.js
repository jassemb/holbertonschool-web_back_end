const http = require('http');

const app = http.createServer((res) => {
  res.write('Hello Holberton School!');
  res.end();
});

app.listen(1245, (error) => {
  if (error) {
    console.log('Something went wrong', error);
  } else {
    console.log('Server is listening on port 1245');
  }
});
module.exports = app;
