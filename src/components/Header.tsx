import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className='sticky top-0 left-0 h-[180px] w-[47px] shrink-0 lg:h-[360px] lg:w-[94px]'>
      <h1>
        <Image
          src='/img/title.jpg'
          alt='fkrk ふかいしのきろく'
          width={188}
          height={720}
        />
      </h1>
    </header>
  );
};

export default Header;
