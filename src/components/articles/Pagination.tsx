import Link from "next/link";

interface PaginationProps {
  pages: number;
  pageNumber: number;
  route: string;
}

const Pagination = ({ pageNumber, pages, route }: PaginationProps) => {
  let pagesArray: number[] = [];
  for (let i = 1; i <= pages; i++) pagesArray.push(i);

  const prev = pageNumber - 1;
  const next = pageNumber + 1;

  if (pages <= 1) return null;

  return (
    <div className='flex items-center justify-center gap-2 mt-12 mb-16'>
      {pageNumber !== 1 && (
        <Link href={`${route}?pageNumber=${prev}`} className="px-4 py-2 font-semibold rounded-lg text-slate-600 bg-slate-100 hover:bg-brand hover:text-white transition-all shadow-sm hover:shadow">
          Prev
        </Link>
      )}
      
      {pagesArray.map(page => (
        <Link 
          href={`${route}?pageNumber=${page}`} 
          className={`w-10 h-10 flex items-center justify-center font-bold rounded-lg transition-all shadow-sm hover:shadow
            ${pageNumber === page ? "bg-brand text-white ring-2 ring-brand ring-offset-2" : "bg-white text-slate-600 hover:bg-slate-100 hover:text-brand"}
          `} 
          key={page}
        >
          {page}
        </Link>
      ))}
      
      {pageNumber !== pages && (
        <Link href={`${route}?pageNumber=${next}`} className="px-4 py-2 font-semibold rounded-lg text-slate-600 bg-slate-100 hover:bg-brand hover:text-white transition-all shadow-sm hover:shadow">
          Next
        </Link>
      )}
    </div>
  )
}

export default Pagination;