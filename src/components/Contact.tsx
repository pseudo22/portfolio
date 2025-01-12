"use client"

import { useEffect, useState } from "react";
import gsap from "gsap";
import emailjs from "emailjs-com";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading , setLoading] = useState(false)

  useEffect(() => {
    gsap.from(".contact-div ", { opacity: 0, y: 50, duration: 1 });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)

    if (!email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    const templateParams = {
      to_email: "rohan.rv79@gmail.com",  
      from_email: email ,  
      message: message, 
      to_name : "there",
      from_name : email
    };

    emailjs.send(
      "service_d2vs07r",  
      "template_zshoa2n",  
      templateParams,
      "l6CY4tDPa22b49cze"    
    )
    .then((response) => {
      setLoading(false)
      setStatus("Message sent successfully!");
      setEmail("");
      setMessage("");
    })
    .catch((error) => {
      console.error("FAILED", error);
      setStatus("Failed to send message. Please try again later.");
    });
  };

  return (
    <div className="contact-div w-full md:w-[70%] lg:w-[70%] left-[10%] sm:left-[25%] md:left-[20%] lg:left-[15%] min-h-[80vh] top-[20%] absolute mx-auto py-16 px-6 rounded-lg shadow-lg">
    <h2 className="text-4xl font-semibold text-center mb-8">contact me</h2>
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col">
        <label htmlFor="email" className="text-lg mb-2">your email</label>
        <input
          type="email"
          id="email"
          className="p-3 border rounded-lg focus:outline-none"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="text-lg mb-2">your message</label>
        <textarea
          id="message"
          className="p-3 border rounded-lg focus:outline-none"
          placeholder="Enter your message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="self-center text-white py-3 px-6 border border-white rounded-lg mt-4 transition-all duration-300"
      >
        {loading ? "sending" : "send message"}
      </button>
    </form>
  
    {status && <p className="text-center mt-6 text-lg">{status}</p>}
  
    <div className="mt-8 relative flex justify-center gap-6">
  <a
    href="https://www.linkedin.com/in/rohan-verma-047436267/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="contact-link text-2xl py-2 px-4 sm:py-3 sm:px-6 border border-white text-gray-800 hover:text-gray-600 transition-all duration-300"
  >
    linkedIn
  </a>
  <a
    href="https://github.com/pseudo22"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-link text-2xl py-2 px-4 sm:py-3 sm:px-6 border border-white text-gray-800 hover:text-gray-600 transition-all duration-300"
  >
    gitHub
  </a>
  <a
    href="https://x.com/pseudo2211"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-link text-2xl py-2 px-4 sm:py-3 sm:px-6 border border-white text-gray-800 hover:text-gray-600 transition-all duration-300"
  >
    X
  </a>
</div>


  </div>
  
  );
}