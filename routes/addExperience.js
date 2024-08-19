const express = require('express');
const prisma = require('../modules/prismaClient');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    console.log(data)
    const experienceRecord = await prisma.xP.findUnique({
        where: {
          userUUID: data.userUUID,
        },
    });

    if(experienceRecord === null) {
        await prisma.xP.create({
            data: data,
        });
    }else{
        await prisma.xP.update({
            where: {
                userUUID: data.userUUID,
            },
            data: {points: { increment: data.points}}
        });
    }
    res.status(200).json({ message: 'XP added' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;