import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard';
import Assistant from './pages/Assistant';
import Learn from './pages/Learn';
import LessonDetail from './pages/LessonDetail';
import Tools from './pages/Tools';
import Prompts from './pages/Prompts';
import UseCases from './pages/UseCases';
import Security from './pages/Security';
import Laboratory from './pages/Laboratory';
import Glossary from './pages/Glossary';
import Quiz from './pages/Quiz';
import History from './pages/History';
import Admin from './pages/Admin';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="asistente" element={<Assistant />} />
          <Route path="aprender" element={<Learn />} />
          <Route path="aprender/:id" element={<LessonDetail />} />
          <Route path="herramientas" element={<Tools />} />
          <Route path="prompts" element={<Prompts />} />
          <Route path="casos" element={<UseCases />} />
          <Route path="seguridad" element={<Security />} />
          <Route path="laboratorio" element={<Laboratory />} />
          <Route path="glosario" element={<Glossary />} />
          <Route path="evaluacion" element={<Quiz />} />
          <Route path="historial" element={<History />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
