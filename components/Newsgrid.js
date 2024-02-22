import ArticlePreview from "./ArticlePreview";

export default function NewsGrid({ news }) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-8 justify-center items-center max-w-fit">
        {news.map((item, i) => {
          return <ArticlePreview key={i} item={item}></ArticlePreview>;
        })}
      </div>
    </div>
  );
}
