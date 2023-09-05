import { getAuth } from "@firebase/auth";
import { app } from "../app.constant";

export const authentication = getAuth(app);
