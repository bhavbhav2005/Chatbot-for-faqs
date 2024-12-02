/*import React, { useState, useEffect, useRef } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("chatMessages")) || [
      { text: "Hello! How can I assist you today?", sender: "bot" },
    ]
  );
  const [inputMessage, setInputMessage] = useState("");
  const [botTyping, setBotTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, botTyping]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = { text: inputMessage, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    setBotTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Thanks for reaching out! How can I help further?", sender: "bot" },
      ]);
      setBotTyping(false);
    }, 1500);
  };

  return (
    <div className="chat-container">
      <div className="chat-header p-3 border-bottom">
        <h1 className="h5">KMIT Chatbot</h1>
      </div>
      <div className="chat-messages p-3 overflow-auto">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === "user" ? "text-end" : ""}`}>
            <div className={`chat-bubble ${message.sender}`}>
              <p>{message.text}</p>
            </div>
          </div>
        ))}
        {botTyping && (
          <div className="text-start chat-bubble bot">
            <p>Typing...</p>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="p-3 border-top">
        <div className="input-group">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="form-control"
            placeholder="Type your message..."
          />
          <button type="submit" className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Chatbot;*/
/*import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [showChat, setShowChat] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! How can I assist you today?", sender: 'bot' }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        setMessages((prev) => [...prev, { text: inputMessage, sender: 'user' }]);
        setInputMessage('');

        setTimeout(() => {
            setMessages((prev) => [...prev, { text: "Thanks for your query! We're here to help.", sender: 'bot' }]);
        }, 1000);
    };

    return (
        <div>
            <button className="chat-button" onClick={() => setShowChat(!showChat)}>
                💬 Chat
            </button>
            {showChat && (
                <div className="chat-container">
                    <div className="chat-header">KMIT Chatbot</div>
                    <div className="chat-messages">
                        {messages.map((message, index) => (
                            <div key={index} className={`chat-bubble ${message.sender}`}>
                                {message.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <form className="chat-input" onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;*/
/*import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [showChat, setShowChat] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! How can I assist you today?", sender: 'bot' }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        setMessages((prev) => [...prev, { text: inputMessage, sender: 'user' }]);
        setInputMessage('');

        setTimeout(() => {
            setMessages((prev) => [...prev, { text: "Thanks for your query! We're here to help.", sender: 'bot' }]);
        }, 1000);
    };

    return (
        <div>
            <button className="chat-button" onClick={() => setShowChat(!showChat)}>
                💬 Chat
            </button>
            {showChat && (
                <div className="chat-container">
                    <div className="chat-header">KMIT Chatbot</div>
                    <div className="chat-messages">
                        {messages.map((message, index) => (
                            <div key={index} className={`chat-bubble ${message.sender}`}>
                                {message.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <form className="chat-input" onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            className="input-field"
                        />
                        <button type="submit" className="send-button">Send</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;*/
/*import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [showChat, setShowChat] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! How can I assist you today?", sender: 'bot' }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        setMessages((prev) => [...prev, { text: inputMessage, sender: 'user' }]);
        setInputMessage('');

        setTimeout(() => {
            setMessages((prev) => [...prev, { text: "Thanks for your query! We're here to help.", sender: 'bot' }]);
        }, 1000);
    };

    return (
        <div>
            <button className="chat-button" onClick={() => setShowChat(!showChat)}>
                💬 Chat
            </button>
            {showChat && (
                <div className="chat-window">
                    
                    <div className="sidebar">
                        <h2 className="sidebar-title">KMIT Chatbot</h2>
                        <ul className="sidebar-links">
                            <li className="sidebar-item">Home</li>
                            <li className="sidebar-item">Settings</li>
                            <li className="sidebar-item">Help</li>
                        </ul>
                    </div>

                   
                    <div className="chat-container">
                        <div className="chat-header">KMIT Chatbot</div>
                        <div className="chat-messages">
                            {messages.map((message, index) => (
                                <div key={index} className={`chat-bubble ${message.sender}`}>
                                    {message.text}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                        <form className="chat-input" onSubmit={handleSendMessage}>
                            <input
                                type="text"
                                placeholder="Type a message..."
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                className="input-field"
                            />
                            <button type="submit" className="send-button">Send</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;*/
