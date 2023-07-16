import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";
import Message from "./Message";

const MIN_DURATION = 45;

const Messages = () => {
  const { user, logout } = useMoralis();
  const endOfMessage = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) => {
      return query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MIN_DURATION)
        );
    },
    [],
    {
      live: true,
    }
  );

  return (
    <div className="pb-20 pt-5 my-5">
      <div>
        <ByMoralis
          variant="dark"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>

      <div className="space-y-16">
        {data.map((message) => {
          return <Message key={message.id} message={message} />;
        })}
      </div>

      <div className="flex justify-center">
        <SendMessage endOfMessage={endOfMessage} />
      </div>

      <div ref={endOfMessage} className="text-center text-gray-300 mt-5">
        <p>you are up to date {user.getUsername()} </p>
      </div>
      <button className="bg-white" onClick={logout}></button>
    </div>
  );
};

export default Messages;
