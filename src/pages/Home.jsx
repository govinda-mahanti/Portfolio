import React, { useState, useRef, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaEnvelope, FaMapMarkerAlt, FaTwitter } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import emailjs from "emailjs-com";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import govinda from "../assets/govinda.jpg";
import resumeFile from "../assets/govinda.pdf"; // adjust path if needed

// projects

import astha from "../assets/projects/astha.png";
import cipla from "../assets/projects/cipla.png";
import inps from "../assets/projects/inps.png";
import locater from "../assets/projects/locater.png";
import mumvets from "../assets/projects/mumvets.png";
import port from "../assets/projects/port.png";
import vst from "../assets/projects/vs.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio with GSAP animations.",
    techStack: "React, Tailwind CSS, GSAP, Framer Motion, Emailjs",
    details:
      "This portfolio is a testament to modern frontend development. It leverages GSAP for intricate, high-performance animations and Framer Motion for smooth page transitions. The goal was to create a visually engaging and seamless user experience that effectively showcases my skills and projects.",
    image: port,
    liveLink: "https://govindamahanti.vercel.app/",
  },
  {
    id: 2,
    title: "Real-time Locator App",
    description: "A map-based app for tracking user locations.",
    techStack: "Node.js, Express.js, Google Maps API, EJS, WebSocket",
    details:
      "This application provides real-time location tracking using WebSockets for instant client-server communication. The frontend utilizes the Google Maps API to display dynamic markers, and EJS was chosen as the templating engine for its simplicity in rendering dynamic server-side data.",
    image: locater,
    liveLink: "https://tracker-6887.onrender.com/",
  },
  {
    id: 3,
    title: "Astha - Doctor Consultation App",
    description: "An online platform for video calls with doctors.",
    techStack:
      "React.js, Redux, Tailwind CSS, Firebase, ZegoCloud API, Node.js, Express, MySQL",
    details:
      "Astha is a comprehensive tele-health solution. It uses React and Redux for robust state management. Real-time video consultations are powered by the ZegoCloud API for high-quality, low-latency streams. Firebase is integrated for secure user authentication and data storage.",
    image: astha,
    liveLink: "#",
  },
  {
    id: 4,
    title: "Invoice Pacer",
    description: "An invoice management tool with authentication.",
    techStack:
      "React.js, Redux Toolkit, Tailwind CSS, Node.js, Express, MongoDB",
    details:
      "This tool simplifies invoice management for freelancers. Developed with React, it features a clean UI designed with Tailwind CSS. Global state, including user authentication and invoice data, is managed efficiently with Redux Toolkit, ensuring a seamless user experience across all devices.",
    image: inps,
    liveLink: "http://198.38.88.235:8080/",
  },
  {
    id: 5,
    title: "Mumvets Website",
    description: "A veterinary service platform with an interactive UI.",
    techStack:
      "React.js, Redux, Framer Motion, Firebase, Tailwind CSS, Node.js, Express, MySQL",
    details:
      "The Mumvets website serves as an online hub for veterinary services, featuring engaging animations powered by Framer Motion. We used Redux for managing application state, such as appointments. Firebase handles the backend services, including the database and user authentication.",
    image: mumvets,
    liveLink: "https://mumvets.com/",
  },
  {
    id: 6,
    title: "FlcTech - Cipla Video Processing",
    description:
      "A web solution for Cipla to merge videos using Google Transcoder API.",
    techStack: "React, Tailwind CSS, Node.js, Express, MySQL, Google Cloud",
    details:
      "FlcTech was developed as a specialized platform for Cipla. The project integrates Google Cloud’s Transcoder API to seamlessly merge three videos into a single output. The frontend was built with React and Tailwind CSS for an intuitive interface, while Node.js and Express power the backend. MySQL is used for structured data management, and deployment relies on Google Cloud infrastructure for scalability and reliability.",
    image: cipla,
    liveLink: "https://cipla-govinda-mahantis-projects.vercel.app/",
  },
  {
    id: 7,
    title: "Virtualsphere Company Website",
    description:
      "A modern company website with animations and backend integration.",
    techStack: "React.js, Tailwind CSS, Framer Motion, Node.js, Express.js",
    details:
      "The Virtualsphere Company Website was designed to establish a strong digital presence. It features smooth UI animations powered by Framer Motion, a responsive layout built with Tailwind CSS, and dynamic content management through a Node.js and Express.js backend. The project emphasizes both visual appeal and performance, ensuring a professional user experience.",
    image: vst,
    liveLink: "https://virtualspheretechnologies.in/",
  },
];

const paragraph = `I'm currently pursuing my B.Tech in Computer Science Engineering at
  NIST University. I specialize in building scalable full-stack web
  applications using React, Node.js, Express.js, and MongoDB/SQL. With
  over 7 months of experience at Virtualsphere Technologies Pvt. Ltd.,
  I’ve developed responsive UIs with Tailwind CSS, integrated RESTful
  APIs, implemented real-time features using Firebase and ZegoCloud,
  and built secure backend systems with role-based authentication. I
  follow Agile methodologies, proficiently use Git/GitHub, and focus
  on delivering clean UI/UX with optimized frontend performance.`;

