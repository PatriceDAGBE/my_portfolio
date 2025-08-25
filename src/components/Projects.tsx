"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { myProjects } from '@/data/projectsData';

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
    
    const filteredProjects = myProjects.filter(project => {
        if (selectedCategory === "All") {
            return true;
        }
        return project.category.includes(selectedCategory);
    });

    return (
        <section id="works" className="flex flex-col items-center mt-12 px-4 md:px-0">
            <h2 className="text-4xl font-bold mb-4">A small selection of <span className="text-primary">recent projects</span></h2>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base">
                <button 
                    onClick={() => handleCategoryClick("All")}
                    className={selectedCategory === "All" ? "text-primary font-semibold" : "text-gray-400"}
                >
                    All
                </button>
                <button 
                    onClick={() => handleCategoryClick("Data Science")}
                    className={selectedCategory === "Data Science" ? "text-primary font-semibold" : "text-gray-400"}
                >
                    Data Science
                </button>
                <button 
                    onClick={() => handleCategoryClick("Software Development")}
                    className={selectedCategory === "Software Development" ? "text-primary font-semibold" : "text-gray-400"}
                >
                    Software Development
                </button>
                <button 
                    onClick={() => handleCategoryClick("AI")}
                    className={selectedCategory === "AI" ? "text-primary font-semibold" : "text-gray-400"}
                >
                    AI
                </button>
                <button 
                    onClick={() => handleCategoryClick("Web Development")}
                    className={selectedCategory === "Web Development" ? "text-primary font-semibold" : "text-gray-400"}
                >
                    Web Development
                </button>
            </div>

            {filteredProjects.length > 4 ? (
                // Use Swiper for more than 4 items
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="projects-slider w-full max-w-6xl"
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {filteredProjects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative rounded-2xl overflow-hidden group">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={500}
                                    height={300}
                                    className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                    <p className="text-gray-400 text-sm">{project.category}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                // Use the standard grid for 4 or fewer items
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="relative rounded-2xl overflow-hidden group">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={500}
                                height={300}
                                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <p className="text-gray-400 text-sm">{project.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Projects;