import type { Metadata } from "next";
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Instituto Social Bezerra de Menezes",
  description: "Transformando vidas.",
};

function OncologiaEmNumeros() {
  return (
    <main className='min-h-screen flex flex-col'>
      <Header />
      <section className='flex-1 bg-accent flex items-center justify-center'>
        <h1 className='text-xl'>Doar</h1>
      </section>
      <Footer />
    </main>
  )
}

export default OncologiaEmNumeros
