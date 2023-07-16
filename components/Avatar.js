import Image from "next/image";
import { useMoralis } from "react-moralis";

const Avatar = ({ username, logoutOnClick }) => {
  const { user, logout } = useMoralis();

  return (
    <Image
      className="bg-black rounded-full hover:opacity-75 cursor-pointer"
      src={`https://avatars.dicebear.com/api/pixel-art/${
        username || user.get("username")
      }.svg`}
      alt="user logo"
      layout="fill"
      objectFit="cover"
      onClick={() => logoutOnClick && logout()}
    />
  );
};

export default Avatar;
