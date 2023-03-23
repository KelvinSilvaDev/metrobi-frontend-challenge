import React, { useState } from "react";

function WriteArrayItems(): JSX.Element {
  const [array, setArray] = useState<string[]>(["a", "b", "c", "d"]);
  const [currentItem, setCurrentItem] = useState<string | null>(null);
  const [isWriting, setIsWriting] = useState<boolean>(false);

  async function writeArrayItems(array: string[]): Promise<void> {
    setIsWriting(true);
    for (let i = 0; i < array.length; i++) {
      setCurrentItem(array[i]);
      const delay = Math.pow(2, i) * 1000;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    setIsWriting(false);
    setCurrentItem(null);
  }

  async function handleClick(): Promise<void> {
    await writeArrayItems(array);
  }

  return (
    <div>
      <button onClick={handleClick} disabled={isWriting}>
        Write Array Items
      </button>
      {isWriting && <div>Writing item: {currentItem}</div>}
      {!isWriting &&
        array.map((item: string, index: number) => (
          <div key={index}>{item}</div>
        ))}
    </div>
  );
}

export default WriteArrayItems;
