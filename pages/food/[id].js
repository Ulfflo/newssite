const API_KEY = "pub_38637457017fb3ac85b182d167032a301cf5b";
const ULF_KEY = "pub_38635164661fa0409ed8deff90d8c8a3b655b";
const ASA_KEY = "pub_3884182ca65aa4cda8ba64f7286674cf809fd";

export async function getStaticPaths() {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${ULF_KEY}&category=food&language=en`
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
    `https://newsdata.io/api/1/news?apikey=${ULF_KEY}&category=food&language=en`
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

export default function FoodArticle({ article }) {
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
