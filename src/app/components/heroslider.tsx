import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSlider = () => {
  const heroImages = ["/hero.png", "/hero2.png", "/hero3.png"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen max-sm:h-[450px] flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={heroImages[index]}
          src={heroImages[index]}
          alt="Hero Image"
          width={400}
          height={400}
          className="mt-8 absolute object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
    </div>
  );
};
export default HeroSlider;
