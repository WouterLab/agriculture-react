import { useEffect, useRef, useState } from "react";

const ArticleBlock = ({
  title,
  img = "https://source.unsplash.com/random/200×200",
}) => {
  const imageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.onload = () => setIsLoading(true);
    }
  }, []);

  return (
    <div className='w-72'>
      <img
        src={img}
        ref={imageRef}
        alt='article-img'
        className={`h-96 w-72 object-cover ${isLoading ? "block" : "hidden"}`}
      />
      <div
        className={`h-96 w-72 skeleton ${!isLoading ? "block" : "hidden"}`}
      />
      <p className='text-xl line-clamp-2 ml-2'>{title}</p>
    </div>
  );
};

export default ArticleBlock;
