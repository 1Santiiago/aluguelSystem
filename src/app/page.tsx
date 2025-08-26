
'use client'
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
type Imovel = {
  id: number;
  endereco: string;
  valor: number;
  status: "disponível" | "alugado";
}
export default function Home() {

  const imoveis: Imovel[] = [
    { id: 1, endereco: "Rua das Flores, 123", valor: 1200, status: "disponível" },
    { id: 2, endereco: "Av. Central, 456", valor: 1500, status: "alugado" },
    { id: 3, endereco: "Praça da Paz, 789", valor: 1000, status: "disponível" },
    { id: 4, endereco: "Rua A, 10", valor: 1800, status: "alugado" },
    { id: 5, endereco: "Rua B, 22", valor: 900, status: "disponível" },
  ];

  const totalImoveis = imoveis.length
  const totalImoveisDisponiveis = imoveis.filter((f) => f.status === 'disponível').length
  const totalAlungados = imoveis.filter((f) => f.status === 'alugado').length

  const pieData = [
    { name: "Alugados", value: imoveis.filter(i => i.status === "alugado").length },
    { name: "Disponíveis", value: imoveis.filter(i => i.status === "disponível").length },
  ];

  const COLORS = ["#6D28D9", "#A78BFA"];
  return (
    <main className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-primary text-white p-4 rounded-lg shadow-lg">
          <h2 className="font-bold">Imóveis</h2>
          <p className="text-2xl">{totalImoveis}</p>
        </div>

        <div className="bg-purple-400 text-white p-4 rounded-lg shadow-lg">
          <h2 className="font-bold">Disponíveis</h2>
          <p className="text-2xl">{totalImoveisDisponiveis}</p>
        </div>

        <div className="bg-pink-400 text-white p-4 rounded-lg shadow-lg">
          <h2 className="font-bold">Alugados</h2>
          <p className="text-2xl">{totalAlungados}</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" />
        </PieChart>
      </ResponsiveContainer>
    </main>
  )
}
