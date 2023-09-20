import { initializeFirestore } from "firebase/firestore";
import { app } from "../app.constant";

export const database = initializeFirestore(app, {});
