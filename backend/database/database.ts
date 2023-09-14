import { initializeFirestore } from "@firebase/firestore";
import { app } from "@/backend/app.constant";

export const database = initializeFirestore(app, {});
