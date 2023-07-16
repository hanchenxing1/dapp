import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import TimeAgo from "timeago-react";

const Message = ({ message }) => {
  const { user } = useMoralis();
  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");
  return (
    <div
      className={`flex  items-end relative space-x-2 my-8 ${
        isUserMessage && `justify-end`
      }`}
    >
      <div className={`relative h-8 w-8 ${isUserMessage && `order-last ml-2`}`}>
        <Avatar username={message.get("user")} />
      </div>

      <div
        className={`flex flex-col-reverse items-end justify-between relative rounded-lg p-3 space-x-4 ${
          isUserMessage
            ? `bg-pink-300 rounded-br-none`
            : `bg-blue-300 rounded-bl-none`
        }`}
      >
        <p>{message.get("message")}</p>
        <TimeAgo
          className={`text-[9px] text-gray-700 font-bold ${
            isUserMessage && `order-first`
          }`}
          datetime={message.get("createdAt")}
        />
      </div>

      <p
        className={`absolute -bottom-5 text-xs truncate ${
          isUserMessage ? `text-pink-300` : `text-blue-300`
        }`}
      >
        {message.get("user")}
      </p>
    </div>
  );
};

export default Message;
