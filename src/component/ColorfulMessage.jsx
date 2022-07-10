import React from "react";

// export を「const ColorfulMessage」の前につけることでも可能

export const ColorfulMessage = (props) => {
  // 下の記載によって、"props."の記載なしに引数のように使える
  const { color, children } = props;
  const contentStyle = {
    color, //colorに対してcolorというpropsを渡すときは記載を省略できる
    fontSize: "18px"
  };
  // JavaScriptで記載するときは{}で囲む！

  // props.childrenとするとタグで囲んだ中身に記載した内容を受け取ることができる
  return <p style={contentStyle}>{children}</p>;
};

//export default ColorfulMessage;
