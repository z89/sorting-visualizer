import React, { useState, useEffect } from "react";

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function BubbleSort(props, i) {
  await wait(1000);
  for (var j = 0; j < props.length; j++) {
    if (props[i] > props[j]) {
      let temp = props[i];
      props[i] = props[j];
      props[j] = temp;

      // console.log(props); // rendered each itteration
    }
  }

  return props;
}

const Homepage = () => {
  let [data, setData] = useState([64, 43, 59, 25, 59, 62, 34, 15, 68]);

  useEffect(() => {
    console.log("array updated");
    console.log(data);
  }, [data]);

  let current = data.map((item, index) => {
    // console.log(index + ": " + data[index]);

    // console.log();
    return (
      <div
        id={index}
        style={{ backgroundColor: "blue", marginBottom: "10px", width: item + "%", height: "25px" }}
        key={index}
      >
        {item}
      </div>
    );
  });

  return (
    <>
      <h1>Sorting Visualizer</h1>
      <button
        onClick={async () => {
          for (var i = 0; i < data.length; i++) {
            setData([...(await BubbleSort(data, i))]);
          }
        }}
      >
        sort
      </button>

      <div>{current}</div>
    </>
  );
};

export default Homepage;
