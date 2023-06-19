//libreria de métodos que interan con la entidad clientes en la BD
const tableDb = 'agencia_viajes_app.clientes';

const getAll = () => {
    return db.query(`SELECT * FROM ${tableDb}`);
};

const getById = (clienteId) => {
    return db.query(`SELECT * FROM ${tableDb} WHERE id = ?`, [clienteId]);
};

const create = ({ nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni }) => {
    return db.query(`INSERT INTO ${tableDb} ( nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni) VALUES ( ?, ?, ?, ?, ?, ?,? )`, [nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni]);
};


module.exports = { getAll, getById, create }
