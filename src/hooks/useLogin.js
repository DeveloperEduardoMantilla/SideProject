import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function useLogin() {
        const redirect = useNavigate();

    const sever =JSON.parse(import.meta.env.VITE_MY_SERVER);

    const getDataToken = async() => {
        let token = JSON.parse(localStorage.getItem("token"))
        try {
                let option = {
                  method: "GET",
                  headers: new Headers({
                      "Content-Type": "application/json",
                      "Authorization": token
                  })
                }
                const dataToken =  await (await fetch(`http://${sever.host}:${sever.port}/dataToken`, option)).json();
                if (dataToken.status == 200) {
                    getValidateInfo(dataToken.message.payload.idUsuario);
                 }
                
          } catch (error) {
            alert(error.message)
          }
    }

    const getValidateInfo = async(id) => {
        try {
                let option = {
                  method: "GET",
                  headers: new Headers({
                      "Content-Type": "application/json"
                  })
                }
                const validateInfo = await (await fetch(`http://${sever.host}:${sever.port}/usuario?id=${id}`, option)).json(); 
                if (validateInfo.status == 200) {
                    if (validateInfo.message[0].estado == 1) {
                        const validateCv = await (await fetch(`http://${sever.host}:${sever.port}/cv/user?id=${id}`, option)).json(); 
                        if(validateCv.status == 200){
                          console.log("incio");
                          Swal.fire({
                            icon: 'success',
                            title: "inicio de sesion exitoso",
                            position: 'bottom-end',
                            width: '20rem',
                            timer: 3000,
                            toast: true,
                            timerProgressBar: true,
                            showConfirmButton: false,
                          });
                            redirect("/profile")
                          
                        }
                      } else{
                        Swal.fire({
                          icon: 'warning',
                          title: "En espera de acceso",
                          position: 'bottom-end',
                          width: '20rem',
                          timer: 3000,
                          toast: true,
                          timerProgressBar: true,
                          showConfirmButton: false,
                        })
                      }
                 }
                
          } catch (error) {
            alert(error.message)
          }
    }

  
  return {
    getDataToken
  }
}

export default useLogin