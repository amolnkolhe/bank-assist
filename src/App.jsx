import React, { useState, useRef, useEffect } from 'react';
import { fetchBankingSupport } from './api';
import './App.css';

function App() {
  // Requirement 4: State Management
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Ref for auto-scrolling
  const messagesEndRef = useRef(null);

  // Requirement 5: Auto-scroll messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    document.querySelector('input')?.focus();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message to UI
    const userMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Requirement 2: Call LLM
      const aiResponseText = await fetchBankingSupport(userMessage.text);
      
      const aiMessage = { role: 'ai', text: aiResponseText };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      // Display error as a system message
      const errorMessage = { role: 'error', text: `System Alert: ${error.message}` };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSend();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>BankAssist Support</h2>
      </div>
      
      {/* Requirement 1: Message Display */}
      <div className="chat-history">
        {messages.length === 0 && (
          <p className="welcome-text">How can I help you with your banking today?</p>
        )}
        
        {messages.map((msg, index) => (
          <div key={index} className={`message-row ${msg.role}`}>
            <div className={`message-bubble ${msg.role}`}>
              {msg.text}
            </div>
          </div>
        ))}

        {/* Requirement 5: Loading Indicator */}
        {isLoading && (
          <div className="message-row ai">
            <div className="message-bubble ai typing">
              Thinking...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Requirement 1: Input Box and Send Button */}
      <div className="chat-input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g., Why was ₹5000 debited?"
          disabled={isLoading}
        />
        <button 
          onClick={handleSend} 
          disabled={isLoading || !input.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;