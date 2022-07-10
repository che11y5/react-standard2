import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./component/ColorfulMessage";
//↑名称を確約できるというメリットもある

// 再レンダリングされるタイミングを大事に！
const App = () => {
  // const [state, stateを更新する関数] = useState(初期値);
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
    console.log(num);
  };

  const onClickSwitchFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // []だと最初の一回だけ。変数を指定するとそのStateが変更される度に走る
  useEffect(() => {
    console.log("useEffect!!");

    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
    //eslint-disable-next-line
  }, [num]);

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
      <button onClick={onClickCountUp}>CountUp</button>
      <p>{num}</p>
      <button onClick={onClickSwitchFlag}>on/off</button>
      {faceShowFlag && <p>(^^)</p>}
    </React.Fragment>
  );
};

export default App;
