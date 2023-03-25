import React, { useState } from "react";

interface Props {}

const QuestionFive: React.FC<Props> = () => {
  const [nFloors, setNFloors] = useState(100);
  const [nEggs, setNEggs] = useState(2);
  const [drops, setDrops] = useState(
    Array(nFloors + 1)
      .fill(null)
      .map(() => Array(nEggs + 1).fill(null))
  );
  const [solutions, setSolutions] = useState(
    Array(nFloors + 1)
      .fill(null)
      .map(() => Array(nEggs + 1).fill(null))
  );
  const [progress, setProgress] = useState(0);

  const calculate = () => {
    // Initialize arrays
    const f: number[][] = Array(nFloors + 1)
      .fill(null)
      .map(() => Array(nEggs + 1).fill(null));
    const d: number[][] = Array(nFloors + 1)
      .fill(null)
      .map(() => Array(nEggs + 1).fill(null));

    // Base cases
    for (let i = 0; i <= nFloors; i++) {
      f[i][0] = 0;
      f[i][1] = i;
      d[i][0] = 0;
      d[i][1] = i;
    }
    for (let j = 0; j <= nEggs; j++) {
      f[0][j] = 0;
      f[1][j] = 1;
      d[0][j] = 0;
      d[1][j] = 1;
    }

    // Fill the rest of the table using dynamic programming
    for (let j = 2; j <= nEggs; j++) {
      for (let i = 2; i <= nFloors; i++) {
        f[i][j] = Infinity;
        for (let k = 1; k <= i; k++) {
          const res = 1 + Math.max(f[k - 1][j - 1], f[i - k][j]);
          if (res < f[i][j]) {
            f[i][j] = res;
            d[i][j] = k;
          }
        }
      }
    }

    // Save the results and update progress
    setSolutions((solutions) =>
      solutions.map((row, i) => row.map((_, j) => d[i][j]))
    );
    setDrops((drops) => drops.map((row, i) => row.map((_, j) => f[i][j])));
    setProgress(100);
  };

  const handleNFloorsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setNFloors(value);
    setDrops(
      Array(value + 1)
        .fill(null)
        .map(() => Array(nEggs + 1).fill(null))
    );
    setSolutions(
      Array(value + 1)
        .fill(null)
        .map(() => Array(nEggs + 1).fill(null))
    );
  };

  const handleNEggsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setNEggs(value);
    setDrops(
      Array(nFloors + 1)
        .fill(null)
        .map(() => Array(value + 1).fill(null))
    );
    setSolutions(
      Array(nFloors + 1)
        .fill(null)
        .map(() => Array(value + 1).fill(null))
    );
  };

  return (
    <div>
      <label htmlFor="n-floors">Number of floors:</label>
      <input
        id="n-floors"
        type="number"
        value={nFloors}
        onChange={handleNFloorsChange}
      />
      <label htmlFor="n-eggs">Number of eggs:</label>
      <input
        id="n-eggs"
        type="number"
        value={nEggs}
        onChange={handleNEggsChange}
      />
      <button onClick={calculate}>Calculate</button>
      {progress > 0 && <p>Progress: {progress}%</p>}
      {drops[nFloors][nEggs] !== null && (
        <p>
          The minimum number of drops required to find the critical floor is{" "}
          {drops[nFloors][nEggs]}.
        </p>
      )}
      {solutions[nFloors][nEggs] !== null && (
        <p>
          One optimal strategy is to start dropping eggs from floor{" "}
          {solutions[nFloors][nEggs]} and increment by 1 until the egg breaks.
        </p>
      )}
    </div>
  );
};

export default QuestionFive;
