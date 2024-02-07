import prisma from "@/modules/prismaClient";
import express from 'express';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    await prisma.timeBox.create({
      data: data,
    });
    res.status(200).json({ message: 'TimeBox created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
});

export default router;