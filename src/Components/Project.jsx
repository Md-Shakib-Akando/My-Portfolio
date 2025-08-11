import React, { useState } from 'react';
import ProjectImg1 from '../assets/ProjectImg/Screenshot 2025-06-28 185817.png';
import ProjectImg2 from '../assets/ProjectImg/Screenshot 2025-06-28 185946.png';
import ProjectImg3 from '../assets/ProjectImg/Screenshot 2025-08-11 235305.png';
import { SiDaisyui, SiExpress, SiFirebase, SiMongodb, SiReact, SiTailwindcss, SiVite } from 'react-icons/si';


const projects = [
    {
        id: 1,
        name: "Medicine Shop",
        image: ProjectImg3,
        description: "MedicineShop is a full-stack online medicine store with role-based access, product catalogs, advanced search, and secure Stripe payments. Users can shop and manage orders, while admins and sellers handle products and orders through dedicated dashboards.",
        features: [
            "Advanced role management with dedicated features for Admins, Sellers, and Users, ensuring personalized functionality for each role",
            "Robust authentication system with JSON Web Tokens (JWT) to enhance security and manage user sessions effectively",
            "Secure payment processing through Stripe for smooth and safe transactions",
            " Admin dashboard for managing users, orders, and inventory, while sellers can add or update their products with ease",
            " Exclusive discounts, promo codes, and real-time notifications keep users updated with the latest deals and promotions",
        ],
        challenges: [
            "Implementing secure role-based access control across multiple dashboards",
            "Integrating Stripe payment with proper error handling",
            "Optimizing database queries for faster search results",
        ],
        futurePlans: [
            "Add AI-based medicine recommendations",
            "Implement real-time chat between users and sellers",
            "Add multi-language support",
        ],
        techIcons: [

            { icon: <SiReact size={24} className="text-[#61DBFB]" />, name: "React" },
            { icon: <SiTailwindcss size={24} className="text-[#38BDF8]" />, name: "Tailwind CSS" },
            { icon: <SiDaisyui size={24} className="text-[#FF69B4]" />, name: "DaisyUI" },
            { icon: <SiFirebase size={24} className="text-[#FFCA28]" />, name: "Firebase" },
            { icon: <SiExpress size={24} />, name: "Express.js" },
            { icon: <SiMongodb size={24} className="text-[#47A248]" />, name: "MongoDB" },
        ],
        live: "https://medicine-shop-a36b4.web.app/",
        client: "https://github.com/Md-Shakib-Akando/medicine-shop-client-side",
        server: "https://github.com/Md-Shakib-Akando/medicine-shop-server-side",
    },
    {
        id: 2,
        name: "RentifyCars",
        image: ProjectImg1,
        description: "RentifyCars is a user-friendly car rental platform that simplifies the booking process for customers and service providers. It offers secure authentication, real-time availability, and efficient fleet and order management to ensure a smooth rental experience for all users.",
        features: [
            "Implemented secure user login using Firebase Auth and protected private routes with JWT tokens",
            "Enabled car management system (Add, Update, Delete) for logged-in users, linked with their unique profiles",
            "Developed real-time car booking functionality with instant availability updates using Express.js and MongoDB.",
            "Built a fully responsive UI using React and Tailwind CSS for seamless experience across devices",
        ],
        challenges: [
            "Ensuring real-time availability updates without performance lag",
            "Handling authentication and authorization seamlessly across routes",
            "Managing state efficiently for car booking and user profile",
        ],
        futurePlans: [
            "Add vehicle maintenance reminders",
            "Integrate payment gateways for easy booking",
            "Implement user reviews and ratings system",
        ],
        techIcons: [

            { icon: <SiReact size={24} className="text-[#61DBFB]" />, name: "React" },
            { icon: <SiTailwindcss size={24} className="text-[#38BDF8]" />, name: "Tailwind CSS" },
            { icon: <SiDaisyui size={24} className="text-[#FF69B4]" />, name: "DaisyUI" },
            { icon: <SiFirebase size={24} className="text-[#FFCA28]" />, name: "Firebase" },
            { icon: <SiExpress size={24} />, name: "Express.js" },
            { icon: <SiMongodb size={24} className="text-[#47A248]" />, name: "MongoDB" },
        ],
        live: "https://rentifycars-8a487.web.app/",
        client: "https://github.com/Md-Shakib-Akando/RentifyCar-Client-side",
        server: "https://github.com/Md-Shakib-Akando/Rentify-Cars-server-side",
    },
    {
        id: 3,
        name: "Plant Care",
        image: ProjectImg2,
        description: "Plant Care is a full-stack, mobile-friendly app that helps users manage indoor and outdoor plants with ease. It offers detailed plant info, real-time care updates, and simple plant management. Future plans include AI disease detection and care reminders to keep plants healthy.",
        features: [
            "Mobile-Responsive Interface using Tailwind CSS",
            "Comprehensive Plant Details",
            "View Recently Added Plants",
            "Plant Management (Add, Update, Delete)"
        ],
        challenges: [
            "Designing an intuitive UI for both indoor and outdoor plant care",
            "Handling complex plant data and care schedules efficiently",
            "Ensuring seamless CRUD operations with realtime updates",
        ],
        futurePlans: [
            "Add AI-based plant disease detection",
            "Implement notifications for watering and fertilizing",
            "Expand plant database with more species",
        ],
        techIcons: [

            { icon: <SiReact size={24} className="text-[#61DBFB]" />, name: "React" },
            { icon: <SiTailwindcss size={24} className="text-[#38BDF8]" />, name: "Tailwind CSS" },
            { icon: <SiDaisyui size={24} className="text-[#FF69B4]" />, name: "DaisyUI" },
            { icon: <SiFirebase size={24} className="text-[#FFCA28]" />, name: "Firebase" },
            { icon: <SiExpress size={24} />, name: "Express.js" },
            { icon: <SiMongodb size={24} className="text-[#47A248]" />, name: "MongoDB" },
        ],
        live: "https://plants-care-cb29c.web.app/",
        client: "https://github.com/Md-Shakib-Akando/Plant-care-client-side",
        server: "https://github.com/Md-Shakib-Akando/Plant-care-server-side",
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
                                className="w-full h-70 md:h-100 rounded-md transition-transform duration-300 ease-in-out hover:scale-110 aspect-video hover:cursor-pointer"
                            />
                        </div>

                        <div className="flex flex-col gap-4 xl:gap-7 justify-center lg:justify-start flex-1 p-6 pl-3">
                            <h3 className="text-3xl font-bold">{project.name}</h3>
                            <p className=" text-justify">{project.description}</p>

                            <p className="font-bold xl:-mb-4">Technology:</p>
                            <div className="flex gap-2  flex-wrap">
                                {project.techIcons.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="flex items-center gap-2 px-3 py-1 bg-[#1b1f2a] border border-[#00c58e] rounded-full text-sm"
                                    >
                                        {tech.icon}
                                        <span>{tech.name}</span>
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2  lg:gap-4">
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
                            <p className="mb-4 text-justify">{selectedProject.description}</p>
                            <p className="font-bold mb-2">Features:</p>
                            <ul className="list-disc ml-6 space-y-1 mb-4">
                                {selectedProject.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <p className="font-bold mt-4 mb-2">Challenges Faced:</p>
                            {selectedProject.challenges && (
                                <ul className="list-disc ml-6 space-y-1 mb-4">
                                    {selectedProject.challenges.map((challenge, i) => (
                                        <li key={i}>{challenge}</li>
                                    ))}
                                </ul>
                            )}


                            <p className="font-bold mb-2">Future Plans:</p>
                            {selectedProject.futurePlans && (
                                <ul className="list-disc ml-6 space-y-1">
                                    {selectedProject.futurePlans.map((plan, i) => (
                                        <li key={i}>{plan}</li>
                                    ))}
                                </ul>
                            )}
                            <p className="font-bold mt-2">Technologies:</p>
                            <div className="flex gap-2 my-3 flex-wrap">
                                {selectedProject.techIcons.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="flex items-center gap-2 px-3 py-1 bg-[#1b1f2a] border border-[#00c58e] rounded-full text-sm"
                                    >
                                        {tech.icon}
                                        <span>{tech.name}</span>
                                    </span>
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
