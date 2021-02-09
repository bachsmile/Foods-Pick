
class SiteController {

   index(req, res, next) {
      res.send('<h1>day la trang home</h1>')
   }
   
}
module.exports = new SiteController