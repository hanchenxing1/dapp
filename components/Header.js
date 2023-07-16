import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avatar from "./Avatar";
import ChangeUserComponent from "./ChangeUserComponent";

const Header = () => {
  const { user } = useMoralis();

  return (
      <div className="text-pink-600 grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center sticky top-0 p-5 z-50 bg-black border-pink-500 shadow-sm border-b">
        
        <div className="relative w-24 h-24 mx-auto hidden lg:inline-grid">
          <Image
            src={"/Cypher_moon.png"}
            objectFit="cover"
            layout="fill"
            alt="cypher moon logo"
            className="rounded-full"
          />
        </div>

        <div className="text-left lg:text-center col-span-4">
          <div className="relative h-32 w-32 md:h-48 md:w-48 lg:mx-auto p-2 rounded-full border-pink-600 border-8">
            <Avatar logoutOnClick={true} />
          </div>

            <h1 className=" text-xl md:text-2xl">
              Welcome to CYPHER MOON metaverse project
            </h1>
            <span className="truncate font-bold text-xs md:text-sm">
             your current username is {user.getUsername()}
            </span>

          <ChangeUserComponent />
        </div>
    </div>
  );
};

export default Header;
