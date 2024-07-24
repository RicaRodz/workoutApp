import { View, Text } from "react-native";
import * as Network from "expo-network";
import { useEffect, useState } from "react";

export const useNetworkStatus = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const checkNetworkStatus = async () => {
      const status = await Network.getNetworkStateAsync();
      setIsConnected(status.isConnected);
    };

    checkNetworkStatus();

    const interval = setInterval(checkNetworkStatus, 5000);

    return () => clearInterval(interval);
  }, []);

  return isConnected;
};
