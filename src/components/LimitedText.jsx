import React from "react";

const LimitedText = ({ text, maxLength = 200 }) => {
  if (!text) return <p>내용 없음 내용 없음 내용 없음</p>;

  const limitedtext =
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  return <div><p className="">{limitedtext}</p></div>;
};

export default LimitedText;
