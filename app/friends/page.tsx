import React from "react";
import TargetFriend from "../components/targetfriend/Targetfriend";
import UsersData from "../mocks/UsersData.json";
import jsonFetchFriend from "../mocks/jsonFetchFriend.json";

const friends: React.FC = () => {
  const data = UsersData;
  const FetcherFriend= jsonFetchFriend;
  return (
    <>
      <h1 className="font-bold m-8 text-2xl">Solicitudes de Amistad</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
        {FetcherFriend.map((data) => (
          <li
            key={data.id}
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center font-[family-name:var(--font-geist-sans)]"
          >
            <div className="flex gap-8 row-start-2 items-center sm:items-start">
              <TargetFriend name={data.name} photo={data.photoUrl} />
            </div>
          </li>
        ))}
      </ul>

      <div className="border border-[#fff9] border-b-0 m-4"></div>
      <h1 className="font-bold m-8 text-2xl">Personas que quizá conozcas</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
        {data.map((data) => (
          <li
            key={data.id}
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center font-[family-name:var(--font-geist-sans)]"
          >
            <div className="flex gap-8 row-start-2 items-center sm:items-start">
              <TargetFriend name={data.name} photo={data.photoUrl} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default friends;
