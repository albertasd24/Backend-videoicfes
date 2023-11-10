import { sitioModel } from "../model/sitio.js"

export const obtenerSitios = async () => {
   const sitios = await sitioModel.find();
   return sitios;
}

export const actualizarSitio = async (id, cambio) => {
    // tipoJornada; mañana tarde
    const sitioactualizado = await sitioModel.updateOne({COD_SITIO:id} ,{ $set: { [`JORNADA.$[element].video${cambio.tipoVideo}.urlVideo`]: cambio.urlvideo }}, { arrayFilters: [{ "element.tipoJornada": cambio.tipoJornada }] },{ arrayFilters: [{ "element.tipoJornada": cambio.tipoJornada }] });
    return sitioactualizado;
}