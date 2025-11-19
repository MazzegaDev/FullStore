"use client";

import appContexto from "@/app/context/appContext";
import { useContext } from "react";
import Link from "next/link";


export default function UsuarioPage() {
   const { user } = useContext(appContexto);



   return (
      <div className="container mt-4">

         <div className="card shadow mb-4 border-0 rounded-3">

            <div className="card-header bg-primary text-white py-3 rounded-top d-flex justify-content-between align-items-center">
               <h4 className="mb-0">
                  <i className="fas fa-user me-2"></i>
                  Seus Dados
               </h4>

               <Link
                  href={`/user/usuario/alterar`} 
                  className="btn btn-light btn-sm shadow-sm"
                > 
                  <i className="fas fa-edit me-2"></i>
                  Alterar dados
               </Link> 
            </div>

            {/* BODY */}
            {user == null ? (
               <h1>Carregando</h1>
            ) : (
               <div className="card-body">
                  <div className="table-responsive">
                     <table className="table table-hover align-middle text-center">
                        <thead className="table-primary">
                           <tr>
                              <th>
                                 <i className="fas fa-user me-1"></i>Nome
                              </th>
                              <th>
                                 <i className="fas fa-envelope me-1"></i>Email
                              </th>
                              <th>
                                 <i className="fas fa-lock me-1"></i>Senha
                              </th>
                              <th>
                                 <i className="fas fa-wallet me-1"></i>Saldo
                              </th>
                              <th>
                                 <i className="fas fa-id-badge me-1"></i>Perfil
                              </th>
                           </tr>
                        </thead>

                        <tbody>
                           <tr>
                              <td>{user.usu_nome}</td>
                              <td>{user.usu_email}</td>
                              <td>
                                 {user.usu_senha == null
                                    ? "*****"
                                    : user.usu_senha}
                              </td>
                              <td>R$ {user.usu_saldo}</td>
                              <td>
                                 <span className="badge bg-danger shadow-sm px-3 py-2">
                                    {user.per_id.per_adm == 0 ? (
                                       <i className="fas fa-lock-open"></i>
                                    ) : (
                                       <i className="fas fa-lock"></i>
                                    )}
                                    {user.per_id.per_desc}
                                 </span>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}
