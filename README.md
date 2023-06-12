# Socket.io Redis Adapter Example
Example project for demonstrating horizontally scalability of Socket.io server with Redis Adapter.

Please execute following commands to check the functionality. 
🅷🅰🅿🅿🆈 🆃🅴🆂🆃🅸🅽🅶 :robot:

### Setup Redis Locally

If you haven't setup Redis locally, first you need to install Redis locally or need to run Redis as a container in your system. _Docker based setup is recommended._

#### Setup Redis
Use following command for run the Docker locally.
```sh
docker run --name socket-adapter-redis -p 6379:6379 -d redis
```

#### Start Testing
Please execute following command to run the server. Server will start on port `3000`.
```sh
node server.js 3000
```

For testing purpose, you need to run secondary server on different port(ex - Port 3001).
```sh
node server.js 3001
```

When you start the servers it will connect with the Redis and make the bridge between two socket servers.

For testing this functionality, please spin up following two clients using these commands.

_Client 1_
```sh
node client-1.js
```

_Client 2_
```sh
node client-2.js
```

After the client starts publishing and receiving messages, you can observe that both clients receive all the messages from both servers. However, if these servers are disconnected and run individually, this scenario becomes infeasible. Therefore, it implies that both servers are bridged using a Redis adapter.

For more information please check following screen capture.
![socket-adapter-test-full](https://github.com/hasithaishere/socket-io-redis-adapter-example/assets/4580975/22b99557-b593-40c0-b899-86b2739c8e7a)

#### Contributors
- [Hasitha Gamage](https://hasitha.xyz)