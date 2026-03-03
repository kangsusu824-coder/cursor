import { Routes, Route } from 'react-router-dom';
import { Index } from './pages/Index';
import { Detail } from './pages/Detail';
import { About } from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/work/:id" element={<Detail />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
