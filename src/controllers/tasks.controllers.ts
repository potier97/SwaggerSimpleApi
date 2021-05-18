import { Handler } from 'express';
import { getConnections } from '../db';
import { nanoid } from 'nanoid'


export const getTasks : Handler = (req, res) => {
    const data = getConnections().get('tasks').value();
    return res.json(data)
}

export const count: Handler = (req, res) => {
    const taskLength = getConnections().get("tasks").value().length;
    res.json(taskLength);
};

export const createTask : Handler = (req, res) => {
    try {
      const { name, description } = req.body;
      const newTask = {
          name, 
          description,
          id: nanoid()
      }
      getConnections().get("tasks").push(newTask).write();
      res.json(newTask)
    } catch (e) {
      res.status(500).send(e);
    }
}

export const getTask : Handler = (req, res) => {
    const taskFound =  getConnections().get('tasks').find({ id: req.params.id }).value();
    if(!taskFound) return res.status(404).json({ "Message": "Tarea no encontrada"})
    res.json(taskFound);
}

export const deleteTask : Handler = (req, res) => {
    const taskFound = getConnections().get("tasks").find({ id: req.params.id }).value();
    if (!taskFound) return res.status(404).json({ "Message": "Tarea no encontrada" });
    const deletedTask = getConnections().get("tasks").remove({ id: req.params.id }).write();
    res.json(deletedTask);
}


export const updateTask: Handler = (req, res) => {
    try {
        const taskFound = getConnections().get("tasks").find({ id: req.params.id }).value();
        if (!taskFound) return res.status(404).json({ msg: "Task was not found" });
        const updatedTask = getConnections().get("tasks").find({ id: req.params.id }).assign(req.body).write();
        res.json(updatedTask);
    } catch (error) {
        return res.status(500).send(error);
    }
};
