import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Calendar, Mail, Music, HelpCircle, Image, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const HomePage = () => {
  const UMESH_IMAGE = 'https://customer-assets.emergentagent.com/job_93925170-a54d-46d9-9fdc-793833f769d3/artifacts/hj5x3zmp_umesh1.jpg';
  const HARIKA_IMAGE = 'https://customer-assets.emergentagent.com/job_93925170-a54d-46d9-9fdc-793833f769d3/artifacts/5ndkbali_Gemini_Generated_Image_myrci8myrci8myrc.png';

  const features = [
    {
      icon: Calendar,
      title: 'Valentine Week',
      description: 'Explore all the special days - Rose Day, Kiss Day, Hug Day & more',
      path: '/valentine-days',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Mail,
      title: 'Love Letter',
      description: 'A heartfelt letter from my heart to yours',
      path: '/love-letter',
      color: 'from-rose-500 to-red-500'
    },
    {
      icon: Music,
      title: 'Our Playlist',
      description: 'Telugu love songs that remind me of you',
      path: '/playlist',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: HelpCircle,
      title: 'Quiz Time',
      description: 'How well do you know me? Plus a special question...',
      path: '/quiz',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Image,
      title: 'Our Gallery',
      description: 'Beautiful memories captured together',
      path: '/gallery',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 relative">
      {/* Hero Section */}
      <motion.section
        className="max-w-6xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Special for Harika</span>
          </motion.div>
          
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
            Dear <span className="text-gradient-love">Harika</span>,
          </h1>
          <p className="font-script text-2xl sm:text-3xl text-primary mb-6">
            I Miss You &amp; I&apos;m Sorry
          </p>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            This website is my way of saying everything I couldn&apos;t say in person. 
            Every pixel, every word, every song - it&apos;s all for you. 💕
          </p>
        </div>

        {/* Couple Photos */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
          <motion.div
            className="relative"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-romantic bg-muted">
              <img
                src={UMESH_IMAGE}
                alt="Umesh"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 30%' }}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary rounded-full px-3 py-1">
              <span className="text-sm font-medium text-primary-foreground">Umesh</span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, type: "spring" }}
          >
            <Heart className="w-12 h-12 text-primary fill-primary animate-heartbeat" />
            <span className="font-script text-xl text-primary mt-2">Forever</span>
            <span className="font-script text-lg text-pink-400 mt-1">Bava & Maradalu 💕</span>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-romantic bg-muted">
              <img
                src={HARIKA_IMAGE}
                alt="Harika"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: 'center 15%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary rounded-full px-3 py-1">
              <span className="text-sm font-medium text-primary-foreground">Harika</span>
            </div>
          </motion.div>
        </div>

        {/* Special Dates */}
        <motion.div
          className="glass rounded-2xl p-6 max-w-lg mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <h3 className="font-display text-xl text-foreground text-center mb-4">
            Our Special Dates 💕
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Your Birthday</p>
              <p className="font-display text-lg text-primary">12th November 2006</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Our Memorable Day</p>
              <p className="font-display text-lg text-primary">29th February 2024</p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Features Grid */}
      <motion.section
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="font-display text-2xl sm:text-3xl text-foreground text-center mb-8">
          Explore Our <span className="text-gradient-love">Love Story</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.path} variants={itemVariants}>
                <Link to={feature.path}>
                  <Card className="valentine-card glass p-6 h-full flex flex-col group cursor-pointer border-border/50 hover:border-primary/50">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm flex-1">{feature.description}</p>
                    <div className="flex items-center gap-2 mt-4 text-primary group-hover:gap-3 transition-all duration-300">
                      <span className="text-sm font-medium">Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Bottom CTA */}
      <motion.section
        className="max-w-2xl mx-auto mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="glass rounded-2xl p-8">
          <Heart className="w-12 h-12 text-primary fill-primary mx-auto mb-4 animate-heartbeat" />
          <h3 className="font-display text-2xl text-foreground mb-4">
            Ready to Take the Quiz?
          </h3>
          <p className="text-muted-foreground mb-6">
            I have some questions for you... and one very special question at the end 💍
          </p>
          <Link to="/quiz">
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-glow hover:shadow-romantic transition-all duration-300">
              <HelpCircle className="w-5 h-5 mr-2" />
              Take the Quiz
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
