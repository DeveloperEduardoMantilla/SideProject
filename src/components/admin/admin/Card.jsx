
import { useEffect } from "react";
import photo from "../../assets/Img/Avatar.png";
export default function Card({props}) {

  return (
    <div className="card_admin">
        <img src={photo} alt="" />
        <h1>{props.titulo}</h1>
        <h3>{props.cant}</h3>
    </div>
  )
}