import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, ShoppingBag, Trash2, CreditCard, QrCode, Store } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<string>('pix');
  const [pickupOption, setPickupOption] = useState<string>('delivery');

  const handleFinishOrder = () => {
    if (items.length === 0) {
      toast({
        title: "Carrinho vazio",
        description: "Adicione produtos ao carrinho antes de finalizar",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Pedido confirmado!",
      description: "Seu pedido foi realizado com sucesso",
    });
    clearCart();
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-background pt-20 px-4">
          <div className="container mx-auto max-w-4xl py-12 text-center">
            <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-muted-foreground" />
            <h2 className="text-3xl font-bold mb-4">Carrinho Vazio</h2>
            <p className="text-muted-foreground mb-8">
              Você ainda não adicionou produtos ao carrinho
            </p>
            <Button onClick={() => navigate('/')} size="lg">
              Continuar Comprando
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-20 px-4">
        <div className="container mx-auto max-w-6xl py-8">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Lista de produtos */}
            <div className="md:col-span-2 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Itens do Carrinho</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-4 pb-4 border-b last:border-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                        <p className="text-lg font-bold text-primary mt-2">
                          R$ {item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" onClick={() => navigate('/')} className="w-full">
                    Continuar Comprando
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Resumo e opções de pagamento */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Forma de Pagamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-3 mb-3">
                      <RadioGroupItem value="pix" id="pix" />
                      <Label htmlFor="pix" className="flex items-center gap-2 cursor-pointer">
                        <QrCode className="h-4 w-4" />
                        PIX
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 mb-3">
                      <RadioGroupItem value="credit" id="credit" />
                      <Label htmlFor="credit" className="flex items-center gap-2 cursor-pointer">
                        <CreditCard className="h-4 w-4" />
                        Cartão de Crédito
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="debit" id="debit" />
                      <Label htmlFor="debit" className="flex items-center gap-2 cursor-pointer">
                        <CreditCard className="h-4 w-4" />
                        Cartão de Débito
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Entrega</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={pickupOption} onValueChange={setPickupOption}>
                    <div className="flex items-center space-x-3 mb-3">
                      <RadioGroupItem value="delivery" id="delivery" />
                      <Label htmlFor="delivery" className="cursor-pointer">
                        Entrega no endereço
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup" className="flex items-center gap-2 cursor-pointer">
                        <Store className="h-4 w-4" />
                        Retirar na loja
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Resumo do Pedido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>R$ {totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Entrega</span>
                    <span>{pickupOption === 'pickup' ? 'Grátis' : 'R$ 10,00'}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">
                      R$ {(totalPrice + (pickupOption === 'pickup' ? 0 : 10)).toFixed(2)}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleFinishOrder} className="w-full gradient-primary">
                    Finalizar Pedido
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;