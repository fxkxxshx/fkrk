import { GetStaticProps, NextPage } from 'next';

import Article from '@/components/Article';
import Header from '@/components/Header';
import MyHead from '@/components/MyHead';
import { client } from '@/libs/client';
import type { ArticleType } from '@/types/article';

type Props = {
  articles: ArticleType[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.get({
    endpoint: 'article',
    queries: {
      limit: 365,
      orders: '-articleDate',
    },
  });

  return {
    props: {
      articles: data.contents,
    },
  };
};

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <MyHead />
      <div className='flex'>
        <Header />
        <main className='ml-[20px] w-full py-[55px] lg:mx-auto lg:max-w-[1346px] lg:py-[110px] lg:px-[98px]'>
          {articles.map((article) => (
            <Article
              key={article.id}
              article={article}
            />
          ))}
        </main>
      </div>
    </>
  );
};

export default Home;
