import { useState } from "react";

function RandomNumber() {
  const [startRange, setStartRange] = useState("");
  const [endRange, setEndRange] = useState("");
  const [random, setRandom] = useState("");
  const [error, setError] = useState("");

  const handleStartChange = (event) => {
    setStartRange(event.target.value);
  };

  const handleEndChange = (event) => {
    setEndRange(event.target.value);
  };

  const handleClick = () => {
    if (!startRange || !endRange) {
      setError("Both fields are required.");
    } else if (isNaN(startRange) || isNaN(endRange)) {
      setError("Both fields should contain numbers.");
    } else if (Number(startRange) >= Number(endRange)) {
      setError("Start range should be less than end range.");
    } else {
      setError("");
      let randomGen = Math.floor(
        Math.random() * (Number(endRange) - Number(startRange) + 1) +
          Number(startRange)
      );
      setRandom(randomGen);
    }
  };

  return (
    <main>
      <div className="text-center">
        <h2 className="text-3xl">Hello there</h2>
        <section className="">
          <input
            type="number"
            placeholder="start range"
            className="border-black border-[1px]"
            value={startRange}
            onChange={handleStartChange}
          />
          <input
            type="number"
            placeholder="end range"
            className="border-black border-[1px] mt-5"
            value={endRange}
            onChange={handleEndChange}
          />
        </section>
        <button
          className="bg-blue-300 rounded-lg px-10 mt-12"
          onClick={handleClick}
        >
          Generate number
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <div>
        <span>Random</span>
        <div>{random}</div>
      </div>
    </main>
  );
}

export default RandomNumber;
