import Link from "next/link";
import { Article } from '@prisma/client';

interface ArticleItemProps {
  article: Article;
}

const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <div className="bg-surface p-6 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 hover:border-brand/20 hover:-translate-y-1 transition-all duration-300 w-full md:w-[45%] lg:w-[30%] flex flex-col group">
      <h3 className="text-2xl font-bold text-slate-800 line-clamp-2 group-hover:text-brand transition-colors mb-3">
        {article.title}
      </h3>
      <p className="text-slate-500 text-lg line-clamp-3 mb-6 flex-grow">
        {article.description}
      </p>
      <Link className="px-6 py-2.5 bg-slate-100 hover:bg-brand text-slate-700 font-semibold hover:text-white rounded-lg text-center transition-all duration-300 shadow-sm hover:shadow-md mt-auto" href={`/articles/${article.id}`}>
        Read More
      </Link>
    </div>
  )
}

export default ArticleItem