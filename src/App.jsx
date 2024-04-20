import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import MainLayout from './layouts/MainLayout';
import BaseLayout from './layouts/BaseLayout';
import NotFoundPage from './pages/NotFoundPage';
import AdminPage from './pages/AdminPage';
import LibraryPage from './pages/LibraryPage';
import RiskScenariosPage from './pages/RiskScenariosPage';
import AssessmentPage from './pages/AssessmentPage';
import Reportspage from './pages/Reportspage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import './App.css';
import ChatsPage from './pages/ChatsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="jobs" element={<JobsPage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="library" element={<LibraryPage />} />
          <Route path="riskscenarios" element={<RiskScenariosPage />} />
          <Route path="assessment" element={<AssessmentPage />} />
          <Route path="reports" element={<Reportspage />} />
          <Route path="chats" element={<ChatsPage />} />
        </Route>
        <Route path="/" element={<BaseLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;