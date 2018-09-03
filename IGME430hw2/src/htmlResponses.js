const fs = require('fs');
// require the node filesystem
// console.log(__dirname);
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);// from htmlHandler
  response.end();
};

const getPage2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page2);
  response.end();
};


// export functions
module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
