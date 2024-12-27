"use client";

import * as React from "react";
import { Lamp } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, useAnimation } from "motion/react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const controls = useAnimation();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    controls.start({
      rotate: [-8, 8, -8, 0],
      transition: { duration: 0.5 },
    });
  };

  return (
    <button className="group" onClick={toggleTheme}>
      <motion.div animate={controls}>
        <Lamp className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all group-hover:text-foreground" />
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
