import React, { useState } from 'react'

function useFilterCampers() {
    const [data, setData] = useState([]);
    const [enfoques, setEnfoques] = useState([]);
    const [tecnologia, setTecnologia] = useState("t");
    const [ruta, setRuta] = useState(0);
    const [ingles, setIngles] = useState("i");

    const fetchEnfoques = async () =>{
        let options = {
            method: "GET",
            headers: new Headers({
              "Content-Type": "application/json",
            })
          };
          try {
            const sever = JSON.parse(import.meta.env.VITE_MY_SERVER);
            const resultEnfoque = await (
              await fetch(`http://${sever.host}:${sever.port}/enfoque`, options)
            ).json();

            if(resultEnfoque.status == 200){
                setEnfoques(resultEnfoque.message);
            }
          } catch (e) {
            console.log("Error => ", e);
          }
    }

    const fetchData = async () => {
        let options = {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
          })
        };
        try {
          const sever = JSON.parse(import.meta.env.VITE_MY_SERVER);
          const campers = await (
            await fetch(`http://${sever.host}:${sever.port}/cv`, options)
          ).json();
  
          setData(campers.message);
        } catch (e) {
          console.log("Error => ", e);
        }
      };
  
    const filterIng = async() => {
      try {
        if(ingles == "i"){
            fetchData()
        }else{
            const sever =JSON.parse(import.meta.env.VITE_MY_SERVER);
            let option = {
              method: "GET",
              headers: new Headers({
                  "Content-Type": "application/json",
              })
            }
            const infoFilter =  await (await fetch(`http://${sever.host}:${sever.port}/cv/filter/?ing=${ingles}`, option)).json();
            if (infoFilter.status == 200) {
                setData(infoFilter.message)
            }
        }
    } catch (error) {
        alert(error.message)
    }
    }
  
    const filterRut = async() => {
      try {
        if(ruta == 0){
            fetchData()
        }else{
            const sever =JSON.parse(import.meta.env.VITE_MY_SERVER);
            let option = {
              method: "GET",
              headers: new Headers({
                  "Content-Type": "application/json",
              })
            }
            const infoFilter =  await (await fetch(`http://${sever.host}:${sever.port}/cv/filter/?rut=${ruta}`, option)).json();
            if (infoFilter.status == 200) {
                setData(infoFilter.message)
            }
        }
    } catch (error) {
        alert(error.message)
    }
    }
  
    const filterTecn = async() => {
      try {
        if(tecnologia == "t"){
            fetchData()
        }else{
            const sever =JSON.parse(import.meta.env.VITE_MY_SERVER);
            let option = {
              method: "GET",
              headers: new Headers({
                  "Content-Type": "application/json",
              })
            }
            const infoFilter =  await (await fetch(`http://${sever.host}:${sever.port}/cv/filter/?tecn=${tecnologia}`, option)).json();
            if (infoFilter.status == 200) {
                setData(infoFilter.message)
            }
        }
    } catch (error) {
        alert(error.message)
    }
    }
  return {
    data,
    setData,
    enfoques,
    ingles,
    setIngles,
    tecnologia,
    setTecnologia,
    ruta,
    setRuta,
    filterIng,
    filterRut,
    filterTecn,
    fetchEnfoques,
    fetchData
  }
}

export default useFilterCampers;