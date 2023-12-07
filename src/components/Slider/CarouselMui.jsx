import Carousel from "react-material-ui-carousel";
import ItemsCarousel from "./ItemsCarousel";
import img1 from "../../assets/Img/Slider.png";
import img2 from "../../assets/Img/Slider2.png";
import img3 from "../../assets/Img/Slider3.png";

export default function CarouselMui() {
  var items = [
    {
      imgUrl: img1,
      description:
        "Developer 1080P, 2K, 4K, 5K HD wallpapers free download | Wallpaper Flare",
    },
    {
      imgUrl: img2,
      description:
        "Developer 1080P, 2K, 4K, 5K HD wallpapers free download | Wallpaper Flare",
    },
    {
      imgUrl: img3,
      description:
        "Developer 1080P, 2K, 4K, 5K HD wallpapers free download | Wallpaper Flare",
    },
  ];

  return (
    <Carousel sx={{ width: "100%", height: "60vh" }}>
      {items.map((item, i) => (
        <ItemsCarousel
          key={i}
          item={item}
        />
      ))}
    </Carousel>
  );
}
