const arr = [1, 2, 8, 4, 5, 3, 20, 50, 100, 15, 12, 99, 1500, 293, 495911, 3, 5];
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const Homepage = () => {
  async function handleClick() {
    let temp = arr;

    let len = temp.length;
    let checked;
    do {
      checked = false;
      for (let i = 0; i < len; i++) {
        await sleep(250);
        console.log(arr);
        if (temp[i] > temp[i + 1]) {
          let tmp = temp[i];
          temp[i] = temp[i + 1];
          temp[i + 1] = tmp;
          checked = true;
        }
      }
    } while (checked);

    await sleep(2000); //wait 5 seconds
    console.log(arr);
  }

  return (
    <>
      <div className="home">
        <h1>sada</h1>
        <button onClick={handleClick}>Click me</button>
      </div>
    </>
  );
};

export default Homepage;
