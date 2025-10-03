import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import peluciaStitch from "@/assets/pelucia-stitch.jpeg";
import peluciaGrogo from "@/assets/pelucia-grogo.jpeg";
import peluciaCascao from "@/assets/pelucia-cascao.jpeg";
import peluciaVeVon from "@/assets/pelucia-vevon.jpeg";
import airpods from "@/assets/airpods.jpg";
import carregadorportatil from "@/assets/carregador-portatil.jpg";
import smartwatch from "@/assets/smartwatch.jpg";
import xbox from "@/assets/xbox.jpg";
import capaiphone14 from "@/assets/capaiphone14.jpg";
import capasansung from "@/assets/capasansung.jpg";
import capanote13 from "@/assets/capanote13.jpg";
import capinhaiphone16 from "@/assets/capinhaiphone16.jpg"



/**
 * Página de Detalhes do Produto
 * Exibe informações completas sobre um produto específico
 */
const ProductDetails = () => {
  // Hook para obter o ID do produto da URL
  const { id } = useParams();
  
  // Hook para navegação programática entre páginas
  const navigate = useNavigate();

  // Dados mockados dos produtos (em uma aplicação real, isso viria de uma API ou banco de dados)
  const allProducts = [
    { id: 1, name: "Pelúcia Stitch", price: 89.90, image: peluciaStitch, rating: 4.8, category: "Pelúcia", description: "Stitch de pelúcia macio e confortável, perfeito para presentear." },
    { id: 2, name: "Pelúcia Grogu", price: 65.90, image: peluciaGrogo, rating: 4.9, category: "Pelúcia", description: "Grogu de pelúcia, ideal para decoração e companhia." },
    { id: 3, name: "Pelúcia Cascão", price: 79.90, image: peluciaCascao, rating: 4.7, category: "Pelúcia", description: "Cascão de pelúcia adorável." },
    { id: 4, name: "Pelúcia Venon", price: 56.90, image: peluciaVeVon, rating: 5.0, category: "Pelúcia", description: "Venon de pelúcia mágico." },
    { id: 5, name: "Fone Bluetooth Premium", price: 299.90, image: airpods, rating: 4.6, category: "Eletrônico", description: "Fone de ouvido Bluetooth com qualidade de som superior." },
    { id: 6, name: "Smart Watch Fitness", price: 459.90, image: smartwatch, rating: 4.8, category: "Eletrônico", description: "Relógio inteligente com monitoramento fitness completo." },
    { id: 7, name: "Carregador portátil universal", price: 120.60, image: carregadorportatil, rating: 4.9, category: "Eletrônico", description: "Carregador portátil que cabe no seu bolso." },
    { id: 8, name: "Controle Xbox", price: 349.90, image: xbox, rating: 4.7, category: "Eletrônico", description: "Controle de Xbox para jogar com os amigos." },
    { id: 9, name: "Capa Silicone iPhone 14", price: 59.90, image: capaiphone14, rating: 4.5, category: "Capa", description: "Capa de silicone resistente para iPhone 14." },
    { id: 10, name: "Capa Transparente Samsung A45", price: 39.90, image: capasansung, rating: 4.4, category: "Capa", description: "Capa transparente que protege sem esconder o design." },
    { id: 11, name: "Capa Iphone 16 com MagSafe", price: 99.90, image: capinhaiphone16, rating: 4.8, category: "Capa", description: "Capa MagSafe ideal para carregamento por indução." },
    { id: 12, name: "Capa Anti-Impacto Redmi note 13", price: 59.90, image: capanote13, rating: 4.6, category: "Capa", description: "Capa anti-impacto com alto nivel de proteção." },
  ];

  // Busca o produto específico pelo ID da URL
  const product = allProducts.find(p => p.id === Number(id));

  // Se o produto não for encontrado, exibe mensagem de erro
  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
          <Button onClick={() => navigate("/")}>Voltar para Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Container principal da página */}
      <div className="container mx-auto px-4 py-8">
        {/* Botão para voltar à página anterior */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Voltar
        </Button>

        {/* Grid com detalhes do produto */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Coluna da imagem do produto */}
          <div className="aspect-square bg-secondary rounded-2xl overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Coluna com informações do produto */}
          <div className="space-y-6">
            {/* Badge da categoria */}
            <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-sm font-semibold text-accent-foreground">
              {product.category}
            </span>

            {/* Nome do produto */}
            <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>

            {/* Avaliação com estrelas */}
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? "fill-accent text-accent"
                      : "fill-muted text-muted"
                  }`}
                />
              ))}
              <span className="text-lg text-muted-foreground">({product.rating.toFixed(1)})</span>
            </div>

            {/* Preço do produto */}
            <div className="text-4xl font-bold text-primary">
              R$ {product.price.toFixed(2)}
            </div>

            {/* Descrição do produto */}
            <p className="text-lg text-muted-foreground">
              {product.description}
            </p>

            {/* Botão de adicionar ao carrinho */}
            <Button 
              size="lg" 
              className="w-full gradient-primary border-0 hover:opacity-90 transition-opacity"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Adicionar ao Carrinho
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
