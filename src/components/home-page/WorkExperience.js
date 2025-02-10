import React from "react";
import WorkExperienceItem from "./WorkExperienceItem";
const experiences = [
    {
      date: "NOV 2024 - FEB 2025",
      title: "React JS Developer Intern",
      company: "Millennia Ahead Technology",
      description:
        `Leveraged React, antdesign, and flexchart to design and develop a highly interactive and responsive
dashboard.
Enabled customizable dashboards with intuitive features: add/remove, reorder, and configure tiles. Enhanced user experience with touch-screen and drag-and-drop functionality optimized for mobile devices.`,
    },
  ];

const WorkExperience = () => {
    return (
        <div className="py-28 max-w-screen-xl mx-auto framer-animation" id="work-experience">
      {/* Section Heading */}
      <div className="space-y-6">
        <span className="flex flex-wrap gap-3 items-center mb-16">
          <p className="text-white font-bold text-xl">02</p>
          <h2 className="text-3xl sm:text-4xl text-[#ABABB5] font-bold">Work Experience</h2>
        </span>

        {/* Work Experience Items */}
        {experiences.map((experience, index) => (
          <WorkExperienceItem
            key={index}
            date={experience.date}
            title={experience.title}
            company={experience.company}
            description={experience.description}
          />
        ))}
      </div>
    </div>
    );
};

export default WorkExperience;
