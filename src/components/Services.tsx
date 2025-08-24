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
        <section className="flex flex-col bg-yellow-400 w-full items-center mt-16">
            <h2 className="text-4xl font-bold mb-2 text-center">Empowering my work with <span className="text-primary">data-driven</span> solutions</h2>
            <p className="text-xl text-center mb-12">I specialize in turning complex information into simple, powerful tools.</p>
            
            <div className="flex justify-center gap-8 w-full md:gap-16">
                {myServices.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                        <div key={index} className="flex flex-col items-center text-center w-52">
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