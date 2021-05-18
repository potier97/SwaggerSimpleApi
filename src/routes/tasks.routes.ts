import { Router } from 'express';
import { getTasks, createTask, getTask, deleteTask, updateTask, count } from '../controllers/tasks.controllers';

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: Object
 *      properties:
 *        id:
 *          type: string
 *          description: Identificado de la tarea
 *        name:
 *          type: string
 *          description: Nombre de la tarea
 *        description:
 *          type: string
 *          description: Descripción de la tarea
 *      required:
 *        - name
 *        - description
 *      example:
 *        id: P_kzRbeD6ThfqBc8mjcmH
 *        name: Primera Tarea
 *        description: Una Tarea por hacer
 *    TaskNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: Un mensaje de que la tarea no funcionó
 *      example:
 *        msg: La tarea no funciono
 *
 *  parameters:
 *    taskId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: Id de la tarea
 */

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Retorna una lista de tareas
 *    tags: [Tasks]
 *    responses:
 *      200:
 *        description: Lista de tareas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Task'
 */

router.get('/tasks', getTasks)

/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: Obtiene el total de las tareas
 *    tags: [Tasks]
 *    responses:
 *      200:
 *        description: Total de las tareas
 *        content:
 *          text/plain:
 *            schema:
 *              type: integer
 *              example: 6402
 *
 */
router.get('/tasks/count', count)

/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: Crear nueva tarea
 *    tags: [Tasks]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: La tarea fue creada correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 *      500:
 *        description: Error en el servidor
 *
 */
router.post('/tasks', createTask)

/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *    summary: Obtener una tarea por Id
 *    tags: [Tasks]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    responses:
 *      200:
 *        description: Tarea Encontrada
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: Tarea no encontrada
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TaskNotFound'
 */
router.get('/tasks/:id', getTask)

/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *    summary: Borrar tareaa por Id
 *    tags: [Tasks]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    responses:
 *      200:
 *        description: Tarea Eliminada
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: Tarea no encontrada
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TaskNotFound'
 *
 */
router.delete('/tasks/:id', deleteTask)

/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: Actualizar tarea por Id
 *    tags: [Tasks]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: Tarea Actualizada
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: Tarea no encontrada
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TaskNotFound'
 *
 */
router.put('/tasks/:id', updateTask)

export default router