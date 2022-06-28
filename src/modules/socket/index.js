import io from "socket.io-client";
import host from "config";

let Socket = io(
    host.replace("/api", ""),
    {
        path: "/socket.io",
        transports: ['websocket', 'polling', 'flashsocket']
    });
export default Socket;
// import { io } from "socket.io-client";
// const socket = (url) => io(url);
// export default socket;