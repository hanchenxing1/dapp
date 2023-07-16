import { useState } from "react";
import { useMoralis } from "react-moralis";

const ChangeUserNameModal = ({
  isModalDisplayed,
  toggleIsModalDisplayed = (f) => f,
}) => {
  const { setUserData } = useMoralis();
  const [newUserName, setNewUserName] = useState("");

  const setUserName = (e) => {
    e.preventDefault();
    const username = newUserName.trim();
    setNewUserName("");

    if (!username) return;

    setUserData({
      username,
    });

    toggleIsModalDisplayed();
  };

  return (
    <div
      className={`${
        !isModalDisplayed && "hidden"
      } h-full w-full fixed top-0 right-0  flex justify-center items-center bg-gray-900 bg-opacity-0 backdrop-blur-md z-50 transition-opacity`}
      //   onClick={toggleIsModalDisplayed}
    >
      <div className="py-2 transition-all space-y-7 px-4 mx-4 w-full h-72 max-w-lg rounded-sm relative bg-white  text-gray-800">
        <div className="w-full flex justify-between items-baseline mb-10 lg:mb-20">
          <h1 className="text-2xl font-semibold ">Change to a new username</h1>

          <button
            className="text-red-500 font-bold text-3xl"
            onClick={toggleIsModalDisplayed}
          >
            &times;
          </button>
        </div>

        <form className=" space-y-5">
          <input
            className="block w-full h-16 py-2 px-5 outline-none rounded-sm text-lg bg-gray-800  text-gray-200"
            type="text"
            placeholder="Enter your new username here"
            name="newUserName"
            id="newUserName"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />

          <input
            className="p-4 bg-pink-400 w-full font-semibold"
            type="submit"
            onClick={(e) => setUserName(e)}
            value={`Change username ${newUserName && `to "${newUserName}"`}`}
          />
        </form>
      </div>
    </div>
  );
};

export default ChangeUserNameModal;
