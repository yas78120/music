var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/usuario', (req, res, next) => {
  var datos = req.query;
  var name = datos.name;
  console.log(datos);
  console.log(name);
  res.status(200).json({
    msn: "HOLA MUNDO"
  });
});
router.post("/usuario", (req, res) => {
  var datos= req.body;
  datos["timeserver"] = new Date();
  datos["method"] = "POST";
  console.log(datos);
  res.status(200).json(datos);

});

router.put("/usuario", (req, res) => {
  var datos= req.body;
  var id = req.query.id 
  datos["otraclave"] = id;
  datos["timeserver"] = new Date();
  datos["method"] = "PUT";
  console.log(datos);
  res.status(200).json(datos);
  
});  

router.delete("/usuario", (req, res) => {
  var datos = req.query;
  var name = datos.id;
  console.log(datos);
  console.log(name);
  res.status(200).json({
    msn: "delete"
  })
});
module.exports = router;