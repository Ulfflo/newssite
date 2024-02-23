import NewsGrid from "@/components/NewsGrid";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";

const DIN_API_NYCKEL = "37b28439e3ff4cf1af3a6868787b209d";

const Sports = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://newsapi.org/v2/everything?apiKey=${DIN_API_NYCKEL}&q=sports`
      );
      const data = await res.json();
      setNews(data.articles);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold mb-4">Sports News</h1>
        <NewsGrid news={news} />
      </div>
    </Layout>
  );
};

export default Sports;
