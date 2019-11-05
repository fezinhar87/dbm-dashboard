const app = require('express')(),
    path = require('path');
require(`${path.normalize(require('../config.json').botDir)}/bot`);
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/main', {title:require('../config.json').title,name:require('../config.json').name}));
app.listen(require('../config.json').port);
console.log('Dashboard running.');