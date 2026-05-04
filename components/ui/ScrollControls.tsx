"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollControls() {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  // Handle scroll tracking
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    
    // Show scroll up if scrolled down > 200px
    setShowScrollUp(scrolled > 200);
    
    // Show scroll down if not near bottom (e.g., 100px from bottom)
    setShowScrollDown(scrolled + windowHeight < fullHeight - 100);
    
    // Reset visibility timer
    setIsVisible(true);
  }, []);

  // Handle auto-hide logic
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    let timer: NodeJS.Timeout;
    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 1500); // Auto-hide after 1.5s of inactivity
    };

    window.addEventListener("scroll", resetTimer);
    resetTimer();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", resetTimer);
      clearTimeout(timer);
    };
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToNextSection = () => {
    const sections = Array.from(document.querySelectorAll("section"));
    const currentScroll = window.scrollY;
    
    const nextSection = sections.find((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top > 10; // Threshold to find the next section below viewport
    });

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // If no next section, scroll to bottom
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-24 right-8 z-[110] flex flex-col gap-3">
      <AnimatePresence>
        {isVisible && (
          <>
            {showScrollUp && (
              <motion.button
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 10 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white shadow-xl transition-colors hover:bg-white/20"
                aria-label="Scroll to Top"
              >
                <ChevronUp className="w-6 h-6" />
              </motion.button>
            )}

            {showScrollDown && (
              <motion.button
                initial={{ opacity: 0, scale: 0.5, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: -10 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToNextSection}
                className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white shadow-xl transition-colors hover:bg-white/20"
                aria-label="Scroll to Next Section"
              >
                <ChevronDown className="w-6 h-6" />
              </motion.button>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
