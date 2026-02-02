import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ValentineDays from './pages/ValentineDays';
import LoveLetter from './pages/LoveLetter';
import Playlist from './pages/Playlist';
import Quiz from './pages/Quiz';
import Gallery from './pages/Gallery';
import ParticleEffect from './components/ParticleEffect';
import Navigation from './components/Navigation';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const auth = localStorage.getItem('harika_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('harika_auth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('harika_auth');
  };

  // Cursor click particle effect
  const handleClick = useCallback((e) => {
    const colors = ['#ff6b9d', '#ff85a2', '#ffa4b6', '#ff4d7d', '#ff3366', '#ff99aa', '#ffb3c1'];
    const newParticles = [];
    
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 12 + 4,
        velocityX: (Math.random() - 0.5) * 15,
        velocityY: (Math.random() - 0.5) * 15 - 5,
        life: 1
      });
    }
    
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  // Animate particles
  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles(prev => 
        prev
          .map(p => ({
            ...p,
            x: p.x + p.velocityX,
            y: p.y + p.velocityY + 2,
            velocityY: p.velocityY + 0.5,
            life: p.life - 0.02
          }))
          .filter(p => p.life > 0)
      );
    }, 30);

    return () => clearInterval(interval);
  }, [particles.length]);

  return (
    <Router basename="/">
      <div className="min-h-screen relative" onClick={handleClick}>
        {/* Dark Flow Background */}
        <div className="dark-flow-bg" />
        
        {/* Click Particles */}
        {particles.map(p => (
          <div
            key={p.id}
            className="fixed pointer-events-none z-50"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              borderRadius: '50%',
              opacity: p.life,
              transform: 'translate(-50%, -50%)',
              boxShadow: `0 0 ${p.size}px ${p.color}`,
            }}
          />
        ))}

        {/* Background Particle Animation */}
        <ParticleEffect />
        
        <Routes>
          <Route 
            path="/login" 
            element={
              isAuthenticated ? 
                <Navigate to="/" replace /> : 
                <LoginPage onLogin={handleLogin} />
            } 
          />
          <Route 
            path="/" 
            element={
              isAuthenticated ? 
                <>
                  <Navigation onLogout={handleLogout} />
                  <HomePage />
                </> : 
                <Navigate to="/login" replace />
            } 
          />
          <Route 
            path="/valentine-days" 
            element={
              isAuthenticated ? 
                <>
                  <Navigation onLogout={handleLogout} />
                  <ValentineDays />
                </> : 
                <Navigate to="/login" replace />
            } 
          />
          <Route 
            path="/love-letter" 
            element={
              isAuthenticated ? 
                <>
                  <Navigation onLogout={handleLogout} />
                  <LoveLetter />
                </> : 
                <Navigate to="/login" replace />
            } 
          />
          <Route 
            path="/playlist" 
            element={
              isAuthenticated ? 
                <>
                  <Navigation onLogout={handleLogout} />
                  <Playlist />
                </> : 
                <Navigate to="/login" replace />
            } 
          />
          <Route 
            path="/quiz" 
            element={
              isAuthenticated ? 
                <>
                  <Navigation onLogout={handleLogout} />
                  <Quiz />
                </> : 
                <Navigate to="/login" replace />
            } 
          />
          <Route 
            path="/gallery" 
            element={
              isAuthenticated ? 
                <>
                  <Navigation onLogout={handleLogout} />
                  <Gallery />
                </> : 
                <Navigate to="/login" replace />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
