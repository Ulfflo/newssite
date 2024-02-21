import News from "./news";

export async function getStaticProps() {
  const res = await fetch(
    `https://newsapi.org/v2/everything?domains=bbc.co.uk&apiKey=e867d5f7fde746aabe8271cff82effcc`
  );
  const data = await res.json();

  return {
    props: {
      news: data.articles,
    },
  };
}

export default function Home({ news }) {
  return (
    <main>
      <News news={news} />
    </main>
  );
}
