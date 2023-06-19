const router = require('express').Router();
const { getAll, getById, create } = require('../../models/cliente.model');


// Peticiones GET

router.get('/', async (req, res) => {
    try {
        const [result] = await getAll();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        let id = Number(req.params.id);
        const [result] = await getById(id);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

// Peticiones POST

router.post('/', async (req, res) => {
    try {
        const [result] = await create(req.body);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});


module.exports = router; 