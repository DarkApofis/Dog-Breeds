const { Router } = require('express');
const dogs = require('./dogs.routes')
const temperament = require('./temperament.routes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogs)
router.use('/temperament', temperament)


module.exports = router;
