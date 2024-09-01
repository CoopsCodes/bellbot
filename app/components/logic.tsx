import { BellBotState, Direction } from "@/app/types";

// Possible directions in clockwise order
const directions: Direction[] = ["NORTH", "EAST", "SOUTH", "WEST"];

export const moveForward = (state: BellBotState): BellBotState => {
  const { x, y, direction } = state;

  let newX = x;
  let newY = y;
  let error = "";

  switch (direction) {
    case "NORTH":
      if (y > 0) {
        newY = y - 1;
      } else {
        error = "Hit the north wall, you can't go past the wall John Snow";
      }
      break;
    case "EAST":
      if (x < 4) {
        newX = x + 1;
      } else {
        error = "That's the east wall, you shall not pass!";
      }
      break;
    case "SOUTH":
      if (y < 4) {
        newY = y + 1;
      } else {
        error =
          "You've gone too far south, Hobbiton is back to the north Frodo";
      }
      break;
    case "WEST":
      if (x > 0) {
        newX = x - 1;
      } else {
        error = "That's the west wall, you shall not pass!";
      }
      break;
  }

  return { ...state, x: newX, y: newY, error };
};

export const rotateLeft = (state: BellBotState): BellBotState => {
  const { direction } = state;
  const newDirection = directions[(directions.indexOf(direction) + 3) % 4];
  return { ...state, direction: newDirection };
};

export const rotateRight = (state: BellBotState): BellBotState => {
  const { direction } = state;
  const newDirection = directions[(directions.indexOf(direction) + 1) % 4];
  return { ...state, direction: newDirection };
};
