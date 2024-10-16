import React, { useState } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false); // Track whether the chatbot is open
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Lorem ipsum dolar sit general sac mascho werho' },
    { type: 'user', text: 'Lorem ipsum dolar sit general sac mascho werho' },
    { type: 'bot', text: 'Lorem ipsum dolar sit general sac mascho werho' },
  ]);

  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { type: 'user', text: input }]);
    setInput('');
    // Add bot response (optional for now, e.g., a dummy response)
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'bot', text: 'This is a bot response.' },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-32 right-20">
      {/* Open/Close Chatbot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'bg-white text-black text-4xl font-bold fixed bottom-4 right-20' : 'fixed bottom-4 right-20 bg-orange-500 text-white text-4xl font-bold text-center'
        } w-20 h-20 rounded-full shadow-md flex items-center justify-center transition-colors duration-300`}
      >
        {isOpen ? (
          <img src="/Frame(1).png" alt="Close" className="w-[38px] h-[38px]" />
        ) : (
          <img src="/C.png" alt="Open" className="w-[19px] h-[39px]" />
        )}
      </button>

      {/* Chatbot UI */}
      {isOpen && (
        <div className="flex flex-col h-[475px] w-[331px] mt-4 bg-gray-100 shadow-lg rounded-[12px] overflow-hidden">
          {/* Chat Header */}
          <div className="bg-orange-500 text-white p-4">
            <h1 className="text-lg font-bold">Chat with Cypher</h1>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-white">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`w-[213px] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-black text-white'
                      : 'bg-gray-200 text-black'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Section */}
          <div className="items-center p-4 border-t bg-white">
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg focus:outline-none w-[301px]"
              placeholder="Enter your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <div className='flex justify-between mt-3 items-center'>
              <div>
                <img src="/6.png" alt="" className='w-[86px] h-[24px]' />
              </div>
            <button
              className="ml-2 px-[25px] py-[5px] bg-orange-500 text-white rounded-[15.5px]"
              onClick={sendMessage}
            >
              Send
            </button>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
