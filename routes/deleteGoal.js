import prisma from "@/modules/prismaClient";
import express from 'express';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const data = req.body;

    await prisma.goal.delete({
      where: {
        id: data.id
      },
      include: {
        timeboxes: true,
      },
    });

    res.status(200).json({ message: 'Goal deleted successfully' });
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
});

export default router;