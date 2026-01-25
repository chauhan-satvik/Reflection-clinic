import React, { useState, useRef, useEffect } from 'react';
import { getConciergeResponse } from '../services/geminiService';
import { Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
}

const AiConcierge: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Welcome to REFLECTION Clinic. I am Aura, your virtual concierge. How may I assist you with our premium services today?", sender: 'ai' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await getConciergeResponse(inputValue);
      const aiMsg: Message = { id: Date.now() + 1, text: responseText, sender: 'ai' };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { id: Date.now() + 1, text: "I seem to be having trouble connecting to our main systems. Please try again.", sender: 'ai' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="pt-24 min-h-screen bg-royal-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-royal-800/80 backdrop-blur-xl border border-gold-500/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[80vh]">
        
        {/* Header */}
        <div className="bg-royal-950 p-6 border-b border-gold-500/20 flex items-center gap-4">
          <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.5)]">
            <Sparkles className="text-royal-900 w-6 h-6" />
          </div>
          <div>
            <h2 className="text-white font-display text-xl">Aura AI Concierge</h2>
            <p className="text-gold-500 text-xs uppercase tracking-widest">Always at your service</p>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-4 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.sender === 'user' ? 'bg-slate-700' : 'bg-gold-900 border border-gold-500/30'}`}>
                  {msg.sender === 'user' ? <User size={14} className="text-slate-300" /> : <Bot size={14} className="text-gold-500" />}
                </div>
                <div className={`p-4 rounded-2xl ${msg.sender === 'user' ? 'bg-slate-700 text-white rounded-tr-none' : 'bg-royal-950 border border-white/5 text-slate-300 rounded-tl-none'}`}>
                  <p className="text-sm leading-relaxed font-light">{msg.text}</p>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="flex gap-4 max-w-[80%]">
                 <div className="w-8 h-8 rounded-full bg-gold-900 border border-gold-500/30 flex items-center justify-center">
                    <Loader2 size={14} className="text-gold-500 animate-spin" />
                 </div>
                 <div className="bg-royal-950 border border-white/5 text-slate-300 rounded-2xl rounded-tl-none p-4">
                    <p className="text-xs italic text-slate-500">Aura is thinking...</p>
                 </div>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-6 bg-royal-950 border-t border-gold-500/20">
          <div className="flex gap-4 items-center bg-royal-900 border border-slate-700 rounded-full px-6 py-3 focus-within:border-gold-500 transition-colors shadow-inner">
            <input 
              type="text" 
              className="bg-transparent flex-1 outline-none text-white placeholder:text-slate-600 font-light"
              placeholder="Ask about our services, specialists, or appointments..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !inputValue.trim()}
              className="text-gold-500 hover:text-white transition-colors disabled:opacity-50"
            >
              <Send size={20} />
            </button>
          </div>
          <p className="text-center text-slate-600 text-[10px] mt-3 uppercase tracking-widest">
            AI responses are for informational purposes only and do not constitute medical advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AiConcierge;