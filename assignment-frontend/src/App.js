import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import TeacherPage from './pages/TeacherPage';
import StudentPage from './pages/StudentPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [role, setRole] = useState(null);

  return (
    <Router>
      <div>
        <Routes>
          {/* Login Route */}
          <Route path="/" element={<LoginPage setRole={setRole} />} />

          {/* Admin Route */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute role={role} requiredRole="admin">
                <AdminPage />
              </ProtectedRoute>
            }
          />

          {/* Teacher Route */}
          <Route
            path="/teacher"
            element={
              <ProtectedRoute role={role} requiredRole="teacher">
                <TeacherPage />
              </ProtectedRoute>
            }
          />

          {/* Student Route */}
          <Route
            path="/student"
            element={
              <ProtectedRoute role={role} requiredRole="student">
                <StudentPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
