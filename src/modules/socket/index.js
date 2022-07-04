import io from "socket.io-client";
import host from "config";

class Socket {
    constructor(msg) {
        this.socket = io(
            host.replace("/api", ""),
            {
                path: "/socket.io",
                transports: ['websocket', 'polling', 'flashsocket']
            }
        );
    }
    emit = (e, cf) => this.socket.emit(e, cf);
    on = (e, cf) => this.socket.on(e, cf);
}
export default Socket;

// let Socket = io(
//     host.replace("/api", ""),
//     {
//         path: "/socket.io",
//         transports: ['websocket', 'polling', 'flashsocket']
//     });
// export default Socket;
// import { io } from "socket.io-client";
// const socket = (url) => io(url);
// export default socket;