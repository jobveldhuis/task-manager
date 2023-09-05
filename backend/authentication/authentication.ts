import { getAuth, getReactNativePersistence } from "@firebase/auth";
import { app } from "../app.constant";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

export const authentication = getAuth(app);
authentication.setPersistence(
  getReactNativePersistence(ReactNativeAsyncStorage),
);
