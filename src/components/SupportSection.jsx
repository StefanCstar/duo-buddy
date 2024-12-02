import React from "react";
import { FaPaperPlane, FaDiscord, FaComments } from "react-icons/fa";

const SupportSection = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Chatbox */}
        <div
          className="relative w-full max-w-lg transform hover:rotate-6 hover:scale-105 transition-transform duration-500 ease-in-out"
          style={{ perspective: "1000px" }}
        >
          {/* Glow Border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 to-purple-400 blur-lg opacity-70"></div>
          <div
            className="relative bg-gray-900 rounded-3xl p-8 shadow-xl"
            style={{ transform: "rotateY(10deg)" }}
          >
            {/* Chat Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                B
              </div>
              <div>
                <h4 className="text-xl font-bold">Buddy</h4>
                <p className="text-sm text-gray-400">LiveChat Agent</p>
              </div>
              <span className="w-4 h-4 bg-green-500 rounded-full ml-auto"></span>
            </div>

            {/* Chat Messages */}
            <div className="space-y-6 mb-6">
              <div className="bg-gray-800 rounded-lg px-5 py-3 text-gray-300 shadow-sm">
                Hi there! How can I assist you today?
              </div>
              <div className="bg-purple-600 text-white rounded-lg px-5 py-3 shadow-md">
                I need help with my order.
              </div>
            </div>

            {/* Input Box */}
            <div className="flex items-center bg-gray-800 rounded-lg px-5 py-3 shadow-inner">
              <input
                type="text"
                placeholder="Type a message..."
                className="bg-transparent flex-1 outline-none text-white placeholder-gray-400 px-4 py-2"
              />
              <button className="text-purple-500 hover:text-purple-700 transition-transform transform hover:scale-110">
                <FaPaperPlane size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Support Info */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 leading-tight tracking-wide">
            Premium 24/7 Support in Multiple Languages.
            <br />
            <span className="text-purple-500">By Buddies for Buddies</span>
          </h2>
          <p className="text-base text-gray-400 mb-8">
            Our support team is here around the clock to assist you with any
            questions or issues.
          </p>
          <div className="flex flex-wrap items-center gap-6 mb-6 justify-center lg:justify-start">
            <button className="bg-gray-800 hover:bg-purple-700 text-white px-8 py-4 rounded-lg flex items-center gap-3 transition-transform transform hover:scale-105 text-lg">
              <FaComments />
              Open Live Chat
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg flex items-center gap-3 transition-transform transform hover:scale-105 text-lg">
              <FaDiscord />
              Join Discord
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;