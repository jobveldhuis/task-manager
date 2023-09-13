import { getReactNativePersistence, initializeAuth } from "@firebase/auth";
import { app } from "../app.constant";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

export const authentication = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
