import Layout from "@/components/Layout";
import NewsGrid from "@/components/Newsgrid";
import { useEffect, useState } from "react";

const API_KEY = "pub_38637457017fb3ac85b182d167032a301cf5b";
const ULF_KEY = "pub_38635164661fa0409ed8deff90d8c8a3b655b";
const ASA_KEY = "pub_3884182ca65aa4cda8ba64f7286674cf809fd";

// hook for local storage
function useStorageState(key, initialState) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialState;
    } catch (error) {
      console.error("Error loading state from localStorage: ", error);
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

export default function Home({ news }) {
  // const [bookmarks, setBookmarks] = useStorageState("bookmarks", []);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // fetch(`https://newsapi.org/v2/everything?apiKey=${DIN_API_NYCKEL}&q=top`)
    fetch(
      `https://newsdata.io/api/1/news?apikey=${ULF_KEY}&country=us&language=en&category=top `
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        const filteredArticles = data.results.filter(
          (article) => article.image_url
        );
        setArticles(filteredArticles);
      });
  }, []);

  //function for bookmarks
  const handleBookmark = (articleId) => {
    const index = bookmarks.indexOf(articleId);
    if (index === -1) {
      const newBookmark = [...bookmarks, articleId];
      setBookmarks(newBookmark);
    } else {
      const newBookmark = bookmarks.filter((id) => id !== articleId);
      setBookmarks(newBookmark);
    }
  };

  return (
    <Layout>
      <div>
        <NewsGrid news={news} articles={articles} category="article" />
      </div>
    </Layout>
  );
}

{
  /* <ul>
        {news &&
          news.map((article) => (
            <li key={article.article_id}>
              <Link href={`/article/${article.article_id}`}>
                <h2>{article.title}</h2>
              </Link>
              <img src={article.image_url} />
              <button onClick={() => handleBookmark(article.article_id)}>
                {bookmarks.includes(article.article_id)
                  ? "Remove bookmark"
                  : "Bookmark"}
              </button>
            </li>
          ))}
      </ul> */
}