/*import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [showChat, setShowChat] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! How can I assist you today?", sender: 'bot' }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        setMessages((prev) => [...prev, { text: inputMessage, sender: 'user' }]);
        setInputMessage('');

        setTimeout(() => {
            setMessages((prev) => [...prev, { text: "Thanks for your query! We're here to help.", sender: 'bot' }]);
        }, 1000);
    };

    return (
        <div>
            <button className="chat-button" onClick={() => setShowChat(!showChat)}>
                💬 Chat
            </button>
            {showChat && (
                <div className="chat-window">
                    
                    <div className="sidebar">
                        <h2 className="sidebar-title">KMIT Chatbot</h2>
                        <ul className="sidebar-links">
                            <li className="sidebar-item">Home</li>
                            <li className="sidebar-item">Settings</li>
                            <li className="sidebar-item">Help</li>
                        </ul>
                    </div>

                    <div className="chat-container">
                        <div className="chat-header">KMIT Chatbot</div>
                        <div className="chat-messages">
                            {messages.map((message, index) => (
                                <div key={index} className={`chat-bubble ${message.sender}`}>
                                    {message.text}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                        <form className="chat-input" onSubmit={handleSendMessage}>
                            <input
                                type="text"
                                placeholder="Type a message..."
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                className="input-field"
                            />
                            <button type="submit" className="send-button">Send</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;*/
import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [showChat, setShowChat] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! How can I assist you today?", sender: 'bot' }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [showFeedback, setShowFeedback] = useState(false);
    const [feedback, setFeedback] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        // Add user message
        setMessages((prev) => [...prev, { text: inputMessage, sender: 'user' }]);
        setInputMessage('');

        // Simulate bot response after a delay
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { text: "Thanks for your query! We're here to help.", sender: 'bot' }
            ]);
        }, 1000);
    };

    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        if (!feedback.trim()) return;
        alert(`Thank you for your feedback: "${feedback}"`);
        setFeedback('');
        setShowFeedback(false);
    };

    return (
        <div>
            <button className="chat-button" onClick={() => setShowChat(!showChat)}>
                💬 Chat
            </button>
            {showChat && (
                <div className="chat-window">
                    {/* Sidebar */}
                    <div className="sidebar">
                        <h2 className="sidebar-title">KMIT Chatbot</h2>
                        <ul className="sidebar-links">
                            <li className="sidebar-item">Home</li>
                            <li className="sidebar-item">Settings</li>
                            <li className="sidebar-item">Help</li>
                        </ul>
                    </div>

                    {/* Main Chat Container */}
                    <div className="chat-container">
                        <div className="chat-header">KMIT Chatbot</div>
                        <div className="chat-messages">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`chat-bubble ${message.sender === 'user' ? 'user' : 'bot'}`}
                                >
                                    {message.text}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                        <form className="chat-input" onSubmit={handleSendMessage}>
                            <input
                                type="text"
                                placeholder="Type a message..."
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                className="input-field"
                            />
                            <button type="submit" className="send-button">Send</button>
                            <button
                                type="button"
                                className="chat-button-logout"
                                onClick={() => setShowChat(false)}
                            >
                                Close
                            </button>
                        </form>
                        <button
                            className="feedback-button"
                            onClick={() => setShowFeedback(!showFeedback)}
                        >
                            Feedback
                        </button>
                        {showFeedback && (
                            <div className="feedback-form">
                                <h3>Submit Feedback</h3>
                                <textarea
                                    placeholder="Write your feedback here..."
                                    value={feedback}
                                    onChange={(e) => setFeedback(e.target.value)}
                                    className="feedback-textarea"
                                />
                                <button onClick={handleFeedbackSubmit} className="send-button">
                                    Submit
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
