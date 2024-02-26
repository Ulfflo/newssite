import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { useBookmarkContext } from "@/context/BookmarkContext";

function ArticlePreview({ item, category }) {
  const { bookmarks, toggleBookmark } = useBookmarkContext();

  if (!item) {
    return null;
  }

  const isBookmarked = bookmarks.some(
    (bookmark) => bookmark.article_id === item.article_id
  );

  const handleBookmarkToggle = () => {
    toggleBookmark(item);
  };

  return (
    <div className="bg-white w-[25em] h-[28em] overflow-hidden no-underline text-black pb-[0.5em] shadow-md flex-col relative">
      <a
        href={`/${category}/${item.article_id}`}
        className="block w-full h-full no-underline text-black"
      >
        <div>
          <img
            className="w-full h-[14em] object-cover mb-[0.5em] relative"
            src={item.image_url}
            alt={item.title}
          />
        </div>
        <div className="flex-col p-4 justify-between">
          <h2 className="mb-[0.5em]">{item.title}</h2>
          <p className="mr-4 max-h-14 overflow-hidden">{item.description}</p>
        </div>
      </a>
      <div className="absolute bottom-4 right-4">
        <button
          onClick={handleBookmarkToggle}
          className="p-0 bg-transparent border-0 text-lg"
        >
          {isBookmarked ? <IoBookmark /> : <IoBookmarkOutline />}
        </button>
      </div>
    </div>
  );
}

export default ArticlePreview;
