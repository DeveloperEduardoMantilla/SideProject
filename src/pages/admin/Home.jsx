import "../../assets/css/Card.css";
import Card from "../../components/admin/Card.jsx";
export default function Home() {
  const data = [
    {
      titulo: "usuarios",
      cant: 300,
    },
    {
      titulo: "campers",
      cant: 220,
    },
    {
      titulo: "administradores",
      cant: 80,
    }
  ];
  return (
    <>
    <div className="cards">
        {
            data.map((item, index)=>{
                return  <Card props={item} key={index} />;
            })
        }
      </div>
    </>
  );
}
