
import CaseStudyCard from "./CaseStudyCard";

// Main Component
const CaseStudy = () => {
    const caseStudies = [
        {
            imgSrc: "/assets/img/caseImg-1.png",
            title: "Ticketr",
            description: "Ticket booking platform with real-time seat management and payments integration.",
            link: "https://nextjs-ticket-marketplace.vercel.app/",
        },
        {
            imgSrc: "/assets/img/caseImg-2.png",
            title: "Riderr",
            description: "Uber-like app with enhanced UX, integrated wallet system, built for scalability, ride management, and real-time tracking.",
            link: "https://m-clone-uber.netlify.app/",
        },
        {
            imgSrc: "/assets/img/caseImg-3.png",
            title: "Bookr",
            description: "Hotel and Airbnb booking platform offering features like listing hotels, user ratings, and reviews.",
            link: "https://hotel-flow.onrender.com/",
        },
        {
            imgSrc: "/assets/img/caseImg-4.png",
            title: "Recipe App",
            description: "Full-stack recipe app with user authentication, recipe management, and social features.",
            link: "https://recipesz-app.netlify.app/",
        },
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
                        link={study.link}
                    />
                ))}
            </div>

           
        </div>
    );
};

export default CaseStudy;
