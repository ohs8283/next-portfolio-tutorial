import Head from "next/head";
import Layout from "../../components/layout";
import { TOKEN, DATABASE_ID } from "../../config";

export default function Projects({ projects }) {
  console.log(projects);

  return (
    <Layout>
      <Head>
        <title> 호덩이의 포트폴리오</title>
        <meta name="description" content="인생은 onmyway!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>총 프로젝트 : {projects.length}</h1>

      {projects.results.map((aProject) => (
        <h1>{aProject.properties.Name.title[0].plain_text}</h1>
      ))}
    </Layout>
  );
}

// 빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  const projectIds = projects.results.map(
    (aProject) => aProject.properties.Name.title[0].plain_text
  );

  console.log(`projectNames : ${projectNames}`);

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
