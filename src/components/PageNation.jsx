const PageNation = ({ news, pageSize, page, setPage }) => {
  const totalResult = news.length;
  const groupSize = 5;
  const totalPages = Math.ceil(totalResult / pageSize);

  const pageGroup = Math.ceil(page / groupSize);
  const lastPage = Math.min(pageGroup * groupSize, totalPages);
  const firstPage = lastPage - (groupSize - 1);

  const handleClick = (pageNum) => {
    console.log(pageNum);
    setPage(pageNum);
  };

  const renderPages = () => {
    const pages = [];
    for (let i = firstPage; i <= lastPage; i++) {
      pages.push(
        <button key={i} onClick={() => handleClick(i)} className={`${i === page ? "bg-[skyblue]" : ""}  m-[5px]`}>
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex justify-center my-[5vh]">
      <button className={page === 1 ? "hidden" : ""} onClick={()=>setPage(1)}>&lt;&lt;</button>
      <button className={page === 1 ? "hidden" : ""} onClick={() => setPage(Math.max(page - 1, 1))}>&lt;</button>
      {renderPages()}
      <button className={page === totalPages ? "hidden" : ""} onClick={() => setPage(Math.min(page + 1, totalPages))}>&gt;</button>
      <button className={page === totalPages ? "hidden" : ""} onClick={()=>setPage(totalPages)}>&gt;&gt;</button>
    </div>
  );
};

export default PageNation;
