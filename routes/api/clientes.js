const router = require('express').Router();
const { getAll, getById, create, deleteClientById, update } = require('../../models/cliente.model');


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

// Peticiones DELETE

router.delete('/:id', async (req, res) => {
    try {
        const [result] = await deleteClientById(Number(req.params.id));
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

// Peticiones Update (PUT)

router.put('/update/:id', async (req, res) => {
    try {
        const [result] = await update(Number(req.params.id, req.body));
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router; 