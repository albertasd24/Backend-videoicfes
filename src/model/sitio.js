import { Schema, model } from "mongoose";

const sitioesquema = new Schema(
    {
        COD_SITIO: String,
        JORNADA: Array,
        FECHA: String
    },
    { versionKey: false, timestamps: true }
);
const sitioModel = model("sitio", sitioesquema);
export { sitioModel };
