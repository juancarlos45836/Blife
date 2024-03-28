import facebockIcon from "../assets/faceboock.svg";
import twitterIcon from "../assets/twitter.svg";
import instagramIcon from "../assets/instagram.svg";
import productImage from "../assets/product.jpg";
import starFillImage from "../assets/starfill.png";
import hardIcon from "../assets/harticon.svg";

import { useState } from "react";
export default function Card({
  product,
  price,
  description,
  priceLineTrhough,
  discount,
  harts,
}) {
  const [clicked, setClicked] = useState("choice1");
  const choice1 = (value) => {
    setClicked(value);
  };
  return (
    <>
      <div className="w-[340px] h-[514px] relative">
        <div className="w-[340px] h-[514px] absolute">
          <div className="relative  w-[340px] h-[333px] bg-gray-100 rounded-[24px] solid border-[#e1e1e1] mt-[181px] border-[1px]   ">
            <button className="absolute text-[#22212C] font-bold  bottom-5 text-[12px] right-5 w-[90px] h-[31px] bg-white rounded-[20px] solid border-[1px]  border-[#EDA836]">
              Agregar
            </button>
            <div className="w-[55px] h-[30px] absolute bottom-5 left-5">
              <p className="text-[12px] text-[#22212C]">COMPARTE</p>
              <div className="flex flex-row justify-between">
                <img
                  className="h-[10px] w-[10px] cursor-pointer"
                  src={facebockIcon}
                  alt="Icono de Facebook"
                />
                <img
                  className="h-[10px] w-[10px] cursor-pointer"
                  src={twitterIcon}
                  alt="Icono de Facebook"
                />
                <img
                  className="h-[10px] w-[10px] cursor-pointer"
                  src={instagramIcon}
                  alt="Icono de Facebook"
                />
              </div>
            </div>
          </div>
          <div className="absolute  w-[340px] h-[441px] rounded-[24px] solid leading-[14px]   border-[#E1E1E1] bg-white border-[1px] top-0 left-0  ">
            <img
              className="h-[304px] relative  m-[13px] w-[304px]"
              src={productImage}
              alt="Imagen del Producto"
            />
            <div className="w-[84px] h-[32px] rounded-full flex justify-center items-center border-[#e1e1e1] bg-white absolute left-[122px] bottom-[135px]  solid border-[1px]">
              <label
                className={
                  clicked === "choice1"
                    ? "h-[8px] cursor-pointer mr-[8px] w-[8px] bg-slate-500 border-gray-500 solid border-[1px] rounded-full"
                    : "h-[8px] cursor-pointer mr-[8px] w-[8px] border-gray-500 solid border-[1px] rounded-full"
                }
                htmlFor="choice1"
                onClick={() => choice1("choice1")}
              ></label>
              <label
                className={
                  clicked === "choice2"
                    ? "h-[8px] cursor-pointer mr-[8px] w-[8px] bg-slate-500 border-gray-500 solid border-[1px] rounded-full"
                    : "h-[8px] cursor-pointer mr-[8px] w-[8px] border-gray-500 solid border-[1px] rounded-full"
                }
                htmlFor="choice2"
                onClick={() => choice1("choice2")}
              ></label>

              <label
                className={
                  clicked === "choice3"
                    ? "h-[8px] cursor-pointer  w-[8px] bg-slate-500 border-gray-500 solid border-[1px] rounded-full"
                    : "h-[8px] cursor-pointer  w-[8px] border-gray-500 solid border-[1px] rounded-full"
                }
                htmlFor="choice3"
                onClick={() => choice1("choice3")}
              ></label>
            </div>
            <div className="mx-5 flex flex-row justify-between">
              <p className=" text-base text-[#22212C] font-bold">{product}</p>
              <p className="ml-5 text-base text-[#22212C] font-bold">{price}</p>
            </div>
            <div className="mx-5 flex flex-row justify-between">
              <p className=" text-[#22212C] text-[10px] ">{description}</p>
              <p className=" text-[#22212C] line-through text-[10px] ">
                {priceLineTrhough}
              </p>
            </div>
            <div className="ml-5 w-[78px] h-[12px] mt-3">
              <img
                className="w-[78px] h-[12px"
                src={starFillImage}
                alt="Imagen de Estrellas"
              />
            </div>
            <div className="w-[62px] flex flex-row justify-center items-center bg-white h-[31px] rounded-full border-[#e1e1e1] border-[1px] solid absolute right-[-15px] top-[24px]">
              <img src={hardIcon} alt="Icono de Corazon" />
              <p className="text-[12px] font-bold ml-2">{harts}</p>
            </div>
            <div className="w-[53px] flex flex-row justify-center items-center bg-[#FF8E8E] h-[31px] rounded-full border-[#e1e1e1] border-[1px] solid absolute right-[-15px] top-[60px]">
              <p className="text-white ">{discount}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
