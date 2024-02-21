import Link from "next/link";

// const DIN_API_NYCKEL = "";

//newsdata.io/api/1/news?apikey=pub_38158964e5638dbf5b237b29d3be5bf1a5b9d&q=pizza

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

export default function News({ news }) {
  return (
    <div>
      <ul>
        {news.map((article) => (
          <li>
            <Link href={`/article/${article.url}`}>
              <h2>{article.title}</h2>
            </Link>
            <img src={article.urlToImage} />
          </li>
        ))}
      </ul>
    </div>
  );
}
