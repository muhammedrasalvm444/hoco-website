import BannerSection from "@/components/BannerSection";
import CoursesSection from "@/components/CoursesSection";
import HomeShootingSection from "@/components/HomeShootingSection";
import LearningSection from "@/components/LearningSection";
import ProspectiveSection from "@/components/ProspectiveSection";

export default function Home() {
  return (
    <div className="text-inter">
      <BannerSection />
      <HomeShootingSection />
      <CoursesSection />
      <ProspectiveSection />
      <LearningSection />
    </div>
  );
}
