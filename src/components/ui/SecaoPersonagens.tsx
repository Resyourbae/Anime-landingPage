import { motion } from "framer-motion";
import CardPersonagem from "../ui/CardPersonagem";

export default function SecaoPersonagens() {
    const letters = "Karakter".split("");

  return(<>
  <div className="bg-black gap-5 justify-center py-10 overflow-x-hidden">
    <h2 id="personagens" className="text-amber-50 text-4xl md:text-7xl font-bold text-center">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: -200, opacity: 0, filter: "blur(20px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.1,
                delay: i * 0.1,
                type: "spring",
                stiffness: 20,
              }}
              viewport={{ once: false }}
            >
              {letter}
            </motion.span>
          ))}
    </h2>

    <div className="flex flex-col gap-6 justify-center py-10 md:py-20">
      {/* Container for all cards with responsive grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 px-2 sm:px-4 md:px-8 max-w-7xl mx-auto">
        <CardPersonagem
          nome="Tamamo"
          descricao="Kuda balap legendaris dengan kecepatan luar biasa."
          imagem="/tamamo.png"
          tags={["Kuda", "Pelari"]}
        />
        <CardPersonagem
          nome="My bini"
          descricao="Versi musim panas yang ceria dan energik."
          imagem="/mybini.png"
          tags={["Kuda", "Energik"]}
        />
        <CardPersonagem
          nome="Gold ship"
          descricao="Sosok misterius dengan aura yang kuat."
          imagem="/goldship.png"
          tags={["Kuda", "Misterius"]}
        />
        <CardPersonagem
          nome="Mamah aku takut"
          descricao="Juara lintas rintangan yang terkenal."
          imagem="/takut.png"
          tags={["Kuda", "Anggun"]}
        />
        <CardPersonagem
          nome="Alice"
          descricao="Karakter yang penuh semangat dan ceria."
          imagem="/alice1.jpg"
          tags={["Enerjik", "Ceria"]}
        />
        <CardPersonagem
          nome="Proplayer"
          descricao="Sosok asli yang melegenda dan menginspirasi."
          imagem="/proplayer.png"
          tags={["Kuda", "Legenda"]}
        />
      </div>
    </div>

    {/* Section Statistik & Pencapaian */}
    <div id="stats" className="mt-10 md:mt-20 px-4 mb-10">
      <div className="max-w-6xl mx-auto">
        {/* Grid Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <motion.h3 
                className="text-4xl font-light text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                9.8/10
              </motion.h3>
              <p className="text-gray-400 mt-2 text-sm tracking-wider uppercase">Rating MyAnimeList</p>
            </div>
          </motion.div>

          {/* Stat Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <motion.h3 
                className="text-4xl font-light text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                1M+
              </motion.h3>
              <p className="text-gray-400 mt-2 text-sm tracking-wider uppercase">Global Fans</p>
            </div>
          </motion.div>

          {/* Stat Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <motion.h3 
                className="text-4xl font-light text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                28+
              </motion.h3>
              <p className="text-gray-400 mt-2 text-sm tracking-wider uppercase">Episode Total</p>
            </div>
          </motion.div>

          {/* Stat Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <motion.h3 
                className="text-4xl font-light text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                #1
              </motion.h3>
              <p className="text-gray-400 mt-2 text-sm tracking-wider uppercase">Top Anime 2023</p>
            </div>
          </motion.div>
        </div>

        {/* Featured Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-20 backdrop-blur-sm rounded-lg overflow-hidden bg-white/5"
        >
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-12 border-r border-white/10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-light text-white mb-4">
                  Streaming Now on
                  <span className="ml-2 text-amber-300">Crunchyroll</span>
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Nikmati petualangan epik dan cerita yang menawan. Streaming episode terbaru sekarang di platform anime premium.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-amber-300 text-black px-8 py-3 rounded-lg font-medium hover:bg-amber-200 transition-all duration-300"
                >
                  Mulai Menonton
                </motion.button>
              </motion.div>
            </div>
            <div className="relative overflow-hidden h-[400px] w-full group">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="w-full h-full transform rotate-2 group-hover:rotate-0 transition-transform duration-700 ease-out"
              >
                <video
                  src="/kayoko-kimono.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center rounded-lg shadow-xl"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>
        </motion.div>

        {/* Divider with Blur Effect */}
        <div className="relative h-32 my-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-amber-300/20 to-transparent" />
          </div>
          <div className="absolute inset-0 blur-[100px] bg-gradient-to-r from-amber-500/5 via-amber-300/10 to-amber-500/5" />
          <div className="absolute inset-0 blur-[50px] bg-gradient-to-b from-transparent via-amber-300/10 to-transparent" />
        </div>

        {/* New Content Section with Rain Effect */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden"
        >
          {/* Rain Animation Container */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-20 bg-gradient-to-b from-amber-300/30 to-transparent"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: -80,
                  opacity: 0.5 + Math.random() * 0.5,
                }}
                animate={{
                  y: ["0%", "800%"],
                }}
                transition={{
                  duration: 1.5 + Math.random() * 1,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>


          <div className="grid lg:grid-cols-2 gap-8 relative z-10">
            {/* Content Column 1 */}
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/5">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-light text-white">
                  Latest <span className="text-amber-300">Updates</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="min-w-[4px] h-16 bg-amber-300/30 rounded-full" />
                    <div>
                      <p className="text-white/90">Episode Terbaru</p>
                      <p className="text-sm text-gray-400 mt-1">Setiap hari Jumat di Crunchyroll</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="min-w-[4px] h-16 bg-amber-300/30 rounded-full" />
                    <div>
                      <p className="text-white/90">Manga Chapter Baru</p>
                      <p className="text-sm text-gray-400 mt-1">Update mingguan di platform resmi</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="min-w-[4px] h-16 bg-amber-300/30 rounded-full" />
                    <div>
                      <p className="text-white/90">Event Special</p>
                      <p className="text-sm text-gray-400 mt-1">Meet & Greet dengan pengisi suara karakter utama</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="min-w-[4px] h-16 bg-amber-300/30 rounded-full" />
                    <div>
                      <p className="text-white/90">Merchandise Eksklusif</p>
                      <p className="text-sm text-gray-400 mt-1">Pre-order koleksi terbatas minggu ini</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Content Column 2 */}
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/5">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-light text-white">
                  Join Our <span className="text-amber-300">Community</span>
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Instagram */}
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 transition-all duration-300"
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/20 to-purple-600/20 group-hover:from-amber-400/30 group-hover:to-purple-600/30 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white font-medium">Instagram</span>
                        <span className="text-white/60 text-sm">@ayser_nii</span>
                      </div>
                    </motion.a>

                    {/* TikTok */}
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 transition-all duration-300"
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/20 to-purple-600/20 group-hover:from-amber-400/30 group-hover:to-purple-600/30 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-300" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white font-medium">TikTok</span>
                        <span className="text-white/60 text-sm">@ayser_nii</span>
                      </div>
                    </motion.a>

                    {/* Telegram */}
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 transition-all duration-300"
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/20 to-purple-600/20 group-hover:from-amber-400/30 group-hover:to-purple-600/30 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-300" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white font-medium">Telegram</span>
                        <span className="text-white/60 text-sm">@ayser_nii</span>
                      </div>
                    </motion.a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* WhatsApp */}
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 transition-all duration-300"
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/20 to-purple-600/20 group-hover:from-amber-400/30 group-hover:to-purple-600/30 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white font-medium">WhatsApp</span>
                        <span className="text-white/60 text-sm">Community Group</span>
                      </div>
                    </motion.a>

                    {/* Discord */}
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 transition-all duration-300"
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/20 to-purple-600/20 group-hover:from-amber-400/30 group-hover:to-purple-600/30 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-300" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028z"/>
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white font-medium">Discord</span>
                        <span className="text-white/60 text-sm">Join our server</span>
                      </div>
                    </motion.a>
                  </div>
                </div>

                {/* Additional Community Features */}
                <div className="mt-8 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    <h4 className="text-lg text-amber-300 mb-2">Event Mingguan</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-300/50"></div>
                        <span>Diskusi Episode Baru</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-300/50"></div>
                        <span>Fan Art Showcase</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-300/50"></div>
                        <span>Quiz & Games</span>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    <h4 className="text-lg text-amber-300 mb-2">Benefit Member</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-300/50"></div>
                        <span>Akses Early Episode</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-300/50"></div>
                        <span>Merchandise Exclusive</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-300/50"></div>
                        <span>Meet & Greet Priority</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Divider with Blur Effect */}
        <div className="relative h-32 mt-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-amber-300/20 to-transparent" />
          </div>
          <div className="absolute inset-0 blur-[100px] bg-gradient-to-r from-amber-500/5 via-amber-300/10 to-amber-500/5" />
          <div className="absolute inset-0 blur-[50px] bg-gradient-to-b from-transparent via-amber-300/10 to-transparent" />
        </div>

        {/* World Exploration Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-20 relative"
        >
          {/* Star Animation Background - White Color */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
                  boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.5)',
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1],
                  filter: ['blur(0px)', 'blur(1px)', 'blur(0px)'],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 space-y-16">
            {/* World Building Section */}
            <div id="world" className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/5"
              >
                <h3 className="text-2xl font-light text-white mb-6">
                  Dunia <span className="text-amber-300">Keajaiban</span>
                </h3>
                <div className="prose prose-invert">
                  <p className="text-gray-300">
                    Jelajahi dunia yang penuh dengan keajaiban dan misteri. Dari padang rumput yang luas hingga hutan yang menyimpan rahasia kuno, setiap sudut dunia ini menyimpan cerita yang menakjubkan.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-lg">
                      <h4 className="text-amber-300 text-lg mb-2">Lokasi Magis</h4>
                      <ul className="text-sm text-gray-300 space-y-2">
                        <li>• Hutan Mistis</li>
                        <li>• Menara Sihir</li>
                        <li>• Kota Tersembunyi</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <h4 className="text-amber-300 text-lg mb-2">Artefak</h4>
                      <ul className="text-sm text-gray-300 space-y-2">
                        <li>• Pedang Legendaris</li>
                        <li>• Kristal Kuno</li>
                        <li>• Gulungan Sihir</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="aspect-square rounded-2xl overflow-hidden relative group">
                  <img
                    src="/Fern.jpeg"
                    alt="World Location"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Hutan Mistis</p>
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden relative group">
                  <img
                    src="/Stark.jpeg"
                    alt="Magic Item"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Menara Sihir</p>
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden relative group">
                  <img
                    src="/background.jpeg"
                    alt="Ancient Ruin"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Kota Kuno</p>
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden relative group">
                  <img
                    src="/Frierenfoto.jpeg"
                    alt="Magic Crystal"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Kristal Sihir</p>
                </div>
              </motion.div>
            </div>

            {/* Adventure Journey Section */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-900/20 via-amber-800/20 to-amber-900/20 p-1">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-center max-w-3xl mx-auto"
                >
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-6">
                    Petualangan <span className="text-amber-300">Tak Terlupakan</span>
                  </h3>
                  <p className="text-gray-300 mb-8">
                    Ikuti perjalanan para karakter dalam menghadapi tantangan, mengungkap misteri, dan menemukan arti persahabatan sejati.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-black/30 p-6 rounded-xl border border-white/5">
                      <div className="w-12 h-12 bg-amber-300/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                      </div>
                      <h4 className="text-white text-lg mb-2">Quest & Misi</h4>
                      <p className="text-gray-400 text-sm">Berbagai tantangan dan petualangan menanti di setiap sudut dunia</p>
                    </div>
                    <div className="bg-black/30 p-6 rounded-xl border border-white/5">
                      <div className="w-12 h-12 bg-amber-300/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <h4 className="text-white text-lg mb-2">Misteri</h4>
                      <p className="text-gray-400 text-sm">Rahasia kuno dan teka-teki yang menunggu untuk dipecahkan</p>
                    </div>
                    <div className="bg-black/30 p-6 rounded-xl border border-white/5">
                      <div className="w-12 h-12 bg-amber-300/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 21a9 9 0 100-18 9 9 0 000 18z"></path>
                          <path d="M12 8v8"></path>
                          <path d="M8 12h8"></path>
                        </svg>
                      </div>
                      <h4 className="text-white text-lg mb-2">Pengembangan</h4>
                      <p className="text-gray-400 text-sm">Saksikan pertumbuhan karakter dalam menghadapi setiap tantangan</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Special Moments Section */}
        <motion.div
          id="moments"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-24 relative p-[1px] rounded-3xl bg-gradient-to-r from-amber-300/30 via-purple-500/30 to-pink-500/30 shadow-[0_8px_30px_rgba(168,85,247,0.06)]"
        >
          <div className="relative z-10 bg-black/40 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-light text-white">
                  Momen <span className="text-amber-300">Spesial</span>
                </h3>
                {/* subtle thin colored underline for elegance */}
                <div className="h-[2px] w-28 bg-gradient-to-r from-amber-300 to-pink-400 rounded-full mt-3 mb-2" />
                <p className="text-gray-300 leading-relaxed">
                  Saksikan interaksi menggemaskan antara Hoshino dan Hina dalam keseharian mereka. 
                  Setiap detik menghadirkan kehangatan dan kebahagiaan yang akan membuat hatimu meleleh.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-300/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-white/80">Kebersamaan yang Menghangatkan</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-300/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <p className="text-white/80">Momen-momen Berharga</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-300/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <p className="text-white/80">Kisah yang Menginspirasi</p>
                  </div>
                </div>
              </motion.div>

              {/* Video Side */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative rounded-2xl overflow-hidden p-[2px] bg-gradient-to-br from-amber-300/30 via-purple-500/30 to-pink-500/30"
                style={{
                  boxShadow: '0 0 20px rgba(251, 191, 36, 0.1), 0 0 40px rgba(168, 85, 247, 0.1), 0 0 80px rgba(236, 72, 153, 0.1)'
                }}
              >
                <div className="aspect-video relative group bg-black rounded-2xl overflow-hidden">
                  <video
                    src="/hoshino-and-hina.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-sm font-medium">
                      Hoshino & Hina • Momen Spesial
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

  </div>
  </>)
}