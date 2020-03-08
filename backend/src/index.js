require('dotenv').config();
require('./database');
const app = require('./app');

async function main() {
    await app.listen(app.get('port'));
    console.log('Server Started on port '+app.get('port'));
}

main()