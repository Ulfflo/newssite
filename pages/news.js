import Link from "next/link";

const DIN_API_NYCKEL = "pub_38635164661fa0409ed8deff90d8c8a3b655b";

//newsdata.io/api/1/news?apikey=pub_38158964e5638dbf5b237b29d3be5bf1a5b9d&q=pizza

export async function getStaticProps() {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}&q=pizza`
  );
  const data = await res.json();
  console.log(data);

  return {
    props: {
      news: data.results,
    },
  };
}

export default function News({ news }) {
  return (
    <div>
      <ul>
        {news.map((article) => (
          <li>
            <Link href={`/article/${article.article_id}`}>
              <h2>{article.title}</h2>
            </Link>
            <img src={article.image_url} />
          </li>
        ))}
      </ul>
    </div>
  );
}
