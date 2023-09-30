import { Elysia } from "elysia";
import RepositorioUsuarioMemoria from "./external/memoria/RepositorioUsuarioMemoria";
import RegistrarUsuario from "./core/usuario/service/RegistrarUsuario";
import RegistrarUsuarioController from "./adapters/RegistrarUsuarioController";

const app = new Elysia();

// ---- registrar rotas
const repositorioUsuario = new RepositorioUsuarioMemoria()
const registrarUsuario = new RegistrarUsuario(repositorioUsuario)
new RegistrarUsuarioController(app, registrarUsuario)

app.get('/', () => {
  return 'Meu backend em BUN'
})

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
