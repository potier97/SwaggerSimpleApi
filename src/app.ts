import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import tasksRoutes from  './routes/tasks.routes';
import swaggerUI from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { options } from './swaggerOptions';
import path from 'path'

const app = express();
app.set("port", process.env.PORT || 3000);

console.log(__dirname)

 
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
const specs = swaggerJsdoc(options)
app.use(tasksRoutes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) =>  res.sendFile(path.join(__dirname, 'public\index.html')))

export default app