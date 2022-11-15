import { config } from "dotenv";
config();

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://DavidTamayo:GPSAGENCIASEGUROS@cluster0.qvbtm4v.mongodb.net/?retryWrites=true&w=majority";
export const PORT = process.env.PORT || 3000;
