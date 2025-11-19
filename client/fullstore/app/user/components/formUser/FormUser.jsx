export default function FormUser({usuario}){

   console.log("props")
   console.log(usuario)

   return(
      <div>
         <h2>Form de alter</h2>
         <h1>Nome</h1>
         <span>{usuario.usu_nome}</span>
      </div>
   )
}