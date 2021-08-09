const WebSocketServer = require('ws').Server;

module.exports = (stepService) => {
  const WEBSOCKET_PORT = 8081;

  // * TODO: Write the WebSocket API for receiving `update`s,
  //         using `stepService` for data persistence.
  //         Make sure to return an instance of a WebSocketServer.
  const wsServer = new WebSocketServer({ port: WEBSOCKET_PORT });

  wsServer.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
      const obj = JSON.parse(message);
      const { update_id, username, ts, newSteps } = obj;
      if (update_id && typeof update_id === 'string' && 
          username && typeof username === 'string' && 
          ts && typeof ts === 'number' && 
          newSteps && typeof newSteps === 'number') 
      {
        stepService.add(username, ts, newSteps);
        ws.send(200)
      } else if (typeof newSteps !== 'number') {
        ws.send(404)
      }
    });
  
    ws.send('connected');
  });

  return wsServer;
};
