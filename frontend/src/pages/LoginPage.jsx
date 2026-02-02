import React, { useState, useEffect, useMemo } from 'react';
import { Heart, Lock, Eye, EyeOff, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';

const LoginPage = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [animationPhase, setAnimationPhase] = useState('toys'); // 'toys', 'login'
  const [isShaking, setIsShaking] = useState(false);

  const CORRECT_PASSWORD = 'Harika@gandham';
  
  // Couple toys image
  const COUPLE_TOYS_IMAGE = 'https://customer-assets.emergentagent.com/job_forever-harika/artifacts/hjt3dzmc_Gemini_Generated_Image_mkpvo9mkpvo9mkpv.png';

  // Pre-generate random values for hearts to avoid re-renders
  const heartPositions = useMemo(() => 
    [...Array(20)].map(() => ({
      x: Math.random() * 100,
      size: Math.random() * 30 + 10,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    })), []
  );

  useEffect(() => {
    // Show toys for 3 seconds, then reveal login form
    const timer = setTimeout(() => {
      setAnimationPhase('login');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      onLogin();
    } else {
      setError('Wrong password! Hint: Think about someone special... 💕');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {heartPositions.map((heart, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${heart.x}%` }}
            initial={{ 
              y: '100vh',
              opacity: 0.3 
            }}
            animate={{ 
              y: -100,
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: heart.duration,
              repeat: Infinity,
              delay: heart.delay
            }}
          >
            <Heart 
              className="text-primary/30 fill-primary/20" 
              style={{ 
                width: heart.size,
                height: heart.size
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="w-full max-w-md relative z-10">
        <AnimatePresence mode="wait">
          {/* Phase 1: Couple Toys Animation */}
          {animationPhase === 'toys' && (
            <motion.div
              key="toys"
              className="flex flex-col items-center justify-center h-[550px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              {/* Big Couple Toys Image */}
              <motion.div
                className="relative"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  duration: 1
                }}
              >
                <img
                  src={COUPLE_TOYS_IMAGE}
                  alt="Couple Toys"
                  className="w-80 h-auto rounded-3xl shadow-2xl"
                  style={{ 
                    filter: 'drop-shadow(0 0 40px rgba(255, 107, 157, 0.6))'
                  }}
                />
                
                {/* Floating hearts around image */}
                <motion.div
                  className="absolute -top-6 -left-6"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 15, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-10 h-10 text-primary fill-primary" />
                </motion.div>
                <motion.div
                  className="absolute -top-4 -right-4"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, -15, 0]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                >
                  <Heart className="w-8 h-8 text-pink-400 fill-pink-400" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Sparkles className="w-12 h-12 text-primary" />
                </motion.div>
              </motion.div>

              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="font-script text-3xl text-gradient-love mb-2">
                  Umesh & Harika
                </p>
                <p className="text-muted-foreground text-lg">
                  Opening our love story... 💕
                </p>
              </motion.div>

              {/* Loading dots */}
              <motion.div 
                className="flex gap-2 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 rounded-full bg-primary"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Phase 2: Login Form */}
          {animationPhase === 'login' && (
            <motion.div
              key="login"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              {/* Glassmorphism Login Card */}
              <motion.div
                className={`glass-strong rounded-3xl p-8 relative overflow-hidden ${isShaking ? 'animate-shake' : ''}`}
                style={{
                  animation: isShaking ? 'shake 0.5s ease-in-out' : 'none'
                }}
              >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
                
                {/* Header */}
                <div className="text-center mb-8 relative z-10">
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="w-10 h-10 text-primary fill-primary" />
                  </motion.div>
                  <h1 className="font-display text-3xl text-foreground mb-2">
                    Welcome, <span className="text-gradient-love">Harika</span>
                  </h1>
                  <p className="text-muted-foreground font-script text-xl">
                    This is for you, from Umesh with love 💕
                  </p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Lock className="w-4 h-4 text-primary" />
                      Enter the Secret Key
                    </label>
                    <div className="relative">
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setError('');
                        }}
                        placeholder="Enter password to unlock my heart..."
                        className="w-full h-12 bg-muted/50 border-border/50 focus:border-primary focus:ring-primary/30 pr-12 rounded-xl"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-red-400"
                      >
                        {error}
                      </motion.p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:shadow-glow"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Unlock Our Story
                  </Button>
                </form>

                {/* Hint */}
                <div className="mt-6 text-center relative z-10">
                  <p className="text-xs text-muted-foreground">
                    💡 Hint: Your name + &quot;@&quot; + something close to your heart
                  </p>
                </div>
              </motion.div>

              {/* Bottom decoration */}
              <div className="text-center mt-6">
                <p className="font-script text-lg text-muted-foreground">
                  Made with 💕 by Umesh
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Custom shake animation style */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
