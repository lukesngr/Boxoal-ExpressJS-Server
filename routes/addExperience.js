const express = require('express');
const prisma = require('../modules/prismaClient');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const experienceRecord = await prisma.xp.findUnique({
        where: {
          userUUID: data.userUUID,
        },
    });

    if(experienceRecord === null) {
        await prisma.xp.create({
            data: data,
        });
    }else{
        await prisma.xp.update({
            where: {
                userUUID: data.userUUID,
            },
            data: data}
        );
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