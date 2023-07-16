import { useState } from "react";
import { useMoralis } from "react-moralis";
import ChangeUserNameModal from "./ChangeUserNameModal";

const ChangeUserComponent = () => {
  const { isUserUpdating } = useMoralis();
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

  const toggleIsModalDisplayed = () => {
    setIsModalDisplayed(!isModalDisplayed);
  };

  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        onClick={toggleIsModalDisplayed}
        disabled={isUserUpdating}
        className="text-black hover:focus:active:text-pink-600 bg-yellow-600 rounded-sm p-2"
      >
        Change username
      </button>
      <ChangeUserNameModal
        isModalDisplayed={isModalDisplayed}
        toggleIsModalDisplayed={toggleIsModalDisplayed}
      />
    </div>
  );
};

export default ChangeUserComponent;
