import API_KEY from "@/components/ApiKeys";

const API_NYCKEL = API_KEY;

export async function getStaticPaths() {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${API_NYCKEL}&category=entertainment&language=en`
  );
  const data = await res.json();

  const articles = data.results;
  console.log(articles);
  console.log(JSON.stringify(articles.category));

  const paths = articles.map((article) => ({
    params: { id: article.article_id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${API_NYCKEL}&category=entertainment&language=en`
  );
  const data = await res.json();

  const articles = data.results;

  const article = articles.find((article) => article.article_id == params.id);

  return {
    props: {
      article,
    },
  };
}

export default function EntertainmentArticle({ article }) {
  return (
    <div className="flex-col w-[600px] text-center bg-white p-8">
      {article && (
        <>
          <h2 className="w-[600px] text-left mb-8">{article.title}</h2>
          <img className="w-full" src={article.image_url} />
          <div className="flex-col text-left">
            <span className="text-xs italic ">
              Source: {article.source_url}
            </span>
            <p className="mt-4">{article.description}</p>
          </div>
        </>
      )}
    </div>
  );
}
