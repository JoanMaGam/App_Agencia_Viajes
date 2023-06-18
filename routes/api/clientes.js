const router = require('express').Router();

router.get('/', (req, res) => {
    res.end('obtener todos los clientes')
});

module.exports = router; 