const techStack = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/31/tailwind.png",
  },
  {
    name: "Node JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express JS",
    icon: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  { name: "JWT", icon: "https://jwt.io/img/pic_logo.svg" },
  {
    name: "Sql",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Github",
    icon: "https://www.freeiconspng.com/uploads/github-icon-9.png",
  },
  {
    name: "java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [flippedId, setFlippedId] = useState(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State for active navigation link
  const [activeLink, setActiveLink] = useState("Home");
  const navItems = ["Home", "About", "Projects", "Contact"];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_vvsvt4k", // Service ID
        "template_1mc8vcf", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "VemDTGZP75FyFQhnn" // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // clear form
        },
        (error) => {
          console.log(error.text);
          setStatus("❌ Failed to send message. Please try again.");
        }
      );
  };

  const paragraphRef = useRef();

  useEffect(() => {
    const letters = paragraphRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      { color: "#9CA3AF" }, // text-gray-300
      {
        color: "#FFFFFF",
        stagger: 0.02,
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, []);

  const [showAll, setShowAll] = useState(false);

  const projectsToShow = showAll ? projects : projects.slice(0, 3);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // This will make children animate one by one
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-black via-[#0f0c29] to-[#302b63] bg-fixed bg-cover bg-center">
      {/* navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-gray-800 flex justify-between items-center px-12 py-4">
        {/* Logo/Name */}
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          <a href="#home">Govinda Mahanti</a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item} className="relative">
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setActiveLink(item)}
                className="text-purple-300 hover:text-white transition-colors"
              >
                {item}
              </a>
              {activeLink === item && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-full h-0.5 bg-purple-500"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {/* Lucide icons are used here */}
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col justify-center items-center">
            <ul className="flex flex-col space-y-8 text-2xl font-medium text-center">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => {
                      setActiveLink(item);
                      setIsMenuOpen(false); // Close menu on click
                    }}
                    className="text-purple-300 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* hero section */}
      <div
        id="home"
        className="min-h-screen text-white flex items-center justify-center pt-[90px] md:pt-0"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl px-4">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible" // Animate when the component mounts
          >
            <motion.button
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 12px rgb(129 140 248)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg"
            >
              ⚡ Ready to Innovate
            </motion.button>

            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold"
            >
              Full Stack{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                Developer
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-2xl text-gray-300"
            >
              Tech Enthusiast
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-400">
              Enhancing digital experiences that are smooth, scalable, and made
              to impress.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-5">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-3 bg-[#0e0e0e] border border-gray-500 rounded-md hover:bg-gradient-to-r from-purple-600 to-indigo-600 transition shadow-lg"
              >
                Projects ↗
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-3 bg-[#0e0e0e] border border-gray-500 rounded-md hover:bg-gradient-to-r from-purple-600 to-indigo-600 transition shadow-lg"
              >
                Contact ✉
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-5 pt-4">
              <motion.a
                href="https://github.com/govinda-mahanti"
                target="_blank"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-black bg-opacity-50 rounded-full transition"
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/govinda-mahanti-314754251"
                target="_blank"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-black bg-opacity-50 rounded-full transition"
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a
                href="https://x.com/govinda_mahanti"
                target="_blank"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-black bg-opacity-50 rounded-full transition"
              >
                <FaTwitter size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <div className="flex justify-end items-center mt-10 md:mt-0">
            <motion.div
              className="relative rounded-full p-[6px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 shadow-lg shadow-pink-400"
              // ROTATION PROPS REMOVED FROM HERE
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              // Add a transition prop for the entrance animation
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="rounded-full bg-white p-1.5">
                <img
                  src={govinda}
                  alt="developer"
                  className="w-[350px] h-[350px] object-cover rounded-full drop-shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* about */}
      <div
        id="about"
        className="text-white flex items-center justify-center px-5 py-20"
      >
        <div className="max-w-4xl text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            I’m <span className="text-purple-500">Govinda Mahanti</span>, a Full
            Stack Developer.
          </h1>
          <p
            ref={paragraphRef}
            className="text-lg text-gray-300 leading-8 flex flex-wrap justify-center"
          >
            {paragraph.split("").map((char, idx) => (
              <span key={idx} className="whitespace-pre">
                {char}
              </span>
            ))}
          </p>
          <div className="pt-8 flex justify-center">
            <a
              href={resumeFile}
              download="Govinda_Mahanti_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md text-white font-semibold"
            >
              Download
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
            </a>
          </div>
        </div>
      </div>

      {/* experience */}
      <div className="text-white flex flex-col items-center justify-center px-5 py-20">
        <h2 className="text-4xl font-bold mb-10">
          My <span className="">Experience</span>
        </h2>
        <div className="space-y-10 max-w-4xl">
          <div className="bg-[#121212] p-6 rounded-lg border border-gray-700 hover:scale-[1.02] transition">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-2xl font-semibold ">Software Developer</h3>
              <p className="text-sm text-gray-400">oct 2024 - now</p>
            </div>
            <p className="text-lg text-white mb-2">
              Virtualsphere Technologies Pvt. Ltd
            </p>
            <p className="text-gray-300">
              - Developed and deployed scalable full stack web applications
              using React, Node.js, and MongoDB. <br />- Collaborated with UI/UX
              designers to enhance user experience. <br />- Integrated RESTful
              APIs and handled database optimization.
            </p>
          </div>
        </div>
      </div>

      {/* tech stack and projects */}
      <div
        id="projects"
        className="text-white flex flex-col items-center px-5 py-20"
      >
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
          <div className="w-full flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl">
              {" "}
              {/* Increased max-w */}
              {projectsToShow.map((p) => (
                <div key={p.id} className="w-full h-[450px] perspective">
                  <motion.div
                    className="relative w-full h-full"
                    animate={{ rotateY: flippedId === p.id ? 180 : 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Front Side */}
                    <div className="absolute w-full h-full backface-hidden bg-[#161616] p-6 rounded-2xl border border-gray-700 shadow-lg flex flex-col justify-between">
                      <div>
                        <div className="rounded-lg bg-gray-800 h-48 mb-4 flex items-center justify-center text-gray-600">
                          <img src={p.image} alt={p.title} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-white">
                          {p.title}
                        </h3>
                        <p className="text-gray-400">{p.description}</p>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <a
                          href={p.liveLink}
                          className="text-blue-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo ↗
                        </a>
                        <button
                          onClick={() => setFlippedId(p.id)}
                          className="text-white hover:text-green-400 font-semibold"
                        >
                          Details →
                        </button>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute w-full h-full backface-hidden bg-[#111] p-6 rounded-2xl border border-gray-700 shadow-lg rotate-y-180 flex flex-col">
                      <h3 className="text-2xl font-bold mb-3 text-white">
                        Details
                      </h3>
                      <div className="flex-grow overflow-y-auto custom-scrollbar pr-2">
                        <p className="font-semibold text-gray-300 mb-2">
                          Technologies Used:
                        </p>
                        <p className="text-green-400 text-sm mb-4 font-mono">
                          {p.techStack}
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                          {p.details}
                        </p>
                      </div>
                      <button
                        onClick={() => setFlippedId(null)}
                        className="mt-4 bg-[#222] border border-gray-700 px-6 py-2 rounded-md hover:bg-[#333] self-start"
                      >
                        ← Return
                      </button>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {projects.length > 3 && (
              <div className="flex items-center justify-center mt-12">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="bg-[#222] border border-gray-700 px-6 py-3 rounded-md hover:bg-[#333] flex items-center gap-2 transition-colors"
                >
                  {showAll ? "Show Less" : "Show More"}
                  {showAll ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tech Stack view */}
        {activeTab === "techstack" && (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 w-full max-w-6xl">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="bg-[#161616] p-5 rounded-xl border border-gray-700 flex flex-col items-center justify-center hover:scale-[1.05] transition"
              >
                {/* The placeholder div is replaced with this img tag */}
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 mb-3 object-contain"
                />
                <p className="text-lg font-medium text-center">{tech.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* contact us */}
      <div
        id="contact"
        className="min-h-screen flex items-center justify-center p-4"
      >
        <div className="flex flex-col md:flex-row bg-[#161616] rounded-2xl shadow-lg w-full max-w-6xl border border-gray-700 overflow-hidden">
          {/* Left Side - Placeholder */}
          <div className="md:w-1/2 bg-[#222] flex items-center justify-center ">
            <div className=" h-full rounded-lg overflow-hidden">
              <img
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2o4azI2OWhweDZwNWlxMnl6Z3JwMTNnbG1vd3Ftc3Z0NHN1MXYwNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.gif"
                alt="Contact Illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Contact Form */}
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

            {/* Status Message */}
            {status && <p className="text-white mt-4">{status}</p>}
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="text-white py-12 px-6 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-purple-500 opacity-30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold mb-4">
              Govinda Mahanti<span className="text-purple-400"> .</span>
            </h2>
            <p className="text-gray-300">
              Crafting digital{" "}
              <span className="font-semibold text-white">ecstasies</span> with
              code, creativity (& a bit of caffeine of course!).
            </p>
            <p className="text-gray-400 mt-4">Thanks for stopping by!</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <FaEnvelope className="text-purple-400" />
              <span>govindamahanti1@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <FaMapMarkerAlt className="text-purple-400" />
              <span>Berhampur, Odisha</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 text-gray-300 text-2xl">
              <a href="https://github.com/govinda-mahanti" target="_blank">
                <FaGithub className="hover:text-purple-400 transition" />
              </a>
              <a
                href="https://www.linkedin.com/in/govinda-mahanti-314754251"
                target="_blank"
              >
                <FaLinkedin className="hover:text-purple-400 transition" />
              </a>
              <a href="https://x.com/govinda_mahanti" target="_blank">
                <FaTwitter className="hover:text-purple-400 transition" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <div>© 2025 Govinda Mahanti | Projects. All rights reserved.</div>
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
