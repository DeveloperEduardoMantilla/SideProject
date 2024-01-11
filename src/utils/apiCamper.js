const getDataCamper = async (token) => {
    try {
      const sever = JSON.parse(import.meta.env.VITE_MY_SERVER);

      let option = {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: token,
        }),
      };

      const datasToken = await (
        await fetch(`http://${sever.host}:${sever.port}/dataToken`, option)
      ).json();

      if (datasToken.status == 200) {
        const infoCv = await (
          await fetch(
            `http://${sever.host}:${sever.port}/cv/user?id=${datasToken.message.payload.idUsuario}`,
            option
          )
        ).json();

        if (infoCv.status == 200) {
            return infoCv.message;
        }
      }
    } catch (error) {
      alert(error.message);
    }
};


export {getDataCamper};
