import Head from "next/head";
import Image from "next/image";
import Animation from "../../components/home/animation";
import Hero from "../../components/home/hero";
import Layout from "../../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title> 호덩이의 포트폴리오</title>
        <meta name="description" content="인생은 onmyway!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
