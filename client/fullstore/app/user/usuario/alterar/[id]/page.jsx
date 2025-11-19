"use client";

import FormUser from "@/app/user/components/formUser/FormUser";
import { apiClient } from "@/utils/apiClient";
import { useEffect, useState, use } from "react";

export default function UsuarioPage({params}) {
   const [getUser, setUser] = useState(null);

   const {id} = use(params);


   useEffect(() => {
      buscarDados();
   }, []);

   async function buscarDados() {

      const response = await apiClient.get(`/usuario/${id}`);
      if (response) {
         setUser(response);
      }
   }
   console.log("state")
   console.log(getUser);
   return (
      <div>
         <FormUser usuario={getUser}></FormUser>
      </div>
   );
}
