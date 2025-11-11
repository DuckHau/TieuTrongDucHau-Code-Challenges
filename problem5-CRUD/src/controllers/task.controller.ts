import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// a. Create
export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Title là bắt buộc' });
    }
    const newTask = await prisma.task.create({
      data: {
        title,
        description,
      },
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Không thể tạo task' });
  }
};

// b. List (with filter)
export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const { completed } = req.query;
    let whereClause = {};

    if (completed !== undefined) {
      whereClause = {
        completed: completed === 'true',
      };
    }

    const tasks = await prisma.task.findMany({
      where: whereClause,
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Can not get tasks' });
  }
};

// c. Get details
export const getTaskById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await prisma.task.findUnique({
      where: { id: parseInt(id) },
    });

    if (!task) {
      return res.status(404).json({ error: 'Can not find Task' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Can not get details task' });
  }
};

// d. Update
export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    const updatedTask = await prisma.task.update({
      where: { id: parseInt(id) },
      data: {
        title,
        description,
        completed,
      },
    });
    res.status(200).json(updatedTask);
  } catch (error) {
    if ((error as any).code === 'P2025') {
      return res.status(404).json({ error: 'Can not find Task to update' });
    }
    res.status(500).json({ error: 'Can not update task' });
  }
};

// e. Delete
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.task.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    if ((error as any).code === 'P2025') {
      return res.status(404).json({ error: 'Can not find Task to delete' });
    }
    res.status(500).json({ error: 'Can not delete task' });
  }
};