"use client";
import { motion } from "framer-motion";

export default function Banner() {
  const letters = "Frieren".split("");

  return (
    <div className="flex-1 relative h-full overflow-hidden flex flex-col justify-center items-center">
      {/* Gradiente de fundo escuro para a imagem */}
      <div className="absolute bottom-0 left-0 w-full h-70 bg-gradient-to-t from-black/100 to-transparent pointer-events-none z-2" />

      {/* Animação da imagem */}
      <motion.img
        src="frieren.png"
        className="absolute w-[80%] md:w-[28%] bottom-0 left-[50%] -translate-x-1/2 scale-260 z-1"
        initial={{ y: 200, opacity: 0, filter: "blur(20px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.4,
          delay: 1,
          type: "spring",
          stiffness: 20,
        }}
      />

      {/* Animação do texto */}
      <h1 className="flex flex-wrap justify-center text-[12rem] sm:text-[15rem] md:text-[18rem] lg:text-[22rem] font-bold text-white text-shadow-black relative w-full h-screen">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ y: -200, opacity: 0, filter: "blur(20px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
              delay: i * 0.2,
              type: "spring",
              stiffness: 10,
            }}
            className="leading-none"
          >
            {letter}
          </motion.span>
        ))}
      </h1>

      <div className="relative h-full text-amber-50 w-full px-4 md:px-12 lg:px-20">
        <motion.div 
          initial={{ x: -100, opacity: 0, filter: "blur(20px)" }}
          animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            stiffness: 25,
          }}
          className="absolute bottom-8 md:bottom-12 left-2 md:left-8 lg:left-16 max-w-[300px] sm:max-w-[400px] md:max-w-[500px] text-sm sm:text-base md:text-lg h-fit rounded-xl backdrop-blur-md bg-black/30 p-4 border border-white/10"
        >
          <span className="font-bold text-amber-300">Frieren, sang Pemburu</span> adalah mantan
          anggota kelompok petualang yang dipimpin oleh pahlawan Himmel, yang mengalahkan
          Raja Iblis dan mengembalikan kedamaian dunia setelah perjalanan selama sepuluh tahun.
        </motion.div>
      </div>
    </div>
  );
}