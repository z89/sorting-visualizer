import React, { useState, useEffect } from "react";

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
let selected, pressed;
async function BubbleSort(props) {
  // for (var j = 0; j < props.length; j++) {
  //   await wait(100);
  //   if (props[i] > props[j]) {
  //     let temp = props[i];
  //     props[i] = props[j];
  //     props[j] = temp;

  //     // console.log(props); // rendered each itteration
  //   }
  // }
  for (var i = 0; i < props.length; i++) {
    document.getElementsByClassName(props[i]).style += { backgroundColor: "green" };
    await wait(100);
    if (props[i] > props[i + 1]) {
      selected = props[i];
      let temp = props[i];
      props[i] = props[i + 1];
      props[i + 1] = temp;
    }
    console.log(props);
  }

  return props;
}

// backgroundColor: "blue",
//   //         marginBottom: "10px",
//   //         width: item + "%",
//   //         height: "25px",

function Book(props) {
  const { div, onClick, selectedChoice } = props;
  console.log(selectedChoice);
  return (
    <div
      style={{
        backgroundColor: "blue",
        marginBottom: "10px",
        width: div + "%",
        height: "25px",
      }}
      onClick={() => {
        console.log("div clicked");
      }}
    >
      <p>{div}</p>
    </div>
  );
}

const Homepage = () => {
  let [data, setData] = useState([64, 43, 59, 15, 59, 12, 34, 68]);
  const [selectedAnswer, setAnswer] = useState();

  useEffect(() => {
    console.log("array updated");
    // console.log("selected: " + selected);
    // console.log(data);
  }, [data]);

  return (
    <>
      <h1>Sorting Visualizer</h1>
      <button
        onClick={async () => {
          console.log("start");
          pressed = true;
          for (var i = 0; i < data.length; i++) {
            setData([...(await BubbleSort(data, i))]);
            // document.getElementsByClassName(selected).style.color += "red";
            console.log(selected);
          }
          console.log("finished");
          pressed = false;
        }}
      >
        sort
      </button>
      {data.map((item) => (
        <Book div={item} onClick={(selectedAnswer) => setAnswer(selectedAnswer)} selectedChoice={selectedAnswer} />
      ))}
    </>
  );

  // let current = data.map((item, index) => {
  //   return (
  //     <div
  //       className={selected === this.key ? "active" : ""}
  //       style={{
  //         backgroundColor: "blue",
  //         marginBottom: "10px",
  //         width: item + "%",
  //         height: "25px",
  //       }}
  //       key={index}
  //     >
  //       {item}
  //     </div>
  //   );
  // });

  // return (
  //   <>
  //     <h1>Sorting Visualizer</h1>
  //     <button
  //       onClick={async () => {
  //         console.log("start");
  //         pressed = true;
  //         for (var i = 0; i < data.length; i++) {
  //           setData([...(await BubbleSort(data, i))]);
  //           // document.getElementsByClassName(selected).style.color += "red";
  //           console.log(selected);
  //         }
  //         console.log("finished");
  //         pressed = false;
  //       }}
  //     >
  //       sort
  //     </button>

  //     <div>{current}</div>
  //   </>
  // );
};

export default Homepage;
