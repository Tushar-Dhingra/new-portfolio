import Hero from "@/components/home-page/Hero";
import CaseStudy from "@/components/home-page/CaseStudy";
import Collaborate from "@/components/home-page/Collaborate";
import WorkExperience from "@/components/home-page/WorkExperience";
import SkillGraph from "@/components/ui/SkillGraph";

export default function Home() {
  return (
    <div className='bg-[#060608] px-5'>
      <Hero />
      <CaseStudy />
      <WorkExperience />
      <SkillGraph />
      <Collaborate />
    </div>
  );
}
