const fs = require('fs');

// getDir = async () => {
//     const res = await fs.readdir('./');
//     console.log(res);
// };

fs.readdir('./', async (files) => {
    const res = await files;
    console.log(res);
})

getDir();
console.log("ran");