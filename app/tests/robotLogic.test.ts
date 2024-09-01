import { moveForward, rotateLeft, rotateRight } from "@/app/components/logic";
import { BellBotState } from "@/app/types";

describe("moveForward", () => {
  it("moves the robot north", () => {
    const robot: BellBotState = { x: 0, y: 0, direction: "NORTH" };
    const newRobot = moveForward(robot);
    expect(newRobot).toEqual({ x: 0, y: 1, direction: "NORTH" });
  });

  it("moves the robot east", () => {
    const robot: BellBotState = { x: 0, y: 0, direction: "EAST" };
    const newRobot = moveForward(robot);
    expect(newRobot).toEqual({ x: 1, y: 0, direction: "EAST" });
  });

  it("does not move the robot outside the north boundary", () => {
    const robot: BellBotState = { x: 0, y: 4, direction: "NORTH" };
    const newRobot = moveForward(robot);
    expect(newRobot).toEqual({ x: 0, y: 4, direction: "NORTH" });
  });

  it("does not move the robot outside the east boundary", () => {
    const robot: BellBotState = { x: 4, y: 0, direction: "EAST" };
    const newRobot = moveForward(robot);
    expect(newRobot).toEqual({ x: 4, y: 0, direction: "EAST" });
  });
});

describe("rotateLeft", () => {
  it("rotates the robot from north to west", () => {
    const robot: BellBotState = { x: 0, y: 0, direction: "NORTH" };
    const newRobot = rotateLeft(robot);
    expect(newRobot).toEqual({ x: 0, y: 0, direction: "WEST" });
  });

  it("rotates the robot from west to south", () => {
    const robot: BellBotState = { x: 0, y: 0, direction: "WEST" };
    const newRobot = rotateLeft(robot);
    expect(newRobot).toEqual({ x: 0, y: 0, direction: "SOUTH" });
  });

  it("rotates the robot from south to east", () => {
    const robot: BellBotState = { x: 0, y: 0, direction: "SOUTH" };
    const newRobot = rotateLeft(robot);
    expect(newRobot).toEqual({ x: 0, y: 0, direction: "EAST" });
  });

  it("rotates the robot from east to north", () => {
    const robot: BellBotState = { x: 0, y: 0, direction: "EAST" };
    const newRobot = rotateLeft(robot);
    expect(newRobot).toEqual({ x: 0, y: 0, direction: "NORTH" });
  });
});

describe("rotateRight", () => {
  it("rotates the robot from north to east", () => {
    const robot: BellBotState = { x: 0, y: 0, direction: "NORTH" };
    const newRobot = rotateRight(robot);
    expect(newRobot).toEqual({ x: 0, y: 0, direction: "EAST" });
  });

  it("rotates the robot from east to south", () => {
    const robot: BellBotState = { x: 0, y: 0, direction: "EAST" };
    const newRobot = rotateRight(robot);
    expect(newRobot).toEqual({ x: 0, y: 0, direction: "SOUTH" });
  });

  it("rotates the robot from south to west", () => {
    const robot: BellBotState = { x: 0, y: 0, direction: "SOUTH" };
    const newRobot = rotateRight(robot);
    expect(newRobot).toEqual({ x: 0, y: 0, direction: "WEST" });
  });

  it("rotates the robot from west to north", () => {
    const robot: BellBotState = { x: 0, y: 0, direction: "WEST" };
    const newRobot = rotateRight(robot);
    expect(newRobot).toEqual({ x: 0, y: 0, direction: "NORTH" });
  });
});
