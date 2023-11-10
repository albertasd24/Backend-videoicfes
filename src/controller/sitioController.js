import { actualizarSitio, obtenerSitios } from "../services/sitios.js"

export const sitioObtenerController = async (req, res) => {
    try {
        const sitios = await obtenerSitios();
        res.send(sitios);
    } catch (error) {
        console.log(error);
    }
}
export const actualiarSitioObtenerController = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        console.log(body);
        const response = await actualizarSitio(id, body)
        res.send(response)
    } catch (error) {
       console.log(error); 
    }
}