const fs = require('fs');
const path = require('path');

const logsDirectoryPath = path.join(__dirname, 'Logs');

const removeLogFiles = () => {

  if (fs.existsSync(logsDirectoryPath)) {
    console.log('Files to delete:');
    const files = fs.readdirSync(logsDirectoryPath);

    files.forEach((file) => {
      const filePath = path.join(logsDirectoryPath, file);
      console.log(file);
      fs.unlinkSync(filePath);
    });

    fs.rmdirSync(logsDirectoryPath);
  } else {
    console.log('Logs directory does not exist.');
  }
};

removeLogFiles();