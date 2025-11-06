import AboutSection from '@/components/AboutSection'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import GitHubSkills from '@/components/GitHubSkills'
import ResumeSection from '@/components/ResumeSection'
import ExperienceTimeline from '@/components/ExperienceTimeline'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <GitHubSkills username="rawatesudarshan5015" />
      <ResumeSection />
      <ExperienceTimeline />
    </>
  )
}
