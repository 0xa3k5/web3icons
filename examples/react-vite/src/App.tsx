import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StaticIcons } from './pages/StaticIcons'
import { DynamicIcons } from './pages/DynamicIcons'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StaticIcons />} />
        <Route path="/dynamic" element={<DynamicIcons />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
