import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";

function ArticlePreview({ item }) {
  return (
    <a
      href={item.article_id}
      className="bg-white w-[25em] h-[28em] overflow-hidden no-underline text-black pb-[0.5em] shadow-md flex-col relative"
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
        <p className="pb-10">{item.description}</p>
        <div className="absolute bottom-4 right-4">
          <button className="p-0 bg-transparent border-0 text-lg">
            <IoBookmarkOutline />
          </button>
        </div>
      </div>
    </a>
  );
}

export default ArticlePreview;
