import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Componente de Navegação Principal
 * Barra de navegação fixa no topo com logo, categorias e carrinho de compras
 */
const Navbar = () => {
  // Estado para controlar abertura/fechamento do menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lista de categorias de produtos para navegação
  const categories = [
    { name: "Pelúcias", href: "#pelucias" },
    { name: "Eletrônicos", href: "#eletronicos" },
    { name: "Capas de Celular", href: "#capas" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        {/* Barra Superior com Logo e Carrinho */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo da Loja */}
          <a href="/" className="flex items-center space-x-2">
            <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              GaleriaTech
            </span>
          </a>

          {/* Ações: Carrinho e Menu Mobile */}
          <div className="flex items-center gap-2">
            {/* Botão do Carrinho com contador de itens */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold">
                0
              </span>
            </Button>
            
            {/* Botão para abrir/fechar menu mobile */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Barra de Categorias - Desktop */}
        <div className="hidden md:flex h-12 items-center gap-6 border-t border-border">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
            >
              {category.name}
              {/* Animação de linha ao passar o mouse */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>

      {/* Menu Mobile - Visível apenas em telas pequenas */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Lista de categorias no menu mobile */}
            <div className="flex flex-col space-y-2">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
