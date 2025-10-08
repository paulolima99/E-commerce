import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import airpods from "@/assets/airpods.jpg";
import carregadorportatil from "@/assets/carregador-portatil.jpg";
import smartwatch from "@/assets/smartwatch.jpg";
import xbox from "@/assets/xbox.jpg";

/*pagina de listagem de eletronicos */

const EletronicosPage = () =>{
    const navigate = useNavigate();

    // dados dos produtos eletronicos
    const eletronicoPrducts = [
        {id: 5, name: "Fone Bluetooth Premium", price: 299.90, image: airpods, rating: 4.6, category: "Eletronico"},
        {id:6, name: "Smart Watch Fitness", price: 459.90, image:smartwatch, rating: 4.8, category: "Eletronico"},
        {id:7, name: "Carregador Portátil Universal", price: 120.60, image: carregadorportatil, rating: 4.9, category: "Eletronicos"},
        {id:8, name: "Controle Xbox", price: 349.90, image: xbox, rating: 4.7, category: "Eletronicos"}
    ];

    return(
        <div className="min-h-screen">
            <Navbar/>
            <div className="container mx-auto px-4 py-8">
                {/* Botão de voltar */}
                <Button 
                variant="ghost"
                onClick={() =>navigate("/")}
                className="mb-6 group">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"/>
                    Voltar
                </Button>
                {/* Título da página */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font bold mb-2">Eletrônicos</h1>
                    <p className="text-muted-foreground">Descubra os melhores produtos eletrônicos e gadgets tecnologicos</p>
                </div>
                {/* Grid de produtos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {eletronicoPrducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EletronicosPage
