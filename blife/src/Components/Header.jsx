import groupLogo from "../assets/group.svg";
import searchLogo from "../assets/search.svg";
import userLogo from "../assets/user.svg";
import shoppingLogo from "../assets/shopping-bag.svg";

export default function Header() {
  return (
    <>
      <div className="w-full flex flex-row justify-between h-[100px] ">
        <div className=" flex justify-center items-center">
          <img
            className="w-[165px] h-[50px] ml-5"
            src={groupLogo}
            alt="Icono blife"
          />
        </div>
        <div className="flex flex-row  justify-center items-center space-x-7">
          <div className="hover:rounded-2xl hover:bg-[#EDA836] px-4">
            <p className="tex-[16px] font-semibold">Productos</p>
          </div>
          <div className="hover:rounded-2xl hover:bg-[#EDA836] px-4">
            <p className="tex-[16px] font-semibold">Promociones</p>
          </div>
          <div className="hover:rounded-2xl hover:bg-[#EDA836] px-4">
            <p className="tex-[16px] font-semibold">Nosotros</p>
          </div>
        </div>
        <div className="flex flex-row  justify-center items-center space-x-5 mr-10">
          <div className="h-[30px] w-[30px] flex justify-center items-center">
            <img
              className="w-[20px] h-[20px]"
              src={searchLogo}
              alt="Icono blife"
            />
          </div>
          <div className="h-[30px] w-[30px] flex justify-center items-center">
            <img
              className="w-[20px] h-[20px]"
              src={userLogo}
              alt="Icono blife"
            />
          </div>
          <div className="h-[30px] w-[30px] flex justify-center items-center relative ">
            <img
              className="w-[20px] h-[20px]"
              src={shoppingLogo}
              alt="Icono blife"
            />
            <p className="text-[10px] w-[15px] h-[15px]  rounded-full flex justify-center ml-5 mb-5 absolute bg-red-600">
              2
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
