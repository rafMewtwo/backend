import Usuario from "../model/Usuario";

export default interface RegistrarUsuario {

    consultarPorEmail(email: string): Promise<Usuario | null>
    criar(usuario: Usuario): Promise<Usuario>
}