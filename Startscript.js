const path = require('path');
var child_process = require('child_process');

child_process.exec(
  `start cmd.exe /K node ${path.join(__dirname, 'server.js')}`
);
child_process.exec(
  `start cmd.exe /K npm --prefix ./client start ${path.join(__dirname)}`
);
