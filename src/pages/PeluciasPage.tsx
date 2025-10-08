import Navbar  from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import peluciaStitch from "@/assets/pelucia-stitch.jpeg";
import peluciaGrogo from "@/assets/pelucia-grogo.jpeg";
import peluciaCascao from "@/assets/pelucia-cascao.jpeg";
import peluciaVeVon from "@/assets/pelucia-vevon.jpeg";

/*pagina de listagem das pelucias */

const PeluciasPage = () => {
    const navigate = useNavigate();

    // Dados dos produtos de pelucia

    const peluciaProducts = [
        {id: 1, name: "Pelúcia Stitch", price: 89.90, image: peluciaStitch, rating: 4.8, category: "Pelúcia"},
        {id: 2, name: "Pelúcia Grogu", price: 65.90, image: peluciaGrogo, rating: 4.9, category:"Pelúcia"},
        {id: 3, name: "Pelúcia Cascão", price: 79.90, image: peluciaCascao, rating: 4.7, category: "Pelúcia"},
        {id: 4, name: "Pelúcia Venon", price: 56.90, image: peluciaVeVon, rating: 5.0, category: "Pelúcia"}
    ];

    return(
        <div className="min-h-screen">
            <Navbar/>
            <div className="container mx-auto px-4 py-8">
                <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="mb-6 group"> {/*Botão de voltar */}

                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"/>
                Voltar
                </Button>

                {/*Titulo da pagina */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4x1 font-bold mb-2">Pelúcias</h1>
                    <p className="text-muted-foreground">Explore toda a nossa coleção de pelúcias fofas e adoráveis</p>
                </div>
                {/*Grid de produtos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {peluciaProducts.map((product) =>(
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PeluciasPage;