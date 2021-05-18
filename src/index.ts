import app from './app';
import {createConnections } from './db'


createConnections();
app.listen(app.get("port"));
console.log('Server listening on 3000 port')
