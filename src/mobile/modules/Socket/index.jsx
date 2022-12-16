import io from "socket.io-client";
import host from "../../../config";

export default class Socket {
  constructor(ns) {
    this.socket = io(host.replace("/api", ns ? `/${ns}` : ``), {
      path: "/socket.io",
      transports: ["websocket", "polling", "flashsocket"],
    });
  }
  emit = (e, cf) => this.socket.emit(e, cf);
  on = (e, cf) => this.socket.on(e, cf);
}