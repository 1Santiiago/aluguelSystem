"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BadgePlus } from "lucide-react";

type Inquilino = {
  id: number;
  nome: string;
  contato: string;
};

export default function InquilinosPage() {
  const [inquilinos, setInquilinos] = useState<Inquilino[]>([
    { id: 1, nome: "João Silva", contato: "21999990000" },
    { id: 2, nome: "Maria Oliveira", contato: "21988881111" },
  ]);
  const addInquilino = (formData: FormData) => {
    const nome = formData.get("nome") as string;
    const contato = formData.get("contato") as string;

    if (!nome || !contato) {
      alert("Adicionar todos os campos");
    }

    const newInquilino: Inquilino = {
      id: inquilinos.length + 1,
      nome,
      contato,
    };

    setInquilinos((prev) => [...prev, newInquilino]);
    console.log({ nome, contato });
  };
  return (
    <div className="p-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">Lista de Inquilinos</h1>
        <Dialog>
          <DialogTrigger>
            <BadgePlus />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[70vw] sm:max-h-[70vh] w-sm  overflow-y-auto ">
            <DialogHeader>
              <DialogTitle>Novo Inquilino</DialogTitle>
            </DialogHeader>
            <form action={addInquilino}>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="nome">Nome</Label>
                  <Input id="nome" name="nome" type="text" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="contato">contato</Label>
                  <Input id="contato" name="contato" type="text" />
                </div>
              </div>
              <DialogFooter className="flex p-2">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button type="submit">Salvar</Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <ul className="space-y-3">
        {inquilinos.map((i) => (
          <li key={i.id} className="p-4 border rounded-lg shadow-sm">
            <p>
              <b>Nome:</b> {i.nome}
            </p>
            <p>
              <b>Contato:</b> {i.contato}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
