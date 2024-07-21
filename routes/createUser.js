const express = require('express');
const prisma = require('../modules/prismaClient');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newUser = await prisma.user.create({
      data: data,
    });
    res.status(200).json({ message: 'User created successfully', id: newUser.id });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;