import React, { useState, useLayoutEffect } from "react";

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function BubbleSort(props) {
  for (var i = 0; i < props.length; i++) {
    await wait(20);
    if (props[i] > props[i + 1]) {
      document.getElementsByClassName("div-" + props[i])[0].classList.add("active");
      // console.log("first: " + props[i] + " second: " + props[i + 1]);
      let temp = props[i];
      props[i] = props[i + 1];
      props[i + 1] = temp;
    }

    console.log(props);
  }
  return props;
}

function Div(props) {
  const { onChange, className, val } = props;

  return (
    <div
      className={className}
      style={{
        backgroundColor: "blue",
        marginBottom: "10px",
        width: val + "%",
        height: "25px",
      }}
      onClick={() => {
        console.log("div clicked");
      }}
      onChange={onChange}
    >
      <p>{val}</p>
    </div>
  );
}

function displayDivs(props) {
  return props.map((item) => <Div className={"div-" + item} val={item} key={Math.random()} />);
}

const Homepage = () => {
  let [data, setData] = useState([43, 59, 15, 51, 12, 93, 12, 93, 86, 40, 10, 8, 76, 37, 48, 46]);

  useLayoutEffect(() => {
    console.log("array updated");
  }, [data]);

  return (
    <>
      <h1>Sorting Visualizer [Bubble Sort] (Not Completed)</h1>
      <button
        onClick={async () => {
          console.log("start sorting..");

          for (var i = 0; i < data.length; i++) {
            setData([...(await BubbleSort(data))]);
          }

          console.log("finished sorting");
        }}
      >
        sort
      </button>

      {displayDivs(data)}
    </>
  );
};

export default Homepage;
