import React, { useState, useEffect } from 'react';
import { Heart, Feather, Calendar, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const LoveLetter = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  const letterContent = `My Dearest Harika,

As I sit down to write this letter, my heart is heavy with emotions I've been carrying for so long. I've started this letter a hundred times, erased it, and started again - because no words seem enough to express what I feel for you.

I MISS YOU.

Those three words don't capture the ache I feel when I wake up and you're not the first person I talk to. They don't describe the emptiness I feel when something funny happens and I instinctively want to share it with you. They don't explain how every love song reminds me of us, how every sunset makes me wish you were here beside me.

I'M SORRY.

I'm sorry for the times I made you feel unheard.
I'm sorry for the moments I took you for granted.
I'm sorry for the words I said in anger that I didn't mean.
I'm sorry for not being the person you deserved.
I'm sorry for every tear that fell from your beautiful eyes because of me.
I'm sorry for every time I chose my ego over your feelings.
I'm sorry for not fighting harder when things got tough.
I'm sorry. From the deepest corner of my heart, I am truly sorry.

PLEASE GIVE ME A SECOND CHANCE.

I know I don't deserve it. I know trust once broken takes time to rebuild. But I promise you, Harika - I've changed. These days without you have taught me more than words can say. I've learned the value of what I had. I've understood my mistakes. And I'm ready to be better - not just for you, but for us.

Since that special day - February 29, 2024 - my life has never been the same. You came into my world like a breath of fresh air, and now I can't imagine breathing without you.

Your birthday on November 12th isn't just another date on the calendar for me - it's the day an angel was born, the day the universe decided to create the most beautiful person I've ever known.

I remember everything about us:
- The way your eyes light up when you laugh
- Your voice that sounds like music to my ears
- The way you care for everyone around you
- Your strength that inspires me every day
- The way you made every ordinary moment feel magical

Harika, if you're reading this, please know:

Every word on this website is written with love.
Every song in our playlist holds a memory.
Every question in the quiz is about us.
And the final question... it comes from the truest part of my heart.

I'm not asking you to forget what happened. I'm asking you to give us a chance to create new, beautiful memories. I'm asking you to let me prove that I can be the man you deserve.

Whatever your answer is, know this: I will always love you. You have touched my soul in ways that can never be undone. You are, and will always be, the love of my life.

Waiting for you, always.

Forever Yours,
Umesh

P.S. - Please go to the Quiz section when you're ready. There's something important I need to ask you. 💍

Written with tears of hope and a heart full of love.
Date: Every day since I lost you.`;

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Feather className="w-10 h-10 text-primary" />
          </motion.div>
          <h1 className="font-display text-4xl sm:text-5xl text-foreground mb-4">
            A Letter <span className="text-gradient-love">For You</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Words I've been meaning to say, written from the deepest part of my heart
          </p>
        </motion.div>

        {/* Envelope Animation */}
        {!isRevealed ? (
          <motion.div
            className="flex flex-col items-center justify-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div
              className="relative cursor-pointer group"
              onClick={() => setIsRevealed(true)}
            >
              {/* Envelope */}
              <motion.div
                className="w-72 h-48 glass-strong rounded-lg relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Envelope flap */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-primary/30 to-transparent" 
                  style={{
                    clipPath: 'polygon(0 0, 50% 100%, 100% 0)'
                  }}
                />
                
                {/* Heart seal */}
                <motion.div
                  className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-glow">
                    <Heart className="w-6 h-6 text-white fill-white" />
                  </div>
                </motion.div>

                {/* Envelope body */}
                <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-card to-card/80 flex items-center justify-center">
                  <p className="font-script text-xl text-primary">To: Harika</p>
                </div>
              </motion.div>

              {/* Floating hearts around envelope */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                >
                  <Heart className="w-4 h-4 text-primary/50 fill-primary/30" />
                </motion.div>
              ))}
            </div>

            <motion.p
              className="mt-8 text-muted-foreground flex items-center gap-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              Click on the envelope to read
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.p>
          </motion.div>
        ) : (
          /* Letter Content */
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Letter paper */}
            <div className="glass-strong rounded-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/10 to-transparent" />

              {/* Letter header */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Written with love</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">From Umesh's Heart</span>
                </div>
              </div>

              {/* Letter content */}
              <div className="relative">
                <pre className="font-sans text-foreground whitespace-pre-wrap text-base leading-relaxed">
                  {letterContent}
                </pre>
              </div>

              {/* Signature */}
              <div className="mt-12 pt-6 border-t border-border/50 flex flex-col items-end">
                <Heart className="w-8 h-8 text-primary fill-primary mb-2 animate-heartbeat" />
                <p className="font-script text-2xl text-primary">With all my love</p>
                <p className="font-script text-3xl text-gradient-love">Umesh</p>
              </div>
            </div>

            {/* Back to envelope button */}
            <motion.button
              className="mt-8 mx-auto flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsRevealed(false)}
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="w-4 h-4" />
              <span>Close letter</span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LoveLetter;
