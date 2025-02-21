import { useState, useCallback } from "react";
import { useConversations } from "../../context/ConversationsProvider";

const OpenConversation = () => {
  const [text, setText] = useState("");
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);
  const { sendMessage, selectedConversation } = useConversations();

  const handleSubmit = (e) => {
    e.preventDefault();

    sendMessage(
      selectedConversation.recipients.map((r) => r.id),
      text
    );
    setText("");
  };

  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 overflow-auto">
        <div className="d-flex flex-column align-items-start justify-content-end px-3">
          {selectedConversation.messages.map((message, index) => (
            <div
              ref={
                selectedConversation.messages.length - 1 === index
                  ? setRef
                  : null
              }
              key={index}
              className={`my-1 d-flex flex-column ${
                message.fromMe
                  ? "align-self-end align-items-end"
                  : "align-items-start"
              }`}
            >
              <div
                className={`rounded px-2 py-1 ${
                  message.fromMe ? "bg-primary text-white" : "border"
                }`}
              >
                {message.text}
              </div>
              <div
                className={`text-muted small ${
                  message.fromMe ? "text-right" : ""
                }`}
              >
                {message.fromMe ? "You" : message.senderName}
              </div>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          as="textarea"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ height: "75px", resize: "none" }}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default OpenConversation;
