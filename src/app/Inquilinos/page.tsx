type Inquilino = {
  id: number
  nome: string
  contato: string
}

const inquilinos: Inquilino[] = [
  { id: 1, nome: "João Silva", contato: "(21) 99999-0000" },
  { id: 2, nome: "Maria Oliveira", contato: "(21) 98888-1111" },
]

export default function InquilinosPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Inquilinos</h1>
      <ul className="space-y-3">
        {inquilinos.map((i) => (
          <li key={i.id} className="p-4 border rounded-lg shadow-sm">
            <p><b>Nome:</b> {i.nome}</p>
            <p><b>Contato:</b> {i.contato}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
