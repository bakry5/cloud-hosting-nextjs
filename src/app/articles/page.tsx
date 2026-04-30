import ArticleItem from "@/components/articles/ArticleItem";
import Pagination from "@/components/articles/Pagination";
import SearchArticleInput from "@/components/articles/SearchArticleInput";
import { Article } from '@prisma/client';
import type { Metadata } from 'next';
import { ARTICLE_PER_PAGE } from "@/utils/constants";
import prisma from "@/utils/db";

interface ArticlesPageProps {
  searchParams: { pageNumber: string }
}

const ArticlesPage = async ({ searchParams } : ArticlesPageProps) => {
  const pageNumber = searchParams.pageNumber || "1";
  const articles: Article[] = await prisma.article.findMany({
    skip: ARTICLE_PER_PAGE * (parseInt(pageNumber) - 1),
    take: ARTICLE_PER_PAGE,
    orderBy: { createdAt: 'desc' }
  });
  const count:number = await prisma.article.count();

  const pages = Math.ceil(count / ARTICLE_PER_PAGE);

  return (
    <section className="container m-auto px-5  flex flex-col min-h-[calc(81.3vh)]">
      <SearchArticleInput  />
      <div className="flex items-center justify-center flex-wrap gap-7 flex-1">
        {articles.map(item => (
          <ArticleItem article={item} key={item.id} />
        ))}
      </div>
      <Pagination pageNumber={parseInt(pageNumber)} route="/articles" pages={pages} />
    </section>
  )
}

export default ArticlesPage;

export const metadata: Metadata = {
  title: 'Articles Page',
  description: 'Articles about programming',
}