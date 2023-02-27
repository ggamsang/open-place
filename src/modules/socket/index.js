import io from "socket.io-client";
// import host from "config";

class Socket {
  constructor(ns) {
    //     const _host = host.replace("/api", ns ? `/${ns}` : ``);
    //     console.log("socket-server-host:", _host);
    //     this.socket = io(_host, {
    //       path: "/socket.io",
    //       transports: ["websocket", "polling", "flashsocket"],
    //     });
    this.socket = io("https://place.opensrcdesign.com/", {
      path: "/socket.io",
      transports: ["websocket", "polling", "flashsocket"],
    });
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
