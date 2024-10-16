import React, { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false); // State to manage visibility

  const handleSend = () => {
    if (input.trim() === '') return;

    // Add user message
    const userMessage = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botMessage = { text: getBotResponse(input), sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);

    setInput('');
  };

  const getBotResponse = (userInput) => {
    if (userInput.toLowerCase().includes('hello')) {
      return 'Hi there! How can I help you?';
    }
    if (userInput.toLowerCase().includes('help')) {
      return 'Sure! What do you need help with?';
    }
    return "I'm not sure how to respond to that.";
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)} // Toggle visibility
        className="fixed bottom-4 right-4 z-10 "
      >
        <img
          src={isOpen ? '/5.svg' : '/4.png'} // Replace with your image paths
          alt={isOpen ? 'Close Chat' : 'Open Chat'}
          className="" // Adjust size as needed
        />
      </button>

      {isOpen && (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-4 fixed bottom-40 right-4 z-9">
          <div className="h-64 overflow-y-scroll mb-4 border border-gray-200 p-2">
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender === 'user' ? 'text-right' : 'text-left'}>
                <span className={`inline-block p-2 rounded-lg my-1 ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border rounded-lg p-2 flex-grow"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-blue-600 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
