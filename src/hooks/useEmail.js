import React from 'react'

function useEmail() {
    const sendEmail = async(info) => {
        const sever = JSON.parse(import.meta.env.VITE_MY_SERVER);
    const token = JSON.parse(localStorage.getItem("token"));

    const body = {
      nameCamper:info[1],
      emailCamper:info[4]
    };

    let options = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token,
      }),
      body: JSON.stringify(body),
    };
    const userData = await (
      await fetch(
        `http://${sever.host}:${sever.port}/email`,
        options
      )
    ).json();

    return userData

    }
  return {
    sendEmail
  }
}

export default useEmail