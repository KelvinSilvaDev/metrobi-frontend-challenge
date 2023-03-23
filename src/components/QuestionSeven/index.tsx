import React from "react";

interface CarrotType {
  kg: number;
  price: number;
}

interface Props {
  carrotTypes: CarrotType[];
  capacity: number;
}

const getMaxValue = (carrotTypes: CarrotType[], capacity: number): number => {
  const n = carrotTypes.length;
  const dp: number[][] = [];

  // Initialize the dp array
  for (let i = 0; i <= n; i++) {
    dp[i] = [];
    for (let j = 0; j <= capacity; j++) {
      dp[i][j] = 0;
    }
  }

  // Fill the dp array using the Knapsack algorithm
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= capacity; j++) {
      const weight = carrotTypes[i - 1].kg;
      const value = carrotTypes[i - 1].price;

      if (weight <= j) {
        dp[i][j] = Math.max(value + dp[i - 1][j - weight], dp[i - 1][j]);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  // Return the maximum value
  return dp[n][capacity];
};

const QuestionSeven: React.FC<Props> = ({ carrotTypes, capacity }) => {
  const maxValue = getMaxValue(carrotTypes, capacity);

  return (
    <div>
      <span>Maximum value: {maxValue}</span>
    </div>
  );
};

export default QuestionSeven;
