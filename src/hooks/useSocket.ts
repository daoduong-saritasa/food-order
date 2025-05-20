import { io, type Socket } from "socket.io-client";

import { CONFIG } from "@/api/config";
import { useMemo } from "react";

let socket: Socket;

export const useSocket = () => {
  // Only create the socket once (singleton)
  return useMemo(() => {
    if (!socket) {
      socket = io(CONFIG.socketUrl);
    }
    return socket;
  }, []);
};