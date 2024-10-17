
import './App.css'
import { Nev } from './components/nevber'
import {Dashboard} from './pages/dashboard'
import Incidents from './pages/incidents'
import Locations from './pages/locations'
import Activities from './pages/activities'
import Documents from './pages/documents'
import CypherAI from './pages/cypheraI'
import NewIncident from './pages/subpage.jsx/newincident'
import Error from './pages/error'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (

    <BrowserRouter>
    <Nev/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="Incidents" element={<Incidents/>} />
        <Route path="Locations" element={<Locations/>} />
        <Route path="Activities" element={<Activities/>} />
        <Route path="Documents" element={<Documents/>} />
        <Route path="CypherAI" element={<CypherAI/>} />
        <Route path="NewIncident" element={<NewIncident/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>

      

  )
}

export default App

