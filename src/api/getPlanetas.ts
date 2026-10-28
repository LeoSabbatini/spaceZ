export async function BuscarPlanetas() {
  const resposta = await fetch("http://10.92.198.18:8080/planetas");

  if (!resposta.ok) {
    throw new Error("Erro ao buscar o planeta");
  }

  const json = await resposta.json();
  return json;
}
