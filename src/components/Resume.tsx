import React from 'react';
import { workExperience, education } from '@/data/resumeData';

const ResumeItem = ({ icon: Icon, title, date, description }) => (
    <div className="flex items-start gap-4 py-8 p-4 rounded-xl border bg-primary-dark border-primary shadow-xl">
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#0F1228] text-white">
            <Icon size={20} />
        </div>
        <div>
            {/* Conditional rendering of the date */}
            <div className="flex flex-col mb-3">
                {date && (
                    <span className="text-gray-400 mb-2 text-sm bg-[#0F1228] rounded-lg px-2 py-1 self-start whitespace-nowrap">
                        {date}
                    </span>
                )}
                <h3 className="text-2xl font-semibold">{title}</h3>
            </div>
            <p className="text-gray-300 text-base">{description}</p>
        </div>
    </div>
);

const Resume = ({id}) => {
    return (
        <section id={id} className="flex flex-col md:flex-row gap-8 mt-16 px-4 md:px-0">
            {/* My work experience */}
            <div className="flex-1">
                <h2 className="text-[38px] font-bold mb-6">My work <span className="text-primary">experience</span></h2>
                <div className="flex flex-col gap-6">
                    {workExperience.map((item, index) => (
                        <ResumeItem key={index} {...item} />
                    ))}
                </div>
            </div>

            {/* My education */}
            <div className="flex-1">
                <h2 className="text-[38px] font-bold mb-6">My <span className="text-primary">education</span></h2>
                <div className="flex flex-col gap-6">
                    {education.map((item, index) => (
                        <ResumeItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Resume;