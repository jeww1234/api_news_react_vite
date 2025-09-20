const PageNation = ({ news, pageSize, page, setPage }) => {
  const totalResult = news.length;
  const groupSize = 5;
  const totalPages = Math.max(1, Math.ceil(totalResult / pageSize));

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
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={`${i === page ? "bg-[skyblue]" : ""}  m-[5px] px-[10px]`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex justify-center my-[5vh] cursor-pointer">
      <div
        className={`${page === 1 ? "hidden" : ""} p-[5px]`}
        onClick={() => setPage(1)}
      >
        &lt;&lt;
      </div>
      <div
        className={`${page === 1 ? "hidden" : ""} p-[5px]`}
        onClick={() => setPage(Math.max(page - 1, 1))}
      >
        &lt;
      </div>
      {renderPages()}
      <div
        className={`${page === totalPages ? "hidden" : ""} p-[5px]`}
        onClick={() => setPage(Math.min(page + 1, totalPages))}
      >
        &gt;
      </div>
      <div
        className={`${page === totalPages ? "hidden" : "p-[5px]"}`}
        onClick={() => setPage(totalPages)}
      >
        &gt;&gt;
      </div>
    </div>
  );
};

export default PageNation;
