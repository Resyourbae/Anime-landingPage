
interface CardPersonagemProps {
  nome: string;
  descricao: string;
  imagem: string;
  tags?: string[]; // Opcional
}

export default function CardPersonagem({
  nome,
  descricao,
  imagem,
  tags = [],
}: CardPersonagemProps) {
  return (
    <div className="w-full">
      <div
        className="relative bg-black border border-gray-700 rounded-lg sm:rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
        style={{
          boxShadow: "inset 0 -10px 15px -5px rgba(100, 22, 245, 0.6)",
        }}
      >
        {/* Imagem do personagem */}
        <img
          src={imagem}
          alt={nome}
          className="w-full h-32 sm:h-48 md:h-64 object-cover rounded-t-lg sm:rounded-t-xl"
        />

        {/* Informações do personagem */}
        <div className="p-2 sm:p-4">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-white line-clamp-1">{nome}</h2>
          <p className="text-white/90 mt-0.5 sm:mt-1 text-xs sm:text-sm line-clamp-2">
            {descricao}
          </p>

          {/* Status ou Tags */}
          <div className="mt-2 sm:mt-3 flex flex-wrap gap-1 sm:gap-2">
            {tags.map((tag, index) => 
              <span 
                key={index} 
                className="text-[10px] sm:text-xs bg-white/10 text-white backdrop-blur-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border border-white/20"
              >
                {tag}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
