const hello = 'Hello World';

const getTimeString = () => {
  const d = new Date();
  const dateString = (`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
  return dateString;
};

const getTime = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plane' });
  response.write(getTimeString());
  response.end();
};

const getHello = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plane' });
  response.write(hello);
  response.end();
};

// export all the following or you could export it with module.exports getHello = () => {}
module.exports.hello = hello;
module.exports.getTimeString = getTimeString;
module.exports.getTime = getTime;
module.exports.getHello = getHello;
