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
    <div className="w-full mb-5 h-screen max-sm:h-[300px] max-sm:pb-4 flex items-center justify-center overflow-auto">
      <AnimatePresence>
        <motion.img
          key={heroImages[index]}
          src={heroImages[index]}
          alt="Hero Image"
          width={400}
          height={400}
          className="mt-8 max-sm:w-[200px] max-sm:h-[200px] absolute object-cover"
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
