import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";

/**
 * Interface que define a estrutura de um produto
 */
interface Product {
  id: number;        // ID único do produto
  name: string;      // Nome do produto
  price: number;     // Preço do produto
  image: string;     // URL da imagem
  rating: number;    // Avaliação (0-5)
  category: string;  // Categoria
}

/**
 * Interface que define as propriedades da seção de categoria
 */
interface CategorySectionProps {
  id: string;           // ID HTML da seção (para navegação por âncora)
  title: string;        // Título da categoria
  products: Product[];  // Array de produtos da categoria
}

/**
 * Componente de Seção de Categoria
 * Exibe uma categoria de produtos com título e grid de produtos
 */
const CategorySection = ({ id, title, products }: CategorySectionProps) => {
  return (
    <section id={id} className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção com título e botão "Ver Todos" */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          <Button variant="ghost" className="group">
            Ver Todos
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        {/* Grid responsivo de produtos */}
        {/* 1 coluna em mobile, 2 em tablet, 4 em desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            // Renderiza um card para cada produto, passando todas as propriedades
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
