import dayjs from 'dayjs';

import type { ArticleType } from '@/types/article';

type Props = Pick<ArticleType, 'articleDate'>;

const ArticleDate: React.FC<Props> = ({ articleDate }) => {
  return (
    <time
      className='font-ibmPlexSans text-[36px] leading-[1.5] text-fkrk-purple lg:flex lg:justify-between lg:text-[60px] lg:leading-[1]'
      dateTime={dayjs(articleDate).format('YYYY-MM-DD')}
    >
      <span className='flex justify-between lg:contents'>
        {Array.from(dayjs(articleDate).format('YYYY/')).map((letter, index) => (
          <span key={`${letter}${index}`}>{letter}</span>
        ))}
      </span>
      <span className='flex justify-between lg:contents'>
        {Array.from(dayjs(articleDate).format('MM/DD')).map((letter, index) => (
          <span key={`${letter}${index}`}>{letter}</span>
        ))}
      </span>
    </time>
  );
};

export default ArticleDate;
