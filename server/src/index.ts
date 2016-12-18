import * as http from 'http';
import * as debugObj from 'debug';

import App from './server/App';

const debug: debugObj.IDebugger = debugObj('express:server');

const port: number = 8080;
App.set('port', port);

const server: http.Server = http.createServer(App);
server.listen(port);

server.on('error', (error: NodeJS.ErrnoException): void => {});
server.on('listening', (): void => {
  debug('Listening on 8000');
})
