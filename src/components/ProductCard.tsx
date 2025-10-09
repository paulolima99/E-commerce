import { ShoppingCart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";

/**
 * Interface que define as propriedades do componente ProductCard
 */
interface ProductCardProps {
  id: number;        // ID único do produto
  name: string;      // Nome do produto
  price: number;     // Preço do produto
  image: string;     // URL da imagem do produto
  rating: number;    // Avaliação do produto (0-5)
  category: string;  // Categoria do produto
}

/**
 * Componente de Card do Produto
 * Exibe informações resumidas do produto em formato de cartão
 */
const ProductCard = ({ id, name, price, image, rating, category }: ProductCardProps) => {
  // Hook para navegação programática
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  /**
   * Função que redireciona para a página de detalhes do produto
   */
  const handleCardClick = () => {
    navigate(`/produto/${id}`);
  };
  return (
    <Card 
      className="group overflow-hidden transition-all hover:shadow-custom-md border-border cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Container da imagem do produto */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform group-hover:scale-110 duration-500"
        />
        {/* Badge da categoria no canto superior esquerdo */}
        <div className="absolute top-2 left-2">
          <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">
            {category}
          </span>
        </div>
      </div>
      
      {/* Conteúdo do card: nome, avaliação e preço */}
      <CardContent className="p-4">
        {/* Nome do produto com altura mínima fixa para alinhamento */}
        <h3 className="font-semibold text-base mb-2 line-clamp-2 min-h-[3rem]">{name}</h3>
        
        {/* Sistema de avaliação com estrelas */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${
                i < Math.floor(rating)
                  ? "fill-accent text-accent"
                  : "fill-muted text-muted"
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({rating.toFixed(1)})</span>
        </div>
        
        {/* Preço do produto formatado */}
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-primary">
            R$ {price.toFixed(2)}
          </span>
        </div>
      </CardContent>
      
      {/* Rodapé do card com botão de ação */}
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full gradient-primary border-0 hover:opacity-90 transition-opacity"
          onClick={(e) => {
            e.stopPropagation(); // Impede que o clique no botão acione o clique do card
            //lógica de adicionar ao carrinho
            addItem({ id, name, price, image, category });
            
          }}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Adicionar ao Carrinho
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
