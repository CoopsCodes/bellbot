export type Direction = "NORTH" | "EAST" | "SOUTH" | "WEST";

export interface BellBotState {
  x: number;
  y: number;
  direction: Direction;
  message: string;
  instructions: string;
  error: string;
}

export const initialBellBotState: BellBotState = {
  x: 2,
  y: 2,
  direction: "NORTH",
  message:
    "Hi and welcome to Bellbot, the friendly robot that fits in you new Bellroy Travel Wallet.",
  instructions:
    "Use the arrow keys to move Bellbot around the grid. Alternatively, you can use the buttons below the grid to move Bellbot around. Have fun!",
  error: "",
};
