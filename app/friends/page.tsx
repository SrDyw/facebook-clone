import React from "react";
import TargetFriend from "../components/targetfriend/Targetfriend";

const friends: React.FC = () => {
  return (
    <>
      <h1 className="font-bold m-8 text-2xl">Solicitudes de Amistad</h1>

      <section className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
            <div className="flex gap-8 row-start-2 items-center sm:items-start">
              
            </div>
          </section>


      <div className="border border-white border-b-0 m-4"></div>
      <h1 className="font-bold m-8 text-2xl">Personas que quizá conozcas</h1>

      <section className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
            <div className="flex gap-8 row-start-2 items-center sm:items-start">
              <TargetFriend name="Rapunzel Melena de León" photo="/day.png"/>
              <TargetFriend name="Caballo Homosexual de las Montañas" photo="/OIP.jfif"/>
            </div>
          </section>
    </>
  );
};
export default friends;
