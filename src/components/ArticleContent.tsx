import type { ArticleContentType } from '@/types/article';

type Props = {
  articleContent: ArticleContentType;
  index: number;
};

const ArticleContent: React.FC<Props> = ({ articleContent, index }) => {
  return (
    <li
      className='mt-[35px] flex first:mt-0 lg:mt-[70px]'
      key={articleContent.fieldId}
    >
      <div className='flex h-[32px] shrink-0 flex-col justify-between lg:h-[42px]'>
        <span className='font-ibmPlexSans text-[24px] font-medium leading-[1] tracking-[0.05em] lg:text-[32px]'>
          {('00' + String(index + 1)).slice(-2)}
        </span>
        <span className='block h-[3px] bg-black lg:h-[4px]'></span>
      </div>
      <div className='ml-[20px] lg:ml-[50px]'>
        <h2 className='inline-block bg-black px-[8px] py-[3px] text-[19px] font-bold leading-[1.4] tracking-[0.04em] text-white lg:px-[10px] lg:py-[4px] lg:text-[24px]'>
          {articleContent.title}
        </h2>
        <ul className='mt-[10px] flex flex-wrap gap-[8px] lg:mt-[14px] lg:gap-[10px]'>
          {articleContent.tags.map((tag) => (
            <li
              className='text-[10px] leading-[1] tracking-[0.02em] lg:text-[12px]'
              key={tag.id}
            >
              #{tag.name}
            </li>
          ))}
        </ul>
        {articleContent.description && (
          <p className='mt-[14px] whitespace-pre-wrap border-l-[2px] border-fkrk-purple pl-[8px] text-[14px] leading-[1.6] tracking-[0.04em] text-fkrk-purple lg:mt-[20px] lg:pl-[12px] lg:text-[16px]'>
            {articleContent.description}
          </p>
        )}
      </div>
    </li>
  );
};

export default ArticleContent;
