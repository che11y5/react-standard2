import React, { useState } from "react";
import ColorfulMessage from "./component/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
    console.log(num);
  };

  // const [state, stateを更新する関数] = useState(初期値);
  const [num, setNum] = useState(0);

  return (
    //⇩ <> = <React.Fragment
    <React.Fragment>
      <h1
        // styleは以下のように定義できる
        style={{
          color: "red"
        }}
      >
        こんにちは
      </h1>
      {/* オブジェクトとしてstyleを定義することもできる */}
      {/* ⇩　propとして渡す名称を後に記載 */}
      <ColorfulMessage color="blue" message="お元気ですか">
        How Are you?
      </ColorfulMessage>
      <ColorfulMessage color="pink" message="お元気ですか">
        I'm fine!!
      </ColorfulMessage>
      <p>{num}</p>
      <button onClick={onClickCountUp}>CountUp</button>
    </React.Fragment>
  );
};

export default App;
