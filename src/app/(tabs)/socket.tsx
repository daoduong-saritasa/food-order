import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { useSocket } from "../../hooks/useSocket";

export default function SocketScreen() {
  const socket = useSocket();
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", transport => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    socket.on("count", setCount);

    // Listen for 'name' messages from server
    socket.on("name", setName);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("name", setName);
      socket.off("count", setCount);
    };
  }, [socket]);

  return (
    <View style={styles.container}>
      <Text>
        Status:
        {isConnected ? "Connected" : "Disconnected"}
      </Text>
      <Text>
        Transport:
        {transport}
      </Text>
      <Text>
        Name from server:
        {name}
      </Text>
      <Text>
        Count:
        {count}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
