const ArticleBlock = ({
  title,
  img = "https://source.unsplash.com/random/200×200",
}) => {
  return (
    <div className='w-72'>
      <img src={img} alt='article-img' className='h-96 w-72 object-cover' />
      <p className='text-xl line-clamp-2 ml-2'>{title}</p>
    </div>
  );
};

export default ArticleBlock;
