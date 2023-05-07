import React from "react";
import { useMachine } from "@xstate/react";
import { genderMachine } from "./gender-state-machine";

export default function App() {
  const [current, send] = useMachine(genderMachine);
  const setMale = () => {
    send("MALE_OPTION");
  };
  const setFemale = () => {
    send("FEMALE_OPTION");
  };
  return (
    <>
      <h2>{current.value}</h2>
      <button disabled={current.matches("male")} onClick={setMale}>
        Male
      </button>
      <button disabled={current.matches("female")} onClick={setFemale}>
        Female
      </button>
    </>
  );
}
