const fs = require('fs');

fs.writeFile(
  'forwardslash-development.txt',
  'Forwardslash Development',
  (err) => {
    console.log('Done!');
  }
);
