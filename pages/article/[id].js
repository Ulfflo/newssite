const DIN_API_NYCKEL = "";

export async function getStaticPaths() {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}&q=pizza`
  );
  const data = await res.json();

  const articles = data.results;

  const paths = articles.map((article) => ({
    params: { id: article.article_id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://newsapi.org/v2/everything?domains=bbc.co.uk&apiKey=e867d5f7fde746aabe8271cff82effcc`
  );
  const data = await res.json();

  const articles = data.articles;

  const article = articles.find((article) => article.url === params.id);

  return {
    props: {
      article,
    },
  };
}

export default function Article({ article }) {
  return (
    <div>
      {article && (
        <>
          <h2>{article.title}</h2>
          <img src={article.urlToImage} />
        </>
      )}
    </div>
  );
}
