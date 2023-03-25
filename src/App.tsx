import { AchillesAndTortoise } from "./components/AchillesAndTortoise";
import QuestionFour from "./components/QuestionFour";
import { QuestionOne } from "./components/QuestionOne";
import QuestionSeven from "./components/QuestionSeven";
import { QuestionThree } from "./components/QuestionThree";
import QuestionTwo from "./components/QuestionTwo";
import styled from "styled-components";

import QuestionFive from "./components/QuestionFive";
import DropDown from "./components/DropDown";

const CenteredContainer = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  width: 90%;
  gap: 1rem;
  overflow-y: auto;
`;

function App() {
  return (
    <div className="App">
      <CenteredContainer>
        <DropDown title="1 - Write a javascript function that finds the duplicate items in any given array.">
          <QuestionOne />
        </DropDown>

        <DropDown
          title="2 - Write an async javascript function that writes every item in any
            given array with 1, 2, 4, 8, ... seconds apart. ex: for [“a”,” b,
            “c, “d”], “a” is printed in 1 sec, “b” is printed in 2 seconds, “c”
            is printed in 4 seconds, ..."
        >
          <QuestionTwo />
        </DropDown>

        <DropDown
          title="3 - Write an async javascript function that writes every item in any
                    given array with 1, 2, 4, 8,... seconds apart. ex: for [“a”,” b,
                    “c, “d”], “a” is printed in 1 sec, “b” is printed in 2 seconds, “c”
                    is printed in 4 seconds,..."
        >
          <QuestionThree />
        </DropDown>

        <DropDown
          title="4 - Write an async javascript function that writes every item in any
                    given array with 1, 2, 4, 8,... seconds apart. ex: for [“a”,” b,
                    “c, “d”], “a” is printed in 1 sec, “b” is printed in 2 seconds, “c”
                    is printed in 4 seconds,..."
        >
          <QuestionFour />
        </DropDown>
        <DropDown
          title="5 - A building has 100 floors. One of the floors is the highest
            floor an egg can be dropped from without breaking. If an egg is
            dropped from above that floor, it will break. If it is dropped from
            that floor or below, it will be completely undamaged and you can
            drop the egg again. Given two eggs, find the highest floor an egg
            can be dropped from without breaking, with as few drops as possible
            in the worst-case scenario."
        >
          <p>
            One way to solve this problem is to use a binary search approach. We
            start by dropping one egg from the 50th floor. If the egg breaks, we
            know that the highest floor is between 1 and 49, so we can use the
            second egg to test floors 1 to 49, starting from the first floor and
            moving up one floor at a time until the egg breaks. This will take
            at most 49 drops (one on the 50th floor and up to 48 more with the
            second egg). If the first egg does not break when dropped from the
            50th floor, we know that the highest floor is between 51 and 100, so
            we can drop the second egg from the 75th floor. If the egg breaks,
            we know that the highest floor is between 51 and 74, so we can use
            the first egg to test those floors as described above. If the egg
            does not break when dropped from the 75th floor, we know that the
            highest floor is between 76 and 100, so we can drop the second egg
            from the 88th floor (the midpoint between 76 and 100). We continue
            this process, dividing the remaining floors in half each time, until
            we find the highest floor. Using this strategy, the worst-case
            scenario will require at most 14 drops. This can be achieved by
            dropping the first egg from the 50th, 75th, 88th, 94th, 97th, 99th,
            and 100th floors, and using the second egg to test the floors below
            each drop point, starting from the floor below the last successful
            drop. For example, if the egg breaks when dropped from the 50th
            floor, we use the second egg to test floors 1 to 49. If it doesn't
            break, we test floors 51 to 74, and so on.
          </p>
          <h2>Answer: </h2>
          <QuestionFive />
        </DropDown>
        <DropDown
          title="6 - Write the code that animates “Zeno's Paradox of Achilles and the
          Tortoise” on an interface(we would like to see the paradox
          demonstrated)."
        >
          <h2>Answer:</h2>
          <AchillesAndTortoise />
        </DropDown>
        <DropDown
          title={`7 - Think that you have an unlimited number of carrots, but a limited number of carrot types. Also, you have one bag that can hold a limited weight. Each type of carrot has a weight and a price. Write a function that takes carrotTypes and capacity and return the maximum value the bag can hold. [Python or Javascript]`}
        >
          <div>
            <p>
              Example: carrotTypes ={" "}
              {"[{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}]"}
              capacity = 36 //kg getMaxValue(carrotTypes, capacity)
            </p>
            <h2>Answer: </h2>
            <QuestionSeven
              carrotTypes={[
                { kg: 5, price: 100 },
                { kg: 7, price: 150 },
                { kg: 3, price: 70 },
              ]}
              capacity={36}
            />
          </div>
        </DropDown>
      </CenteredContainer>
    </div>
  );
}

export default App;
