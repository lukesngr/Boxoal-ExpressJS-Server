import prisma from "@/modules/prismaClient";
import express from 'express';

const router = express.Router();

router.put('/', async (req, res) => {
  try {
    const data = req.body;
    await prisma.schedule.update({
      where: {
        id: data.id,
      },
      data: data,
    });

    res.status(200).json({ message: 'Schedule updated successfully' });
  } catch (error) {
    console.error('Error updating schedule:', error);

    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
});

export default router;