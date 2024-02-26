import ArticlePreview from "./ArticlePreview";

export default function NewsGrid({ articles, category }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center items-center max-w-fit">
        {articles.map((item, i) => {
          return (
            <ArticlePreview
              key={i}
              id={item.id}
              item={item}
              category={category}
            ></ArticlePreview>
          );
        })}
      </div>
    </div>
  );
}
