const express = require('express');
const prisma = require('../modules/prismaClient');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = req.query;
        const nextGoal = await prisma.goal.findFirst({
            where: {
                partOfLine: data.line,
                active: false,
                completed: false,
            },
            orderBy: {
                id: 'asc'
            }
        });

        const updatedGoal = await prisma.goal.update({
            where: {
                id: nextGoal.id
            },
            data: {
                active: true
            }
        });

        res.json(updatedGoal);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;