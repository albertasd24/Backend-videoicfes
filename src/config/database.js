import dotenv from "dotenv";
import { connect } from "mongoose";
dotenv.config()

const url = process.env.DBSERVERLOCAL;

/**
 * Realiza la conexión a la base de datos.
 *
 * @function
 * @async
 * @throws {Error} Si hay un error al conectar con la base de datos.
 * @returns {Promise<void>} Una promesa que se resuelve cuando la conexión es exitosa.
 * @author Albert Ospina
 */
async function dbConnect() {
  try {
    await connect(url);
    console.log("Conexión a la base de datos exitosa")
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export default dbConnect;
