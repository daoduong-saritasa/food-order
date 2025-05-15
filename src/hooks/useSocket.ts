import { io, type Socket } from "socket.io-client";

import { useMemo } from "react";

let socket: Socket;

export const useSocket = () => {
  // Only create the socket once (singleton)
  return useMemo(() => {
    if (!socket) {
      socket = io("http://localhost:8000");
    }
    return socket;
  }, []);
};