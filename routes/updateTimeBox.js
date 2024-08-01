const express = require('express');
const prisma = require('../modules/prismaClient');

const router = express.Router();

router.put('/', async (req, res) => {
  try {
    let data = req.body;
    let {id, ...alteredData} = data;
    await prisma.timeBox.update({
      where: {
        id: id,
      },
      data: alteredData,
    });
    res.status(200).json({ message: 'Updated TimeBox successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;