import React, { useState } from 'react';
import ProjectImg1 from '../assets/ProjectImg/Screenshot 2025-06-28 185817.png';
import ProjectImg2 from '../assets/ProjectImg/Screenshot 2025-06-28 185946.png';
import ProjectImg3 from '../assets/ProjectImg/Screenshot 2025-06-28 185855.png';
import { SiDaisyui, SiExpress, SiFirebase, SiMongodb, SiReact, SiTailwindcss, SiVite } from 'react-icons/si';


const projects = [
    {
        id: 1,
        name: "RentifyCars",
        image: ProjectImg1,
        description: "RentifyCars is a modern, user-friendly car rental platform designed to make the car booking process smooth and secure for both customers and rental service providers.",
        features: [
            "Implemented secure user login using Firebase Auth and protected private routes with JWT tokens",
            "Enabled car management system (Add, Update, Delete) for logged-in users, linked with their unique profiles",
            "Developed real-time car booking functionality with instant availability updates using Express.js and MongoDB.",
            "Built a fully responsive UI using React and Tailwind CSS for seamless experience across devices",
        ],
        techIcons: [
            <SiVite size={28} className="text-[#646CFF]" />,
            <SiReact size={28} className="text-[#61DBFB]" />,
            <SiTailwindcss size={28} className="text-[#38BDF8]" />,
            <SiDaisyui size={28} className="text-[#FF69B4]" />,
            <SiFirebase size={28} className="text-[#FFCA28]" />,
            <SiExpress size={28} />,
            <SiMongodb size={28} className="text-[#47A248]" />,
        ],
        live: "https://rentifycars-8a487.web.app/",
        client: "https://github.com/Md-Shakib-Akando/RentifyCar-Client-side",
        server: "https://github.com/Md-Shakib-Akando/Rentify-Cars-server-side",
    },
    {
        id: 2,
        name: "Plant Care",
        image: ProjectImg2,
        description: "A full-stack web application designed to help users manage their indoor and outdoor plants. And detailed plant care info, it's your smart assistant for keeping your greenery healthy.",
        features: [
            "Mobile-Responsive Interface using Tailwind CSS",
            "Comprehensive Plant Details",
            "View Recently Added Plants",
            "Plant Management (Add, Update, Delete)"
        ],
        techIcons: [
            <SiVite size={28} className="text-[#646CFF]" />,
            <SiReact size={28} className="text-[#61DBFB]" />,
            <SiTailwindcss size={28} className="text-[#38BDF8]" />,
            <SiDaisyui size={28} className="text-[#FF69B4]" />,
            <SiFirebase size={28} className="text-[#FFCA28]" />,
            <SiExpress size={28} />,
            <SiMongodb size={28} className="text-[#47A248]" />,
        ],
        live: "https://plants-care-cb29c.web.app/",
        client: "https://github.com/Md-Shakib-Akando/Plant-care-client-side",
        server: "https://github.com/Md-Shakib-Akando/Plant-care-server-side",
    },
    {
        id: 3,
        name: "Job Track",
        image: ProjectImg3,
        description: "JJobTrack is designed to connect job seekers with employers in a simple, user-friendly interface. It aims to streamline the job search and hiring process by offering tools for posting, searching, and managing job applications.",
        features: [
            "User authentication and registration (Firebase Auth)",
            "Data management with React state and hooks",
            "Company-wise job filtering",
            "Route-based navigation for better UX"
        ],
        techIcons: [
            <SiVite size={28} className="text-[#646CFF]" />,
            <SiReact size={28} className="text-[#61DBFB]" />,
            <SiTailwindcss size={28} className="text-[#38BDF8]" />,
            <SiDaisyui size={28} className="text-[#FF69B4]" />,
            <SiFirebase size={28} className="text-[#FFCA28]" />,
        ],
        live: "https://job-track-dbb6a.web.app/",
        client: "https://github.com/Md-Shakib-Akando/Job-Track-WebApp",
        server: null,
    },
];

const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="project" className="p-4 lg:p-8">
            <h2 className="text-3xl my-10 text-white font-bold  pb-3 w-fit mx-auto">
                My Projects
            </h2>

            
                <div className="container text-white mx-auto space-y-12">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`flex flex-col lg:gap-5 xl:gap-9 overflow-hidden rounded-md border-1 p-3 border-[#00c58e] shadow-md shadow-[#00c58e] ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                    >
                        <div className="flex justify-center lg:justify-start overflow-hidden rounded-md flex-1">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-70 md:h-90 rounded-md transition-transform duration-300 ease-in-out hover:scale-110 aspect-video hover:cursor-pointer"
                            />
                        </div>

                        <div className="flex flex-col justify-center lg:justify-start flex-1 p-6 pl-3">
                            <h3 className="text-3xl font-bold">{project.name}</h3>
                            <p className="my-6">{project.description}</p>

                            <p className="font-bold">Technology:</p>
                            <div className="flex gap-2 my-3 flex-wrap">
                                {project.techIcons.map((icon, i) => (
                                    <span key={i}>{icon}</span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2 mt-6 lg:gap-4">
                                <button
                                    onClick={() => {
                                        setSelectedProject(project);
                                        document.getElementById('my_modal_3').showModal();
                                    }}
                                    className="btn text-white shadow-none bg-[#00c58e] border-[#00c58e] hover:text-[#00c58e] hover:bg-[#1b1f2a]"
                                >
                                    Details
                                </button>

                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                                        <button className="btn text-white shadow-none bg-[#00c58e] border-[#00c58e] hover:text-[#00c58e] hover:bg-[#1b1f2a]">
                                            Live Demo
                                        </button>
                                    </a>
                                )}
                                {project.client && (
                                    <a href={project.client} target="_blank" rel="noopener noreferrer">
                                        <button className="btn text-white shadow-none bg-[#00c58e] border-[#00c58e] hover:text-[#00c58e] hover:bg-[#1b1f2a]">
                                            Client Side
                                        </button>
                                    </a>
                                )}
                                {project.server && (
                                    <a href={project.server} target="_blank" rel="noopener noreferrer">
                                        <button className="btn text-white shadow-none bg-[#00c58e] border-[#00c58e] hover:text-[#00c58e] hover:bg-[#1b1f2a]">
                                            Server Side
                                        </button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            

            
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box  bg-[#262c3a] text-white max-w-2xl">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    {selectedProject && (
                        <>
                            <h2 className="text-3xl font-bold mb-3">{selectedProject.name}</h2>
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.name}
                                className="w-full rounded-md mb-4"
                            />
                            <p className="mb-4">{selectedProject.description}</p>
                            <p className="font-bold mb-2">Features:</p>
                            <ul className="list-disc ml-6 space-y-1 mb-4">
                                {selectedProject.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <p className="font-bold">Technologies:</p>
                            <div className="flex gap-3 flex-wrap mt-2">
                                {selectedProject.techIcons.map((icon, i) => (
                                    <span key={i}>{icon}</span>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </dialog>
        </section>
    );
};

export default Project;
