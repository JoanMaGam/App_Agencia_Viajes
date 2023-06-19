const router = require('express').Router();

router.get('/', async (req, res) => {
    const [result] = await db.query('SELECT * FROM agencia_viajes_app.clientes');
    console.log(result);
    res.end('terminada peticion')
});

module.exports = router; 