import NewsGrid from "@/components/NewsGrid";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";

const DIN_API_NYCKEL = "76552078f7d24022ae49c16ed222bcd9";

const SportsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://newsapi.org/v2/everything?apiKey=${DIN_API_NYCKEL}&q=entertainment`
      );
      const data = await res.json();

      //Filtrerar ut artiklar utan bild
      const filteredNews = data.articles.filter(
        (article) => article.urlToImage
      );

      setNews(filteredNews);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold mb-4">Entertainment News</h1>
        <NewsGrid news={news} />
      </div>
    </Layout>
  );
};

export default SportsPage;
