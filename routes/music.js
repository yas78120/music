var express = require('express');
var sha1 = require('sha1');
var router = express.Router();
var fileUpload = require("express-fileupload");

router.use(fileUpload({
    fileSize: 50 * 1024 * 1024
}));
router.post("/sendfile", (req, res) => {
    var mp3 = req.files.file;
    var path = __dirname.replace(/\/routes/g, "/mp3");
    var date = new Date();
    var sing = sha1(date.toString()).substr(1, 5);
    var totalpath = path + "/" + sing + "_" + mp3.name.replace(/\s/g,"_");
    mp3.mv(totalpath, (err) => {
        if(err) {
            return res.status(300).send({msn: "Error al escribir en el disco duro"});
        }
       
          res.status(200).json({name: mp3.name}); 
    });
    
});
module.exports = router; 
