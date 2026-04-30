import { Article, Comment, User } from "@prisma/client";

export type JWTPayload = {
    id: number;
    admin: boolean;
    username: string;
}

export type CommentWithUser = Comment & { user: User };

export type SingleArticle = Article & { Comments: CommentWithUser[] };