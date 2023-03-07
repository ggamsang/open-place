import io from "socket.io-client";

class Socket {
  constructor(ns) {
    this.socket = io(ns);
  }
  emit = (e, cf) => this.socket.emit(e, cf);
  on = (e, cf) => this.socket.on(e, cf);
}
export default Socket;
