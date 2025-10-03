import { ShoppingBag, Package, Shield, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import CategorySection from "@/components/CategorySection";
import heroBanner from "@/assets/hero-banner.jpg";
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
 * Componente da Página Principal (Home)
 * Exibe hero banner, características da loja e categorias de produtos
 */
const Index = () => {
  // Dados mockados dos produtos de Pelúcia
  const peluciaProducts = [
    {
      id: 1,
      name: "Pelúcia Stitch",
      price: 89.90,
      image:peluciaStitch,
      rating: 4.8,
      category: "Pelúcia"
    },
    {
      id: 2,
      name: "Pelúcia Grogu",
      price: 65.90,
      image: peluciaGrogo,
      rating: 4.9,
      category: "Pelúcia"
    },
    {
      id: 3,
      name: "Pelúcia Cascão",
      price: 79.90,
      image: peluciaCascao,
      rating: 4.7,
      category: "Pelúcia"
    },
    {
      id: 4,
      name: "Pelúcia Venon",
      price: 56.90,
      image: peluciaVeVon,
      rating: 5.0,
      category: "Pelúcia"
    }
  ];

  // Dados mockados dos produtos Eletrônicos
  const eletronicoProducts = [
    {
      id: 5,
      name: "Fone Bluetooth Premium",
      price: 299.90,
      image: airpods,
      rating: 4.6,
      category: "Eletrônico"
    },
    {
      id: 6,
      name: "Smart Watch Fitness",
      price: 459.90,
      image: smartwatch,
      rating: 4.8,
      category: "Eletrônico"
    },
    {
      id: 7,
      name: "Carregador portátil universal",
      price: 120.60,
      image: carregadorportatil,
      rating: 4.9,
      category: "Eletrônico"
    },
    {
      id: 8,
      name: "Controle Xbox",
      price: 349.90,
      image: xbox,
      rating: 4.7,
      category: "Eletrônico"
    }
  ];

  // Dados mockados dos produtos de Capas de Celular
  const capaProducts = [
    {
      id: 9,
      name: "Capa Silicone iPhone 14",
      price: 59.90,
      image: capaiphone14,
      rating: 4.5,
      category: "Capa"
    },
    {
      id: 10,
      name: "Capa Transparente Samsung A45",
      price: 39.90,
      image: capasansung,
      rating: 4.4,
      category: "Capa"
    },
    {
      id: 11,
      name: "Capa Iphone 16 com MagSafe",
      price: 99.90,
      image: capinhaiphone16,
      rating: 4.8,
      category: "Capa"
    },
    {
      id: 12,
      name: "Capa Anti-Impacto Redmi Note 13",
      price: 59.90,
      image: capanote13,
      rating: 4.6,
      category: "Capa"
    }
  ];

  // Características/benefícios da loja exibidos na página inicial
  const features = [
    {
      icon: Truck,
      title: "Frete Grátis",
      description: "Em compras acima de R$ 199"
    },
    {
      icon: Shield,
      title: "Compra Segura",
      description: "Proteção total nos pagamentos"
    },
    {
      icon: Package,
      title: "Entrega Rápida",
      description: "Receba em até 1 dia útil"
    },
    {
      icon: ShoppingBag,
      title: "Troca Fácil",
      description: "Até 30 dias para trocar"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Seção Hero - Banner principal da página */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Coluna de texto com animação de fade-in */}
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Descubra os Melhores{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Produtos
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Pelúcias fofas, eletrônicos de última geração e capas de celular exclusivas. Tudo em um só lugar!
              </p>
            </div>
            
            {/* Coluna da imagem com animação atrasada */}
            <div className="relative animate-fade-in animation-delay-200">
              <img
                src=""
                alt="Banner da loja GaleriaTech"
                className="rounded-2xl shadow-custom-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Características/Benefícios da Loja */}
      <section className="py-12 border-y border-border bg-secondary/30">
        <div className="container mx-auto px-4">
          {/* Grid responsivo de características */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              // Extrai o componente de ícone dinamicamente
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start gap-4 group">
                  {/* Ícone com fundo gradiente e animação de escala ao hover */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seções de Categorias de Produtos */}
      {/* Cada seção exibe uma categoria específica de produtos */}
      <CategorySection id="pelucias" title="Pelúcias" products={peluciaProducts} />
      
      {/* Seção com fundo alternativo para contraste visual */}
      <div className="bg-secondary/30">
        <CategorySection id="eletronicos" title="Eletrônicos" products={eletronicoProducts} />
      </div>
      
      <CategorySection id="capas" title="Capas de Celular" products={capaProducts} />

      {/* Rodapé da Página */}
      <footer className="bg-foreground text-background py-12 mt-16">
        <div className="container mx-auto px-4">
          {/* Grid responsivo com informações da loja */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Coluna 1: Logo e descrição */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                
                <span className="text-2xl font-bold bg-gradient-to-r">GaleriaTech</span>
              </div>
              <p className="text-sm opacity-80">
                Sua loja online de confiança para pelúcias, eletrônicos e acessórios.
              </p>
            </div>
            
            {/* Coluna 2: Links de categorias */}
            <div>
              <h4 className="font-semibold mb-4">Categorias</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#pelucias" className="hover:opacity-100 transition-opacity">Pelúcias</a></li>
                <li><a href="#eletronicos" className="hover:opacity-100 transition-opacity">Eletrônicos</a></li>
                <li><a href="#capas" className="hover:opacity-100 transition-opacity">Capas de Celular</a></li>
              </ul>
            </div>
            {/* Coluna 3: Links de atendimento */}
            <div>
              <h4 className="font-semibold mb-4">Atendimento</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Central de Ajuda</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Política de Troca</a></li>
              </ul>
            </div>
            
            {/* Coluna 4: Informações de contato */}
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>contato@galeriatech.com</li>
                <li>(86)91234-5678</li>
                <li>Segunda a Sexta, 9h às 18h</li>
              </ul>
            </div>
          </div>
          
          {/* Linha de copyright */}
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2025 GaleriaTech. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
