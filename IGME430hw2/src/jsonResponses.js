const text = require('./textResponses');

const getHelloJSON = (request, response) => {
  const helloJSON = {
    message: text.hello,
  };

  const stringMessage = JSON.stringify(helloJSON);

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

const getTimeJSON = (request, response) => {
  const timeJSON = {
    message: text.getTimeString(),
  };

  const timeMessage = JSON.stringify(timeJSON);

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(timeMessage);
  response.end();
};

// export function
module.exports.getHelloJSON = getHelloJSON;
module.exports.getTimeJSON = getTimeJSON;
