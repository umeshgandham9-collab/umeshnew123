import React, { useState } from 'react';
import { Heart, HelpCircle, CheckCircle, XCircle, Sparkles, Star, ArrowRight, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import confetti from 'canvas-confetti';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [proposalAnswer, setProposalAnswer] = useState(null);

  const questions = [
    {
      question: "What is Umesh's favorite color?",
      options: ['Blue', 'Black', 'Red', 'Green'],
      correct: 1,
      hint: 'Think about what he often wears...'
    },
    {
      question: 'When is our memorable date?',
      options: ['January 14, 2024', 'February 29, 2024', 'March 15, 2024', 'April 1, 2024'],
      correct: 1,
      hint: 'It was a leap year special day...'
    },
    {
      question: "What is Umesh's favorite food?",
      options: ['Biryani', 'Pizza', 'Noodles', 'Dosa'],
      correct: 0,
      hint: 'A classic Indian dish with rice and spices...'
    },
    {
      question: 'What does Umesh love most about Harika?',
      options: ['Her smile', 'Her eyes', 'Her caring nature', 'Everything about her'],
      correct: 3,
      hint: 'This one is easy! 💕'
    },
    {
      question: "What is Umesh's dream?",
      options: ['To travel the world', 'To be successful', 'To spend life with Harika', 'To become rich'],
      correct: 2,
      hint: 'It involves someone very special...'
    },
    {
      question: 'How does Umesh feel when he sees Harika?',
      options: ['Happy', 'Nervous', 'Complete', 'All of the above'],
      correct: 3,
      hint: 'Love brings many emotions...'
    },
    {
      question: "What would Umesh do for Harika?",
      options: ['Cook for her', 'Wait forever', 'Cross oceans', 'All of the above and more'],
      correct: 3,
      hint: 'True love knows no limits...'
    },
    {
      question: 'When is Umesh\'s birthday?',
      options: ['January 9, 2004', 'February 9, 2004', 'January 19, 2004', 'March 9, 2004'],
      correct: 0,
      hint: 'A special day in January...'
    }
  ];

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizComplete(true);
      }
    }, 1500);
  };

  const triggerConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff6b9d', '#ff85a2', '#ff4d7d']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff6b9d', '#ff85a2', '#ff4d7d']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  };

  const handleProposalAnswer = (answer) => {
    setProposalAnswer(answer);
    if (answer === 'yes') {
      triggerConfetti();
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizComplete(false);
    setProposalAnswer(null);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <HelpCircle className="w-8 h-8 text-primary" />
          </motion.div>
          <h1 className="font-display text-4xl text-foreground mb-2">
            How Well Do You <span className="text-gradient-love">Know Me?</span>
          </h1>
          <p className="text-muted-foreground">
            {quizComplete ? 'Quiz Complete! But there\'s one more question...' : `Question ${currentQuestion + 1} of ${questions.length}`}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!quizComplete ? (
            /* Quiz Questions */
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                  <span>Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
              </div>

              {/* Question Card */}
              <Card className="glass-strong p-8 rounded-2xl border-border/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">{currentQuestion + 1}</span>
                  </div>
                  <div>
                    <h2 className="font-display text-xl text-foreground mb-2">
                      {questions[currentQuestion].question}
                    </h2>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      {questions[currentQuestion].hint}
                    </p>
                  </div>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {questions[currentQuestion].options.map((option, index) => {
                    const isCorrect = index === questions[currentQuestion].correct;
                    const isSelected = selectedAnswer === index;
                    
                    let bgClass = 'glass hover:bg-primary/10';
                    if (showResult) {
                      if (isCorrect) bgClass = 'bg-green-500/20 border-green-500';
                      else if (isSelected) bgClass = 'bg-red-500/20 border-red-500';
                    }

                    return (
                      <motion.button
                        key={index}
                        className={`p-4 rounded-xl border border-border/50 text-left transition-all duration-300 ${bgClass} ${
                          showResult ? 'pointer-events-none' : 'cursor-pointer'
                        }`}
                        onClick={() => !showResult && handleAnswer(index)}
                        whileHover={{ scale: showResult ? 1 : 1.02 }}
                        whileTap={{ scale: showResult ? 1 : 0.98 }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-foreground">{option}</span>
                          {showResult && isCorrect && (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          )}
                          {showResult && isSelected && !isCorrect && (
                            <XCircle className="w-5 h-5 text-red-500" />
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Score */}
                <div className="mt-6 flex items-center justify-center gap-2">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  <span className="text-foreground">Score: {score}/{questions.length}</span>
                </div>
              </Card>
            </motion.div>
          ) : proposalAnswer === null ? (
            /* Final Proposal Question */
            <motion.div
              key="proposal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              {/* Score Summary */}
              <Card className="glass-strong p-6 rounded-2xl mb-8">
                <div className="flex items-center justify-center gap-4">
                  <Star className="w-8 h-8 text-primary fill-primary" />
                  <div>
                    <p className="text-muted-foreground">Your Score</p>
                    <p className="font-display text-3xl text-foreground">{score}/{questions.length}</p>
                  </div>
                  <Star className="w-8 h-8 text-primary fill-primary" />
                </div>
                <p className="mt-4 text-muted-foreground">
                  {score >= 6 ? "Amazing! You know me so well! 💕" : 
                   score >= 4 ? "Good job! We still have so much to learn about each other! 💕" :
                   "Let's make more memories together so you can know me better! 💕"}
                </p>
              </Card>

              {/* THE Question */}
              <Card className="glass-strong p-8 sm:p-12 rounded-2xl border-primary/30 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-primary" />
                
                <motion.div
                  className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-12 h-12 text-primary fill-primary" />
                </motion.div>

                <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-4">
                  Harika, I have one final question...
                </h2>
                
                <p className="font-script text-3xl sm:text-4xl text-gradient-love mb-8">
                  Will You Marry Me? 💍
                </p>

                <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                  I know I've made mistakes. I know I need to earn your trust again. 
                  But I promise to spend every day proving that I'm worthy of your love. 
                  Will you give me that chance?
                </p>

                {/* Answer buttons with special hover effects */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    className="proposal-btn px-12 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg"
                    onClick={() => handleProposalAnswer('yes')}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: '0 0 40px rgba(255, 107, 157, 0.6)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-2">
                      <Heart className="w-5 h-5 fill-white" />
                      Yes, I Will! 
                      <Heart className="w-5 h-5 fill-white" />
                    </span>
                  </motion.button>

                  <motion.button
                    className="proposal-btn px-12 py-4 rounded-2xl glass border border-border/50 text-foreground font-medium text-lg"
                    onClick={() => handleProposalAnswer('maybe')}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(255, 107, 157, 0.1)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Let Me Think...
                  </motion.button>
                </div>
              </Card>
            </motion.div>
          ) : (
            /* Response to proposal */
            <motion.div
              key="response"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <Card className="glass-strong p-8 sm:p-12 rounded-2xl">
                {proposalAnswer === 'yes' ? (
                  <>
                    <motion.div
                      className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Heart className="w-16 h-16 text-primary fill-primary" />
                    </motion.div>
                    <h2 className="font-display text-4xl text-foreground mb-4">
                      You Said <span className="text-gradient-love">YES!</span>
                    </h2>
                    <p className="font-script text-2xl text-primary mb-6">
                      This is the happiest moment of my life! 💕
                    </p>
                    <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                      Harika, you've made me the luckiest person in the world. 
                      I promise to love you, cherish you, and make you happy every single day of our lives together.
                      This is just the beginning of our beautiful forever! 💍
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ 
                            y: [0, -10, 0],
                            scale: [1, 1.2, 1]
                          }}
                          transition={{ 
                            duration: 1,
                            delay: i * 0.2,
                            repeat: Infinity
                          }}
                        >
                          <Heart className="w-8 h-8 text-primary fill-primary" />
                        </motion.div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <motion.div
                      className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Heart className="w-12 h-12 text-primary" />
                    </motion.div>
                    <h2 className="font-display text-3xl text-foreground mb-4">
                      I Understand, Harika 💕
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto mb-6">
                      Take all the time you need. I'll be waiting for you, always. 
                      No matter how long it takes, my love for you will never change.
                      I'll keep proving myself every day until you're ready.
                    </p>
                    <p className="font-script text-xl text-primary">
                      I'll wait for you forever... 🌹
                    </p>
                  </>
                )}

                <Button
                  className="mt-8 glass hover:bg-primary/20"
                  onClick={resetQuiz}
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Take Quiz Again
                </Button>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Quiz;
