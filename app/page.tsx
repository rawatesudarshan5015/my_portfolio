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
    <div id ="hero"><HeroSection /></div>
      
      <div id = "about"><AboutSection /></div>
      <section id = "skill"><SkillSection /></section>
      <section id = "projects"><ProjectsSection /></section>
      <section id = "experience"><ExperienceTimeline /></section>
      <section id = "github"><GitHubSkills username="rawatesudarshan5015" /></section>

      <section id = "contact"><ContactSection /></section>
      
      
      
      
      
    </>
  )
}
