import React, { useState } from "react";

function WriteArrayItems(): JSX.Element {
  const [array, setArray] = useState<string[]>(["a", "b", "c", "d"]);
  const [currentItemIndex, setCurrentItemIndex] = useState<number | null>(null);
  const [isWriting, setIsWriting] = useState<boolean>(false);
  const [printedItems, setPrintedItems] = useState<string[]>([]);

  async function writeArrayItems(array: string[]) {
    setIsWriting(true);

    for (let i = 0; i < array.length; i++) {
      setCurrentItemIndex(i);
      await new Promise((resolve) =>
        setTimeout(resolve, Math.pow(2, i) * 1000)
      );
      setPrintedItems((prevItems) => [...prevItems, array[i]]);
    }

    setIsWriting(false);
    setCurrentItemIndex(null);
  }

  async function handleClick(): Promise<void> {
    await writeArrayItems(array);
  }

  return (
    <div>
      <button onClick={handleClick} disabled={isWriting}>
        Write Array Items
      </button>
      {isWriting && currentItemIndex !== null && (
        <div>Writing item: {array[currentItemIndex]}</div>
      )}
      {!isWriting &&
        printedItems.map((item: string, index: number) => (
          <div key={index}>{item}</div>
        ))}
    </div>
  );
}

export default WriteArrayItems;
