import socketIOClient from "socket.io-client";
import host from "config";

let Socket = socketIOClient(
    host.replace("/api", ""),
    {
        path: "/socket.io",
        transports: ['websocket', 'polling', 'flashsocket']
    });
export default Socket;