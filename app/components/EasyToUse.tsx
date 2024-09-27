import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const EasyToUse: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className='px-4 sm:px-6 lg:px-20 py-10 sm:py-16 lg:py-20'>
      <h1 className='text-3xl sm:text-4xl text-center font-bold mb-10'>
        Easy to use Web GUI
      </h1>
      <div className='w-full aspect-[16/10] md:aspect-[16/7] bg-secondary-green rounded-lg sm:rounded-xl lg:rounded-3xl relative overflow-hidden'>
        <motion.div 
          className='absolute inset-0 flex items-end justify-center px-10 sm:px-16 lg:px-20 xl:px-32'
          style={{ 
            scale: smoothScale,
            y: smoothY
          }}
        >
          <div className='relative w-full h-[80%] sm:h-[80%] lg:h-[80%]'>
            <Image 
              src='/gui.png' 
              alt='Web GUI' 
              layout='fill'
              objectFit='contain'
              objectPosition='bottom'
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EasyToUse;