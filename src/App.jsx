import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/portfolio">Go to Portfolio</Link>
    </div>
  )
}

function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  )
}
