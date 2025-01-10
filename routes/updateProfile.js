const express = require('express');
const prisma = require('../modules/prismaClient');

const router = express.Router();

router.put('/', async (req, res) => {
  try {
    let data = req.body;

    const profile = await prisma.profile.findUnique({
      where: {
          userUUID: data.userUUID,
      }
    });

    if(profile === null) {
      await prisma.profile.create({
        data: data,
      });
    }

    await prisma.profile.update({
      where: {
        userUUID: userUUID,
      },
      data: data,
    });
    res.status(200).json({ message: 'Updated Profile successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;