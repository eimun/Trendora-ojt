import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import Profile from './components/Profile';
import SavedTrends from './components/SavedTrends';
import Dashboard from './components/Dashboard';
import AppLayout from './components/AppLayout';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />

          {/* Authenticated routes with sidebar */}
          <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
          <Route path="/profile" element={<AppLayout><Profile /></AppLayout>} />
          <Route path="/saved-trends" element={<AppLayout><SavedTrends /></AppLayout>} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
