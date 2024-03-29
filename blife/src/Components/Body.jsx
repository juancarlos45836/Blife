import banner from "../assets/banner.jpg";
import rectangule from "../assets/rectangule.png";
import Card from "./Card";
export default function Body() {
  const products = [
    {
      nameProduct: "Citrate Mag",
      price: "273.00",
      description: "240 Capsulas|800Mg",
      priceLineTrhough: "134.00",
      discount: "-30$",
      harts: 22,
    },
    {
      nameProduct: "Citrate Mag",
      price: "273.00",
      description: "240 Capsulas|800Mg",
      priceLineTrhough: "134.00",
      discount: "-30$",
      harts: 22,
    },
    {
      nameProduct: "Citrate Mag",
      price: "273.00",
      description: "240 Capsulas|800Mg",
      priceLineTrhough: "134.00",
      discount: "-30$",
      harts: 22,
    },
    {
      nameProduct: "Citrate Mag",
      price: "273.00",
      description: "240 Capsulas|800Mg",
      priceLineTrhough: "134.00",
      discount: "-30$",
      harts: 22,
    },
  ];
  return (
    <>
      <div className="relative mt-10 md:m-0">
        <img src={banner} alt="Imagen Banner" />
        <img
          className="absolute top-0 right-10 h-[80%] m-7 "
          src={rectangule}
          alt="Imagen Banner"
        />
      </div>
      <ul className="flex flex-wrap m-5 justify-center items-center">
        {products.map((product, index) => {
          return (
            <li key={index} className="m-5">
              <Card
                product={product.nameProduct}
                price={product.price}
                description={product.description}
                priceLineTrhough={product.priceLineTrhough}
                discount={product.discount}
                harts={product.harts}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
