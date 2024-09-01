import React, { useEffect } from "react";
import { BellBotState } from "@/app/types";
import { moveForward, rotateLeft, rotateRight } from "@/app/components/logic";

interface RobotControllerProps {
  bellBotState: BellBotState;
  setBellBotState: (state: BellBotState) => void;
}

const RobotController: React.FC<RobotControllerProps> = ({
  bellBotState,
  setBellBotState,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          setBellBotState(moveForward(bellBotState));
          break;
        case "ArrowLeft":
          setBellBotState(rotateLeft(bellBotState));
          break;
        case "ArrowRight":
          setBellBotState(rotateRight(bellBotState));
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [bellBotState, setBellBotState]);

  return (
    <div className="flex flex-col items-center space-y-2 m-4">
      <button
        onClick={() => setBellBotState(moveForward(bellBotState))}
        className="bg-hero text-white p-2 rounded tracking-widest shadow-main"
      >
        MOVE FORWARD
      </button>
      <div className="relative flex space-x-2">
        <button
          onClick={() => setBellBotState(rotateLeft(bellBotState))}
          className="p-2 bg-yellow-500 bg-white text-black rounded shadow-main"
        >
          {"< rotate left"}
        </button>
        <button
          onClick={() => setBellBotState(rotateRight(bellBotState))}
          className="p-2 bg-red-500 bg-white text-black rounded shadow-main"
        >
          {"rotate right >"}
        </button>
      </div>
    </div>
  );
};

export default RobotController;
