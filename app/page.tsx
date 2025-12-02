import AboutSection from '@/components/AboutSection'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import GitHubSkills from '@/components/GitHubSkills'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import ContactSection from '@/components/ContactSection'
import SkillSection from '@/components/SkillSection'


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectsSection />
      <ExperienceTimeline />
      <GitHubSkills username="rawatesudarshan5015" />
      <ContactSection />
    </>
  )
}
