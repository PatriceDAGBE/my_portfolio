import React from 'react';
import { FaChartBar, FaLaptopCode, FaBrain, FaCloud } from 'react-icons/fa';

export const myServices = [
    {
        icon: FaChartBar,
        title: "Data Science",
        description: "Turning raw data into actionable insights.",
    },
    {
        icon: FaLaptopCode,
        title: "Software Development",
        description: "Building scalable and intuitive web and mobile applications.",
    },
    {
        icon: FaBrain,
        title: "Artificial Intelligence",
        description: "Developing intelligent systems that learn and reason.",
    },
    {
        icon: FaCloud,
        title: "Cloud Computing",
        description: "Deploying applications and data on cloud platforms.",
    },
];

const Services = () => {
    return (
        <section id="services" className="flex flex-col w-full items-center mt-16">
            <h2 className="text-[38px] font-bold mb-14 text-center">Empowering my work with <br /><span className="text-primary">data-driven</span> solutions</h2>
            
            <div className="flex justify-center gap-8 w-full md:gap-16 mb-6">
                {myServices.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                        <div key={index} className="flex flex-col items-center text-center">
                            <IconComponent size={48} className="text-primary mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;