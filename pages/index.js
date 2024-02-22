import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import NewsGrid from "@/components/Newsgrid";

const DIN_API_NYCKEL = "76552078f7d24022ae49c16ed222bcd9";

export async function getStaticProps() {
  const res = await fetch(
    `https://newsapi.org/v2/everything?apiKey=${DIN_API_NYCKEL}&q=top`
  );
  const data = await res.json();

  return {
    props: {
      news: data.articles,
    },
  };
}

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
  const [bookmarks, setBookmarks] = useStorageState("bookmarks", []);

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
        <NewsGrid news={news} />
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
