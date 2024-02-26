import NewsGrid from "@/components/Newsgrid";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import API_KEY from "@/components/ApiKeys";

const API_NYCKEL = API_KEY;

export default function Food() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://newsdata.io/api/1/news?apikey=${API_NYCKEL}&category=food&language=en`
      );
      const data = await res.json();

      console.log("API Response:", data.results);

      //Filtrerar ut artiklar utan bild
      const filteredNews = data.results.filter((article) => article.image_url);

      setNews(filteredNews);
    };

    fetchData();
  }, []);

  console.log("News State:", news);

  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold mb-4">Food News</h1>
        <NewsGrid articles={news} category="food" />
      </div>
    </Layout>
  );
}
