// 1a. Återanvändbara komponenter 2p
// Skapa en komponent Button som tar en color och en title som props
// Använd den 2 gånger med olika title och color.

// 1b. Återanvändbara komponenter med children 2p
// Skapa en komponent ButtonWithChildren som änvänder children istället
// för en title prop. Använd den 2 gånger med olika title och color.

// 1c. Återanvändbara komponenter med icon 2p
// Skapa en komponent ButtonWithIcon som tar en title och icon som props.
// Använd valfritt icon-bibliotek. Använd komponenten 2 gånger med olika
// title och icon.

import Button from "./Button";
import ButtonWithChildren from "./ButtonWithChildren";
import ButtonWithIcon from "./ButtonWithIcon";
import { FiAlertTriangle } from "react-icons/fi";
import { IoIosNuclear } from "react-icons/io";

function App() {
  return (
    <div className="flex gap-4">
      <Button color="blue" title="Blue button"></Button>
      <Button title="Default button"></Button>

      <ButtonWithChildren color="blue">Blue Children</ButtonWithChildren>
      <ButtonWithChildren>Default Children</ButtonWithChildren>

      <ButtonWithIcon title="DON´T PRESS THIS BUTTON" Icon={FiAlertTriangle} />
      <ButtonWithIcon title="Press this one. Trust me." Icon={IoIosNuclear} />
    </div>
  );
}

export default App;
