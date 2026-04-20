import React from 'react'
import Header from './components/Header'
import { AuraBackground, BentoGrid } from './components/BentoGrid'
import HeroTile from './components/Hero'
import JourneyWidget from './components/widgets/JourneyWidget'
import SkillsPulse from './components/widgets/SkillsPulse'
import StatusCard from './components/widgets/StatusCard'
import ProjectsList from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <AuraBackground />
      <Header />
      <main style={{ paddingTop: '100px', paddingBottom: '4rem' }}>
        <BentoGrid>
          <HeroTile />
          <StatusCard />
          <SkillsPulse />
          <JourneyWidget />
          <ProjectsList />
        </BentoGrid>
      </main>
      <Footer />
    </>
  )
}

export default App
