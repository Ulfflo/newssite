import Layout from "@/components/Layout";
import ArticlePreview from "@/components/ArticlePreview";
import { useBookmarkContext } from "@/context/BookmarkContext";


export default function BookmarksPage({category}) {
  const { bookmarks } = useBookmarkContext();
  console.log(bookmarks);

  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-semibold mb-4">Bookmarks</h1>
        {bookmarks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center items-center max-w-fit">
            {bookmarks.map((article, index) => (
              <ArticlePreview
                key={index}
                item={article}
                category={article.category}
              />
            ))}
          </div>
        ) : (
          <p>You have no bookmarked articles.</p>
        )}
      </div>
    </Layout>
  );
}
