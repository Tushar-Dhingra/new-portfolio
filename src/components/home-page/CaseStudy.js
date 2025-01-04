
import CaseStudyCard from "./CaseStudyCard";

// Main Component
const CaseStudy = () => {
    const caseStudies = [
        {
            imgSrc: "/assets/img/caseImg-1.jpeg",
            title: "Finance Tracker",
            description: "Web App",
        },
        {
            imgSrc: "/assets/img/caseImg-4.jpeg",
            title: "Recipe App",
            description: "Recipe Website",
        },
        {
            imgSrc: "/assets/img/caseImg-3.jpeg",
            title: "Hotel Flow",
            description: "MERN Website",
        },
        {
            imgSrc: "/assets/img/caseImg-2.jpeg",
            title: "Portfolio",
            description: "NextJS Portfolio",
        }
    ];

    return (
        <div className="max-w-screen-xl mx-auto py-12 md:py-36" id="case-studies">
            {/* Heading */}
            <div className="flex flex-wrap gap-3 items-center mb-16">
                <p className="text-white font-bold text-xl">01</p>
                <h2 className="text-3xl sm:text-4xl text-[#ABABB5] font-bold">
                    Projects
                </h2>
            </div>

            {/* Case Study Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                {caseStudies.map((study, index) => (
                    <CaseStudyCard
                        key={index}
                        imgSrc={study.imgSrc}
                        title={study.title}
                        description={study.description}
                    />
                ))}
            </div>

           
        </div>
    );
};

export default CaseStudy;
