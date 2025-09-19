
const PageNation = ({ news, pageSize, page, setPage }) => {
  const totalResult = news.length;
  const groupSize = 5;
  const totalPages = Math.ceil(totalResult / pageSize);  

  const pageGroup = Math.ceil(page / groupSize);
  const lastPage = pageGroup * groupSize;
  const firstPage = lastPage - (groupSize - 1);

  const handleClick = (pageNum) => {
    console.log(pageNum)
    setPage(pageNum);
  };

  const renderPages = () => {
    const pages = [];
    for (let i = firstPage; i <= lastPage; i++) {
      pages.push(
        <button key={i} onClick={() => handleClick(i)} className="m-[5px]">
          {i}
        </button>
      );
    }
    return pages;
  };

  return <div className="flex justify-center">{renderPages()}</div>;
};

export default PageNation;
