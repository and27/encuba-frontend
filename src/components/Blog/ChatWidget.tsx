import React, { useState } from "react";

const ChatWidget: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      console.log("Enviando:", message);
      setMessage("");
    }
  };

  return (
    <div className="blog__chat-widget">
      <div className="blog__chat-header">Chat with Other Users</div>
      <div className="blog__chat-content">
        <div className="blog__chat-messages">
          <div className="blog__chat-message">
            <strong>John:</strong> Hey all.
          </div>
          <div className="blog__chat-message">
            <strong>Jane:</strong> Hey guys!
          </div>
        </div>
        <div className="blog__chat-input-container">
          <input
            type="text"
            className="blog__chat-input"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <button className="blog__chat-send-btn" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
