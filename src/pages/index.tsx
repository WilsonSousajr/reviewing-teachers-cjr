"use client";

import Button from '@/components/Button';
import Foca from '@/images/foca.jpg.jpg';
import Image from 'next/image';

export default function Register () { 
    return(
        <main className="flex">
         <div id="blank" className="w-1/2 h-screen">
            <Image className="w-full h-full" src={Foca} alt="imagem de uma foca com computador"/>
         </div>
          <div className="w-1/2 h-screen text-white  bg-darkblue flex flex-col justify-evenly items-center">
           <div className="w-1/3 h-fit">
              <h1 className="text-5xl text-center text-white">Cadastro Usuário</h1>
            </div>
            <div id="user-info" className="">
                <form className="flex flex-col">
                    <input className="placeholder:text-xl placeholder:pl-4 my-2 py-5 pr-96 rounded-xl" placeholder="Nome"></input>
                    <input className="placeholder:text-xl placeholder:pl-4 my-2 py-5 pr-96 rounded-xl" placeholder="Email"></input>
                    <input className="placeholder:text-xl placeholder:pl-4 my-2 py-5 pr-96 rounded-xl" placeholder="Senha"></input>
                    <input className="placeholder:text-xl placeholder:pl-4 my-2 py-5 pr-96 rounded-xl" placeholder="Curso"></input>
                    <input className="placeholder:text-xl placeholder:pl-4 my-2 py-5 pr-96 rounded-xl" placeholder="Departamento"></input>
                </form>
            </div> 
            <div className="flex justify-center gap-10">
            <Button>Criar Conta</Button>
       </div>   
          </div>
        </main>
    );
};

import React from "react";
import logo from "/public/logo.png"
import avatarUrl from "/public/avatarUrl.png"
import Image from 'next/image';
import FaEnvelope from '/public/FaEnvelope.png';
import FaPredio from '/public/FaEnvelope.png';
import UserProfileHeader from "@/components/UserHeader";
import UserPage from "@/components/UserPage";
import UserPost from "@/components/UserPost";


const PerfilDeslogado = () => {
return(
    <>
    <div id="Header" className="w-screen h-20 bg-darkblue px-8 flex justify-between items-center mb-8">
        <img src="logo.png" alt="" width={75} height={75} />
        <div>
        <button 
        type = "button"
        className="bg-neutral-500 text-lg text-white px-8 py-2 rounded-lg outline outline-2 outline-white height=55 width=154">
        Login</button>
    </div>

        </div>

  
    <UserPage />

        </>
    )

}

export default PerfilDeslogado;