import NewsGrid from "@/components/Newsgrid";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";

const API_KEY = "pub_38637457017fb3ac85b182d167032a301cf5b";
const ULF_KEY = "pub_38635164661fa0409ed8deff90d8c8a3b655b";
const ASA_KEY = "pub_3884182ca65aa4cda8ba64f7286674cf809fd";

export default function Entertainment() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://newsdata.io/api/1/news?apikey=${ULF_KEY}&category=entertainment&language=en`
      );
      const data = await res.json();

      console.log("API Response:", data.results);

      //Filtrerar ut artiklar utan bild
      const filteredNews = data.results.filter(
        (article) => article.image_url
      );

      setNews(filteredNews);
    };

    fetchData();
  }, []);

  console.log("News State:", news);

  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold mb-4">Entertainment News</h1>
        <NewsGrid articles={news} category="entertainment" />
      </div>
    </Layout>
  );
};


