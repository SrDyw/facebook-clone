import React from "react";
import Button from "../buttons/Buttons";

interface TargetProps {
  name: string;
  photo: string;
}

const TargetFriend: React.FC<TargetProps> = ({ name, photo }) => {
  return (
    <>
      <div className="w-[15em] h-[25em] bg-[#fff1] rounded-lg p-2">
        <img src={photo} alt="" className="rounded-lg w-56 h-52" />
        <h2 className="m-2 font-bold absolute max-w-52">{name}</h2>
        {/*Falta lo de amigos en comun*/}
        <div className="mt-16">
          <Button
            className="font-bold mt-3 w-full bg-[#07f6] p-4 pt-2 pb-2 rounded-lg hover:bg-[#cff6]"
            text="Añadir Amigo"
          />
          <Button
            className="mt-3 w-full bg-[#fff2] p-4 pt-2 pb-2 rounded-lg hover:bg-[#fff3]"
            text="Suprimir"
          />
        </div>
      </div>
    </>
  );
};
export default TargetFriend;
