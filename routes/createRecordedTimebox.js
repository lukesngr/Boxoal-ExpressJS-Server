const express = require('express');
const prisma = require('../modules/prismaClient');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    await prisma.recordedTimeBox.create({
      data: data,
    });
    res.status(200).json({ message: 'Recorded TimeBox created successfully' });
  } catch (error) {
    console.log(error, error.message);
    res.status(500).json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;