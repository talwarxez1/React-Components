import { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { FaRobot } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function MiniChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  async function generateAnswer(e) {
    e.preventDefault();
    setGeneratingAnswer(true);

    // Add the user's question to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: question, type: "user" },
    ]);

    setQuestion(""); // Clear the input field

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBmly_bu3y4Oa1wv0HeQRc96ry7pChTev0",
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      const answer = response.data.candidates[0].content.parts[0].text;

      // Add the bot's answer to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: answer, type: "bot" },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Sorry - Something went wrong. Please try again!",
          type: "bot",
        },
      ]);
    }

    setGeneratingAnswer(false);
  }

  useEffect(() => {
    const popupClosed = localStorage.getItem("popupClosed");
    if (popupClosed) {
      setIsPopupVisible(true);
    } else {
      const handleScroll = () => {
        setIsPopupVisible(false);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const closePopup = () => {
    setIsPopupVisible(false);
    localStorage.setItem("popupClosed", "true");
  };

  return (
    <div className="fixed bottom-10 right-20 flex flex-col items-end z-50">
      {isPopupVisible && (
        <div className="relative mb-2 animate-fadeIn">
          <div className="relative bg-white text-black p-3 rounded-lg shadow-lg border border-gray-600 speech-bubble">
            <div className="flex justify-between items-center">
              <span>Need any help?</span>
              <button onClick={closePopup} className="ml-1 text-lg">
                <IoMdClose />
              </button>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 flex items-center justify-center bg-white text-black rounded-full shadow-lg border-2 border-gray-600 hover:bg-gray-200 transition-transform duration-300`}
      >
        <FaRobot size={24} />
      </button>
      {isOpen && (
        <div
          className={`fixed bottom-28 right-4 transition-all duration-500 ease-out transform bg-gray-300 text-white shadow-lg rounded-2xl w-[60vh] h-[80vh] flex flex-col overflow-hidden border border-gray-600 z-50`}
        >
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <h1 className="flex justify-center text-black text-lg items-center">Ask Me Anything</h1>
            <div className="space-y-2">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-xl ${
                    message.type === "user"
                      ? "bg-gray-800 text-white self-end"
                      : "bg-gray-700 text-white self-start"
                  }`}
                >
                  <ReactMarkdown className="text-lg">
                    {message.text}
                  </ReactMarkdown>
                </div>
              ))}
            </div>
          </div>
          <form
            onSubmit={generateAnswer}
            className="p-4 border-t border-gray-600 flex items-center space-x-2 bg-gray-500"
          >
            <textarea
              required
              className="flex-1 border border-gray-600 rounded-lg p-4 resize-none bg-gray-800 text-white placeholder-gray-400"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask me anything..."
            />
            <button
              type="submit"
              className={`bg-gradient-to-r from-[#e97c10] to-[#f5b15e] text-white py-2 px-4 rounded-lg hover:bg-gray-500 transition ${
                generatingAnswer ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={generatingAnswer}
            >
              {generatingAnswer ? "..." : "Send"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default MiniChatbot;
