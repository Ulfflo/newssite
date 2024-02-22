////FLYTTAT ÖVER TILL INDEX!!!!! //////
////FLYTTAT ÖVER TILL INDEX!!!!! //////
////FLYTTAT ÖVER TILL INDEX!!!!! //////
////FLYTTAT ÖVER TILL INDEX!!!!! //////
////FLYTTAT ÖVER TILL INDEX!!!!! //////
////FLYTTAT ÖVER TILL INDEX!!!!! //////
////FLYTTAT ÖVER TILL INDEX!!!!! //////
////FLYTTAT ÖVER TILL INDEX!!!!! //////
////FLYTTAT ÖVER TILL INDEX!!!!! //////
////FLYTTAT ÖVER TILL INDEX!!!!! //////
////FLYTTAT ÖVER TILL INDEX!!!!! //////
////FLYTTAT ÖVER TILL INDEX!!!!! //////
////FLYTTAT ÖVER TILL INDEX!!!!! //////
////FLYTTAT ÖVER TILL INDEX!!!!! //////
////FLYTTAT ÖVER TILL INDEX!!!!! //////
////FLYTTAT ÖVER TILL INDEX!!!!! //////
////FLYTTAT ÖVER TILL INDEX!!!!! //////
////FLYTTAT ÖVER TILL INDEX!!!!! //////
////FLYTTAT ÖVER TILL INDEX!!!!! //////
////FLYTTAT ÖVER TILL INDEX!!!!! //////
//Åsa

import Link from "next/link";
import { useState, useEffect } from "react";
import ArticlePreview from "@/components/ArticlePreview";

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
      {/* <ul>
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
      </ul> */}
      <div>
        <div className="grid grid-cols-3 gap-8 justify-center items-center max-w-fit">
          {news.map((item, i) => {
            return <ArticlePreview key={i} item={item}></ArticlePreview>;
          })}
        </div>
      </div>
    </div>
  );
}
