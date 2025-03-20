import './css/App.css'
import { NavBar } from './components/NavBar'
import { Background } from './components/Background'
import { Hero } from './components/Hero'

export function App() {

  return (
    <>
      <Background />
      <NavBar />
      <Hero />
    </>
  )
}
