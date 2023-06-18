const router = require('express').Router();


router.get('/', (req, res) => {
    res.end('obtener todos los hoteles')
});


module.exports = router; 