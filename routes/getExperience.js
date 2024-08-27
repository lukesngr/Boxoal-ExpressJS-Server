const express = require('express');
const prisma = require('../modules/prismaClient');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = req.query;
        console.log(data);
        const points = await prisma.xP.findUnique({
            where: {
                userUUID: data.userUUID,
            }
        });
        res.json(points);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;