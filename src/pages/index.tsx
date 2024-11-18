import Layout from "@/components/Layout";

export default function Home() {
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-stone-900 to-teal-950
    `}>
        <Layout title="Cadastro Simples">
          <span>Conteudo</span>
        </Layout>
    </div>
  );
}