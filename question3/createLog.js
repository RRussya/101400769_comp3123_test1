const fs = require('fs');
const path = require('path');

const logsDirectoryPath = path.join(__dirname, 'Logs');

const createLogFiles = () => {

    if (!fs.existsSync(logsDirectoryPath)) {
        fs.mkdirSync(logsDirectoryPath);
    }

    process.chdir(logsDirectoryPath);

    console.log('Created log files:');
    for (let i = 1; i <= 10; i++) {
        const logFileName = `log${i}.txt`;
        fs.writeFileSync(logFileName, `Content for ${logFileName}`);
        console.log(logFileName);
    }
};

createLogFiles();