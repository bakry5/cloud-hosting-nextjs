import AddCommentForm from "@/components/comments/AddCommentForm";
import CommentItem from "@/components/comments/CommentItem";
import { SingleArticle } from "@/utils/types";
import { cookies } from "next/headers";
import { verifyTokenForPage } from "@/utils/verifyToken";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";
import Link from "next/link";

interface SingleArticlePageProps {
    params: { id: string }
}

const SingleArticlePage = async ({ params }: SingleArticlePageProps) => {
    const token = cookies().get("jwtToken")?.value || "";
    const payload = verifyTokenForPage(token);

    const article = await prisma.article.findUnique({
        where: { id: parseInt(params.id) },
        include: {
            Comments: {
                include: {
                    user: {
                        select: {
                            username: true,
                        }
                    }
                },
                orderBy: {
                    createdAt: 'desc'
                }
            }
        }
    }) as SingleArticle;

    if(!article){
       redirect("/not-found");
    }

    const commentCount = article.Comments.length;
    const formattedDate = new Date(article.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-brand-light/30">
            {/* Hero Header */}
            <div className="bg-gradient-to-r from-brand-dark via-brand to-brand-accent relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
                <div className="container mx-auto px-5 pt-24 pb-16 md:w-3/4 relative z-10">
                    <Link 
                        href="/articles" 
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors duration-200 group"
                    >
                        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="font-medium">Back to Articles</span>
                    </Link>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight animate-fade-in-up">
                        {article.title}
                    </h1>
                    <div className="flex items-center gap-4 text-white/90">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="font-medium">{formattedDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span className="font-medium">{commentCount} {commentCount === 1 ? 'Comment' : 'Comments'}</span>
                        </div>
                    </div>
                </div>
                {/* Decorative wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 md:h-24">
                        <path d="M0 50L48 45.7C96 41.3 192 32.7 288 30.2C384 27.7 480 31.3 576 38.8C672 46.3 768 57.7 864 61.2C960 64.7 1056 60.3 1152 54.5C1248 48.7 1344 41.3 1392 37.7L1440 34V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="currentColor" className="text-slate-50"/>
                    </svg>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-5 md:w-3/4 -mt-4 pb-16">
                {/* Article Body */}
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100 mb-8 animate-fade-in-up">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-slate-700 text-xl md:text-2xl leading-relaxed font-medium text-slate-600">
                            {article.description}
                        </p>
                    </div>
                </div>

                {/* Comment Form */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand to-brand-accent rounded-xl flex items-center justify-center shadow-md">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">Join the Discussion</h3>
                    </div>
                    {payload ? (
                        <AddCommentForm articleId={article.id} />
                    ) : (
                        <div className="bg-gradient-to-r from-brand-light to-purple-50 border border-brand/20 rounded-xl p-6 text-center">
                            <svg className="w-12 h-12 mx-auto text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <p className="text-brand-dark font-semibold text-lg mb-2">Want to share your thoughts?</p>
                            <Link 
                                href="/login" 
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand to-brand-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                                Sign In to Comment
                            </Link>
                        </div>
                    )}
                </div>

                {/* Comments Section */}
                <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl flex items-center justify-center shadow-md">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-800">Comments</h3>
                                <p className="text-slate-500 text-sm">{commentCount} {commentCount === 1 ? 'response' : 'responses'}</p>
                            </div>
                        </div>
                    </div>
                    
                    {commentCount > 0 ? (
                        <div className="space-y-4">
                            {article.Comments.map((comment, index) => (
                                <div 
                                    key={comment.id} 
                                    className="animate-fade-in-up"
                                    style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                                >
                                    <CommentItem comment={comment} userId={payload?.id} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 p-12 text-center">
                            <svg className="w-16 h-16 mx-auto text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <p className="text-slate-500 text-lg font-medium">No comments yet</p>
                            <p className="text-slate-400 mt-1">Be the first to share your thoughts!</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default SingleArticlePage;