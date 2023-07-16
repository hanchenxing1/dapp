import { useState } from "react";
import { useMoralis } from "react-moralis";

const SendMessage = ({ endOfMessage }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message,
        user: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (messageData) => {},
        (error) => {
          console.log(error.message);
        }
      );
    endOfMessage.current.scrollIntoView({ behavior: "smooth" });

    setMessage("");
  };

  return (
    <form className="flex fixed bottom-10 z-10 bg-black opacity-80 px-4 py-3 rounded-full shadow-xl border-4 border-blue-300 w-11/12 max-w-2xl">
      <input
        className="outline-none flex-grow bg-transparent p-1 pr-4 opacity-85 text-white placeholder-gray-500"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Type your message ${user.getUsername()}`}
      />

      <button
        className="text-pink-500 text-center font-bold align-middle justify-self-center"
        type="submit"
        onClick={sendMessage}
      >
        send
      </button>
    </form>
  );
};

export default SendMessage;
