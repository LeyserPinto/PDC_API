const { Router } = require('express');
const router = Router();
 
//Raiz
router.get('/', function (req, res) {
    res.json({ API_PDC_Web: '¡Bienvenido!' })
})

//Raiz
router.get('/:nombre', function (req, res) {
    res.json({ mensaje: '¡Hola' + req.params.nombre })
})
module.exports = router;