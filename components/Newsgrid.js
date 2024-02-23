import ArticlePreview from "./ArticlePreview";

export default function NewsGrid({ articles }) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-8 justify-center items-center max-w-fit">
        {articles.map((item, i) => {
          return (
            <ArticlePreview key={i} id={item.id} item={item}></ArticlePreview>
          );
        })}
      </div>
    </div>
  );
}
