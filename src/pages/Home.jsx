import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaEnvelope, FaMapMarkerAlt, FaTwitter } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "IntervueAI",
    description:
      "Real-time mock interviews with AI, no forms or clicks—just natural, personalized conversations.",
    details:
      "Technologies: React, Node.js, Express, MongoDB, WebRTC, Socket.IO, OpenAI API.",
    image: "",
    liveLink: "#",
  },
  {
    id: 2,
    title: "Blendy",
    description:
      "A social app where you connect in real-time, log in with one click, share moments instantly.",
    details:
      "Technologies: React Native, Firebase, OAuth, Real-time DB, Cloud Functions.",
    image: "",
    liveLink: "#",
  },
  {
    id: 3,
    title: "WATCHit",
    description:
      "A video streaming app made for personal entertainment and binge-watching.",
    details: "Technologies: React, Node.js, MongoDB, AWS S3, HLS streaming.",
    image: "",
    liveLink: "#",
  },
];

const techStack = [
  { name: "HTML", icon: "" },
  { name: "CSS", icon: "" },
  { name: "JavaScript", icon: "" },
  { name: "Tailwind CSS", icon: "" },
  { name: "Express JS", icon: "" },
  { name: "Node JS", icon: "" },
  { name: "React + Native", icon: "" },
  { name: "MongoDB", icon: "" },
  { name: "JWT", icon: "" },
  { name: "PostgreSQL", icon: "" },
  { name: "TypeScript", icon: "" },
  { name: "Docker", icon: "" },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [flippedId, setFlippedId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div 
  className="bg-gradient-to-br from-black via-[#0f0c29] to-[#302b63] bg-fixed bg-cover bg-center" 
>

      {/* navbar */}
  <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-gray-800 flex justify-between items-center p-4">
  <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
    Govinda Mahanti
  </div>

  <ul className="flex space-x-10 text-lg font-medium">
    <li className="relative">
      <a href="#" className="text-purple-300 hover:text-white">
        Home
      </a>
      <div className="absolute left-0 -bottom-1 w-full h-0.5 bg-purple-500"></div>
    </li>
    <li>
      <a href="#" className="text-purple-300 hover:text-white">
        About
      </a>
    </li>
    <li>
      <a href="#" className="text-purple-300 hover:text-white">
        Portfolio
      </a>
    </li>
    <li>
      <a href="#" className="text-purple-300 hover:text-white">
        Contact
      </a>
    </li>
  </ul>
</nav>


      {/* hero section */}
      <div className="min-h-screen text-white flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl px-4">
          {/* Left Content */}
          <div className="space-y-6">
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg">
              ⚡ Ready to Innovate
            </button>

            <h2 className="text-5xl md:text-6xl font-">
              Full Stack{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                Developer
              </span>
            </h2>

            <p className="text-2xl text-gray-300">Tech Enthusiast</p>

            <p className="text-lg text-gray-400">
              Enhancing digital experiences that are smooth, scalable, and made
              to impress.
            </p>

            <div className="flex gap-5">
              <button className="px-6 py-3 bg-[#0e0e0e] border border-gray-500 rounded-md hover:bg-gradient-to-r from-purple-600 to-indigo-600 transition shadow-lg">
                Projects ↗
              </button>
              <button className="px-6 py-3 bg-[#0e0e0e] border border-gray-500 rounded-md hover:bg-gradient-to-r from-purple-600 to-indigo-600 transition shadow-lg">
                Contact ✉
              </button>
            </div>

            <div className="flex gap-5 pt-4">
              <a
                href="#"
                className="p-3 bg-black bg-opacity-50 rounded-full hover:scale-110 transition"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-black bg-opacity-50 rounded-full hover:scale-110 transition"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-black bg-opacity-50 rounded-full hover:scale-110 transition"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center mt-10 md:mt-0">
            <img
              src="/your-image-path.png"
              alt="developer"
              className="w-[80%] md:w-[90%] drop-shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* about */}

      <div className="  text-white flex items-center justify-center px-5 py-20">
        <div className="max-w-4xl text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            I’m <span className="text-purple-500">Govinda Mahanti</span>, a Full
            Stack Developer.
          </h1>

          <p className="text-lg text-gray-300">
            I'm currently pursuing my B.Tech in Computer Science Engineering at
            NIST University. I specialize in building scalable full-stack web
            applications using React, Node.js, Express.js, and MongoDB/SQL. With
            over 7 months of experience at Virtualsphere Technologies Pvt. Ltd.,
            I’ve developed responsive UIs with Tailwind CSS, integrated RESTful
            APIs, implemented real-time features using Firebase and ZegoCloud,
            and built secure backend systems with role-based authentication. I
            follow Agile methodologies, proficiently use Git/GitHub, and focus
            on delivering clean UI/UX with optimized frontend performance.
          </p>

          {/* <div className="flex justify-center items-center gap-5 pt-5">
            <a href="#" className="hover:scale-110 transition">
              <FaInstagram size={35} className="text-pink-400" />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <FaLinkedin size={35} className="text-blue-500" />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <MdEmail size={40} className="text-blue-400" />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <FaGithub size={35} className="text-purple-400" />
            </a>
          </div> */}

          <div className="pt-8">
            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md text-white font-semibold">
              Download{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* experience */}

      <div className="  text-white flex flex-col items-center justify-center px-5 py-20">
        <h2 className="text-4xl font-bold mb-10">
          My <span className="">Experience</span>
        </h2>

        <div className="space-y-10 max-w-4xl">
          {/* Experience 1 */}
          <div className="bg-[#121212] p-6 rounded-lg border border-gray-700 hover:scale-[1.02] transition">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-2xl font-semibold ">
                Software Developer
              </h3>
              <p className="text-sm text-gray-400">oct 2024 - now</p>
            </div>
            <p className="text-lg text-white mb-2">Virtualsphere Technologies Pvt. Ltd</p>
            <p className="text-gray-300">
              - Developed and deployed scalable full stack web applications
              using React, Node.js, and MongoDB. <br />- Collaborated with UI/UX
              designers to enhance user experience. <br />- Integrated RESTful
              APIs and handled database optimization.
            </p>
          </div>
        </div>
      </div>

      {/* tech stack and project*/}

      <div className="  text-white flex flex-col items-center px-5 py-20">
        {/* Tab buttons */}
        <div className="flex mb-10 bg-[#121212] rounded-full border border-gray-700">
          <button
            className={`px-8 py-3 rounded-full font-semibold transition ${
              activeTab === "projects"
                ? "bg-gradient-to-r from-purple-500 to-blue-500"
                : ""
            }`}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </button>
          <button
            className={`px-8 py-3 rounded-full font-semibold transition ${
              activeTab === "techstack"
                ? "bg-gradient-to-r from-purple-500 to-blue-500"
                : ""
            }`}
            onClick={() => setActiveTab("techstack")}
          >
            Tech Stack
          </button>
        </div>

        {/* Projects view */}
        {activeTab === "projects" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
            {projects.map((p) => (
              <div key={p.id} className="w-full h-[400px] perspective">
                <motion.div
                  className="relative w-full h-full"
                  animate={{ rotateY: flippedId === p.id ? 180 : 0 }}
                  transition={{ duration: 0.8 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front */}
                  <div className="absolute w-full h-full backface-hidden bg-[#161616] p-5 rounded-2xl border border-gray-700 shadow-lg">
                    <div className="rounded-lg bg-gray-800 h-48 mb-4 flex items-center justify-center text-gray-600">
                      No image
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                    <p className="text-gray-400 mb-4">{p.description}</p>
                    <div className="flex justify-between">
                      <a
                        href={p.liveLink}
                        className="text-blue-400 hover:underline"
                      >
                        Live Demo ↗
                      </a>
                      <button
                        onClick={() => setFlippedId(p.id)}
                        className="text-white hover:text-green-400 flex items-center gap-1"
                      >
                        Details →
                      </button>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute w-full h-full backface-hidden bg-[#111] p-5 rounded-2xl border border-gray-700 shadow-lg rotate-y-180">
                    <h3 className="text-2xl font-semibold mb-4">Details</h3>
                    <p className="text-gray-400 mb-6">{p.details}</p>
                    <button
                      onClick={() => setFlippedId(null)}
                      className="bg-[#222] border border-gray-700 px-6 py-3 rounded-md hover:bg-[#333]"
                    >
                      Return ←
                    </button>
                  </div>
                </motion.div>
              </div>
            ))}
            <div className="flex items-center justify-center">
              <button className="bg-[#222] border border-gray-700 px-6 py-3 rounded-md hover:bg-[#333]">
                See More ⌄
              </button>
            </div>
          </div>
        )}

        {/* Tech Stack view */}
        {activeTab === "techstack" && (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 w-full max-w-6xl">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="bg-[#161616] p-5 rounded-xl border border-gray-700 flex flex-col items-center hover:scale-[1.05] transition"
              >
                <div className="bg-gray-800 w-16 h-16 mb-3 flex items-center justify-center text-gray-600">
                  {/* Placeholder for icon */}
                  {tech.name[0]}
                </div>
                <p className="text-lg font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* contact us */}

      <div className="min-h-screen flex items-center justify-center  p-4">
        <div className="flex flex-col md:flex-row bg-[#161616] rounded-2xl shadow-lg w-full max-w-6xl border border-gray-700 overflow-hidden">
          {/* Left Side (Image Section) */}
          <div className="md:w-1/2 bg-[#222] flex items-center justify-center p-10">
            {/* You can replace this div with actual image */}
            <div className="w-full h-80 bg-gray-800 flex items-center justify-center text-gray-400 rounded-lg">
              Image Placeholder
            </div>
          </div>

          {/* Right Side (Form Section) */}
          <div className="md:w-1/2 p-10">
            <h2 className="text-3xl font-bold text-white mb-6">Contact Me</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-white mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md bg-[#222] border border-gray-600 text-white"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-white mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md bg-[#222] border border-gray-600 text-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-white mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md bg-[#222] border border-gray-600 text-white"
                  rows="5"
                  placeholder="Type your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className=" text-white py-12 px-6 relative">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-purple-500 opacity-30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
          {/* About Section */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold mb-4">
              Abhishek<span className="text-purple-400"> .</span>
            </h2>
            <p className="text-gray-300">
              Crafting digital{" "}
              <span className="font-semibold text-white">ecstasies</span> with
              code, creativity (& a bit of caffeine of course!).
            </p>
            <p className="text-gray-400 mt-4">Thanks for stopping by!</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <FaEnvelope className="text-purple-400" />
              <span>abhi120730@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <FaMapMarkerAlt className="text-purple-400" />
              <span>Raipur, Chhattisgarh, India</span>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 text-gray-300 text-2xl">
              <a href="#">
                <FaGithub className="hover:text-purple-400 transition" />
              </a>
              <a href="#">
                <FaLinkedin className="hover:text-purple-400 transition" />
              </a>
              <a href="#">
                <FaTwitter className="hover:text-purple-400 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <div>© 2025 Abhishek | Portfolio. All rights reserved.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
    
  );
};

export default Home;
