import banner from "../assets/banner.jpg";
import rectangule from "../assets/rectangule.png";
export default function Body() {
  return (
    <>
      <div className="relative">
        <img src={banner} alt="Imagen Banner" />
        <img
          className="absolute top-0 right-10 h-[80%] m-7 "
          src={rectangule}
          alt="Imagen Banner"
        />
      </div>
    </>
  );
}
