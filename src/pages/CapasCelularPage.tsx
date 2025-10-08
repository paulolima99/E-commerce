import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import capaiphone14 from "@/assets/capaiphone14.jpg";
import capasansung from "@/assets/capasansung.jpg";
import capanote13 from "@/assets/capanote13.jpg";
import capinhaiphone16 from "@/assets/capinhaiphone16.jpg"

/*pagina da listagem de capa de celulares com filtro por modelo  */

const CapasCelularPage = () => {
    const navigate = useNavigate();

    // estados para controlar os filtros selecionados 
    const [selectedBrand, setSelectedBrand] = useState<string>("all");
    const [selectedModel, setSelectedModel] = useState<string>("all");

    // dados das capas
    const allCapaProducts = [
        {id:9, name: "Capa Silicone Iphone 14", price: 59.90, image:capaiphone14, rating: 4.5, category: "Capa", brand: "iphone", model: "14"},
        {id:10, name: "Capa Transparente Samsung A45", price: 39.90, image: capasansung, rating: 4.4, category: "Capa", brand: "samsung", model: "A45"},
        {id:11, name: "Capa Iphone 16 com MagSafe", price: 99.90, image: capinhaiphone16, rating: 4.8, category: "Capa", brand: "iphone", model: "16"},
        {id:12, name: "Capa Anti-Impacto Redmi Note 13", price: 59.90, image: capanote13, rating: 4.6, category: "Capa", brand: "xiaomi", model: "note 13"}

    ];

    // define os modelos disponiveis para cada marca
    const modelByBrand: Record<string, {value: string; label: string}[]> ={
        iphone: [
            {value: "11", label: "iphone 11"},
            {value: "11 Pro", label: "iphone 11 Pro"},
            {value: "11 ProMax", label: "iphone 11 ProMax"},
            {value: "12", label: "iphone 12"},
            {value: "12 Pro", label: "iphone 11 Pro"},
            {value: "12 ProMax", label: "iphone 12 ProMax"},
            {value: "13", label: "iphone 13"},
            {value: "13 pro", label: "iphone 13 Pro"},
            {value: "13 ProMax", label: "iphone 13 ProMax"},
            {value: "14", label: "iphone 14"},
            {value: "14 Pro", label: "iphone 14 Pro"},
            {value: "14 ProMax", label: "iphone 14 ProMax"},
            {value: "15", label: "iphone 15"},
            {value: "15 Pro", label: "iphone 15 Pro"},
            {value: "15 ProMax", label: "iphone 15 ProMax"},
            {value: "16", label: "iphone 16"},
            {value: "16 Pro", label: "iphone 16 Pro"},
            {value: "16 ProMax", label: "iphone 16 ProMax"},
        ],
        samsung:[
            { value: "s23", label: "Galaxy S23" },
            { value: "s24", label: "Galaxy S24" },
            { value: "a54", label: "Galaxy A54" },
        ],
        xiaomi:[
            { value: "13", label: "Xiaomi 13" },
            { value: "14", label: "Xiaomi 14" },
            { value: "redminote13", label: "Redmi Note 13" },

        ],
    };

    /*Aplicação do filtro nos produtos */

    const filteredProducts = allCapaProducts.filter((products) =>{
        const matchesBrand = selectedBrand === "all" || products.brand === selectedBrand
        const matchesModel = selectedModel === "all" || products.model === selectedModel
        return matchesBrand && matchesModel
    })

    /*reseta o filtro apos ele ser aplicado */

    const handleBrandChange = (value: string) => {
        setSelectedBrand(value);
        setSelectedModel("all")
    }

    return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Botão de voltar */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Voltar
        </Button>

        {/* Título da página */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Capas de Celular</h1>
          <p className="text-muted-foreground">Proteja seu celular com estilo - Encontre a capa perfeita</p>
        </div>
        {/*seção de filtors */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4">Filtrar por</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/*Filtro de marca */}
              <div>
                <label className="block text-sm font-medium mb-2">Marca</label>
                <Select value={selectedBrand} onValueChange={handleBrandChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione a marca"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">
                      Todas as marcas
                    </SelectItem>
                    <SelectItem value="iphone">iphone</SelectItem>
                    <SelectItem value="Samsung">Samsung</SelectItem>
                    <SelectItem value="xiaomi">xiaomi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/*filtro de modelo */}
              <div>
                <label className="block text-sm font-medium mb-2">Modelo</label>
                <Select value={selectedModel} onValueChange={setSelectedModel} disabled={selectedBrand==="all"}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione o modelo"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">
                      Todos os modelos
                    </SelectItem>
                    {selectedBrand !=="all" && modelByBrand[selectedBrand]?.map((model)=>(<SelectItem key={model.value} value={model.value}>
                      {model.label}
                    </SelectItem>))}
                  </SelectContent>
                </Select>
              </div>
            </div>
        </div>
        {/*contador de resultados */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Mostrando {filteredProducts.length} {filteredProducts.length === 1 ? 'produto':'produtos'}
            </p>                
        </div>
        {/*produtos filtrados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {filteredProducts.map((product)=>(
            <ProductCard key={product.id} {...product}/>
           ))}             
        </div>
        {/*menssagem caso não haja produtos */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">Nenhum produto encontrado com os filtros selecionados.</p>
            <Button variant="outline" onClick={()=>{
              setSelectedBrand("all");
              setSelectedModel("all");
            }} className="mt-4">
              Limpar filtros
            </Button>
          </div>
        )}
        </div>
    </div> 
    )   

}
export default CapasCelularPage;