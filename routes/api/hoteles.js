const router = require('express').Router();


router.get('/', async (req, res) => {
    try {
        const [result] = await db.query('SELECT * FROM agencia_viajes_app.hoteles');
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router; 