const express = require('express');
const prisma = require('../modules/prismaClient');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    await prisma.schedule.create({
      data: data,
    });

    res.status(200).json({ message: 'Schedule created successfully' });
  } catch (error) {
    console.error('Error creating schedule:', error);

    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;