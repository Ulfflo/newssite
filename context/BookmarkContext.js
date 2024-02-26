import React, { createContext, useContext, useState, useEffect } from "react";

const BookmarkContext = createContext();

export const useBookmarkContext = () => useContext(BookmarkContext);

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    // Get bookmarks from localStorage
    const storedBookmarks = localStorage.getItem("bookmarks");
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);

  const toggleBookmark = (article) => {
    const isBookmarked = bookmarks.some(
      (bookmark) => bookmark.article_id === article.article_id
    );
    let updatedBookmarks = [];

    if (isBookmarked) {
      // Remove article from bookmarks
      updatedBookmarks = bookmarks.filter(
        (bookmark) => bookmark.article_id !== article.article_id
      );
    } else {
      // Add article to bookmarks
      updatedBookmarks = [...bookmarks, article];
    }

    // Update state and localStorage
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};
