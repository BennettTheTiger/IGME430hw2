const fs = require('fs');

const spongegarIMG = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getSpongegar = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(spongegarIMG);
  response.end();
};


module.exports.getSpongegar = getSpongegar;
