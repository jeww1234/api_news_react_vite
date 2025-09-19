import React from "react";

const PageNation = ({ news }) => {
  let totalResult = news.length;
  console.log("total", totalResult);
  let page = 1;
  const pageSize = 5;
  const groupSize = 5;
  const pageGroup = Math.ceil(page / groupSize);
  const lastPage = pageGroup * groupSize;
  const firstPage = lastPage - (groupSize - 1);

  return (
    <div className="flex justify-center">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  );
};

export default PageNation;
