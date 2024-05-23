const express = require('express');
const prisma = require('../modules/prismaClient');

const router = express.Router();

router.put('/', async (req, res) => {
  try {
    const data = req.body;
    await prisma.goal.update({
      where: {
        id: data.id,
      },
      data: data,
    });
    res.status(200).json({ message: 'Updated goal successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;