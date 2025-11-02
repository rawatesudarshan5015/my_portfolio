import AboutSection from '@/components/AboutSection'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import GitHubSkills from '@/components/GitHubSkills'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <GitHubSkills username="https://github.com/rawatesudarshan5015" />
    </>
  )
}
