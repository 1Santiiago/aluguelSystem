"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import { BadgePlus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ImoveisPage() {
  type Imovel = {
    id: number;
    endereco: string;
    valor: number;
    status: string;
    img: string;
  };

  const [imoveis, setImoveis] = useState<Imovel[]>([
    {
      id: 1,
      endereco: "Rua das Flores, 123",
      valor: 1200,
      status: "disponível",
      img: "/casa.jpeg",
    },
    {
      id: 2,
      endereco: "Av. Central, 456",
      valor: 1500,
      status: "alugado",
      img: "/casa.jpeg",
    },
    {
      id: 3,
      endereco: "Praça da Paz, 789",
      valor: 1000,
      status: "disponível",
      img: "/casa.jpeg",
    },
  ]);

  const [status, setStatus] = useState<"disponível" | "alugado" | "">("");

  const addImovel = (formData: FormData) => {
    const endereco = formData.get("endereco") as string;
    const valor = Number(formData.get("valor"));
    const novoImovel: Imovel = {
      id: imoveis.length + 1,
      endereco,
      valor,
      status: status,
      img: "/casa.jpeg",
    };
    setImoveis((prev) => [...prev, novoImovel]);
  };

  return (
    <div className="p-6 ">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold py-2 md:text-left lg:text-left text-center">
          Todos imoveis
        </h1>
        <Dialog>
          <DialogTrigger>
            <BadgePlus />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[70vw] sm:max-h-[70vh] w-sm min-h-3/6 overflow-y-auto ">
            <DialogHeader>
              <DialogTitle>Adicionar Imóvel</DialogTitle>
            </DialogHeader>
            <form action={addImovel}>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="endereco">Endereço</Label>
                  <Input id="endereco" name="endereco" type="text" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="preco">Valor</Label>
                  <Input id="preco" name="valor" type="number" />
                </div>
                <div className="space-y-6">
                  <Label htmlFor="preco">Status</Label>
                  <Select
                    onValueChange={(value) =>
                      setStatus(value as "disponível" | "alugado")
                    }
                  >
                    <SelectTrigger id="status" name="status">
                      <SelectValue placeholder="Selecione o status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="disponível">Disponível</SelectItem>
                      <SelectItem value="alugado">Alugado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter className="flex p-2">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {imoveis.map((imovel) => (
          <div key={imovel.id} className="border rounded-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={imovel.img}
                fill
                className="object-cover"
                alt={`Casa em ${imovel.endereco}`}
              />
            </div>
            <div className="p-4">
              <p>
                <b>Endereço:</b> {imovel.endereco}
              </p>
              <p>
                <b>Valor:</b> R$ {imovel.valor}
              </p>
              <p>
                <b>Status:</b> {imovel.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
