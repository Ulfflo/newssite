import Link from "next/link";
import { useState, useEffect } from "react";

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

export default function News({ news }) {
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
    <div>
      <ul>
        {news.map((article) => (
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
      </ul>
    </div>
  );
}
