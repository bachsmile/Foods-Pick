const siteController = require('../app/controllers/SiteController')

function route(app) {
   app.get('/', siteController.index) 
}

module.exports = route