import type { ArticleType } from '@/types/article';

import ArticleContent from './ArticleContent';
import ArticleDate from './ArticleDate';

type Props = {
  article: ArticleType;
};

const Article: React.FC<Props> = ({ article }) => {
  return (
    <article className='relative mt-[42px] pr-[20px] before:absolute before:top-[27px] before:right-0 before:bottom-[8px] before:left-[15px] before:z-0 before:block before:bg-white first:mt-0 lg:mt-[88px] lg:pr-0 lg:before:inset-x-[20px] lg:before:top-[30px] lg:before:bottom-[12px]'>
      <div className='relative z-10'>
        <ArticleDate articleDate={article.articleDate} />
        <ol className='mt-[35px] lg:mt-[110px] lg:pr-[70px]'>
          {article.articleContents.map((articleContent, index) => (
            <ArticleContent
              articleContent={articleContent}
              index={index}
              key={articleContent.fieldId}
            />
          ))}
        </ol>
        <p className='mt-[47px] text-right font-ibmPlexSans text-[16px] leading-[1] tracking-[0.1em] lg:mt-[98px] lg:text-[24px]'>
          &copy;2024 fkxsh
        </p>
      </div>
    </article>
  );
};

export default Article;
