export type ArticleType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  articleDate: string;
  articleContents: ArticleContentType[];
};

export type ArticleContentType = {
  fieldId: string;
  title: string;
  tags: [
    {
      id: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      revisedAt: string;
      name: string;
    }
  ];
  description?: string;
};
