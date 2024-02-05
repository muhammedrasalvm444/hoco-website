import ArticlesList from "@/components/ArticlesList";
import BannerSection from "@/components/BannerSection";
import CoursesSection from "@/components/CoursesSection";
import HomeShootingSection from "@/components/HomeShootingSection";
import LearningSection from "@/components/LearningSection";
import ProspectiveSection from "@/components/ProspectiveSection";
import SubjectList from "@/components/SubjectList";
import TestiMony from "@/components/TestiMony";

export default function Home() {
  return (
    <div className="text-inter">
      <BannerSection />
      <HomeShootingSection />
      <CoursesSection />
      <ProspectiveSection />
      <LearningSection />
      <SubjectList />
      <TestiMony />
      <ArticlesList />
    </div>
  );
}
