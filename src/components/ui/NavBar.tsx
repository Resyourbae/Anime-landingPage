"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setHasScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const menuVariants = {
    closed: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    },
  };

  const menuItemVariants = {
    closed: { 
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    },
  };

  // Falling stars animation component
  const FallingStars = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: -10,
            }}
            animate={{
              y: ['0vh', '100vh'],
              opacity: [1, 0],
              scale: [1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'linear',
            }}
          />
        ))}
      </div>
    );
  };

  const links = [
    { href: "#top", text: "Beranda", delay: 2 },
    { href: "#galeria", text: "Galeri", delay: 2.3 },
    { href: "#personagens", text: "Karakter", delay: 2.6 },
    { href: "#stats", text: "Statistik", delay: 2.9 },
    { href: "#world", text: "World", delay: 3.2 },
    { href: "#moments", text: "Momen", delay: 3.5 },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled ? 'bg-black/50 backdrop-blur-md shadow-lg md:bg-transparent md:backdrop-blur-none md:shadow-none' : 'bg-transparent'
      }`}
    >
      {/* Falling Stars Background */}
      <FallingStars />
      
      <div className="max-w-7xl mx-auto px-4 py-4 relative md:py-6">
        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex items-center justify-center"
          variants={navBarVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2"
          >
            <motion.ul
              className="flex flex-row items-center gap-8 font-medium text-white"
            >
              <motion.img
                src="AyserNii-Logo.png"
                className="h-11 cursor-pointer mr-4"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              />
              {links.map((link) => (
                <motion.li
                  key={link.href}
                  className="relative px-2 py-1 cursor-pointer group"
                  variants={itemVariants}
                  transition={{ delay: link.delay }}
                >
                  <a href={link.href} className="relative z-10 hover:text-amber-300/90 transition-colors">
                    {link.text}
                  </a>
                  <motion.div
                    className="absolute inset-0 w-full h-full bg-white/0 group-hover:bg-white/10 rounded-full -z-0 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center">
          <motion.img
            src="AyserNii-Logo.png"
            className="h-11 cursor-pointer"
            variants={itemVariants}
          />
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white w-12 h-12 flex items-center justify-center rounded-lg bg-black/60 backdrop-blur-md border border-white/20 hover:bg-black/80 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            title={isOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-x-0 top-[72px] bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-lg border-t border-white/10 overflow-hidden"
            >
              {/* Falling Stars in Mobile Menu */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={`menu-star-${i}`}
                    className="absolute w-[2px] h-[2px] bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: -10,
                    }}
                    animate={{
                      y: ['0vh', '100vh'],
                      opacity: [1, 0],
                      scale: [1, 0],
                    }}
                    transition={{
                      duration: Math.random() * 2 + 1,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: 'linear',
                    }}
                  />
                ))}
              </div>
              
              <div className="max-w-7xl mx-auto px-4 py-6 relative">
                <motion.ul 
                  className="flex flex-col gap-4"
                  variants={menuVariants}
                >
                  {links.map((link, index) => (
                    <motion.li
                      key={link.href}
                      variants={menuItemVariants}
                      className="text-white text-lg font-medium"
                      style={{ 
                        originX: 0
                      }}
                    >
                      <motion.a
                        href={link.href}
                        className="relative block px-4 py-3 rounded-lg hover:bg-black/40 transition-all hover:translate-x-2 hover:text-purple-300 group"
                        onClick={() => setIsOpen(false)}
                        whileHover={{
                          scale: 1.02,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {link.text}
                        <motion.div
                          className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100"
                          initial={false}
                        >
                          {[...Array(5)].map((_, i) => (
                            <motion.span
                              key={i}
                              className="absolute w-[2px] h-[2px] bg-purple-300 rounded-full"
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                              }}
                              animate={{
                                scale: [0, 1.5, 0],
                                opacity: [0, 1, 0],
                              }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: Math.random() * 0.5,
                                ease: "easeInOut",
                              }}
                            />
                          ))}
                        </motion.div>
                      </motion.a>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}