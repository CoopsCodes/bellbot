import { BellBotState } from "@/app/types";

interface GridProps {
  bellBotState: BellBotState;
}

const Grid: React.FC<GridProps> = ({ bellBotState }) => {
  const { x, y } = bellBotState;

  return (
    <div className="max-w-md grid grid-cols-5 gap-1">
      {Array.from({ length: 25 }).map((_, index) => {
        const cellX = index % 5;
        const cellY = Math.floor(index / 5);
        const isRobot = cellX === x && cellY === y;
        return (
          <div
            key={index}
            className={`w-12 h-12 md:w-20 md:h-20 border flex justify-center shadow-md ${
              isRobot ? "bg-hero" : "bg-backgroundAlt"
            }`}
          >
            {isRobot && (
              <div className="flex items-center justify-center text-white ">
                <p className="text-xs md:text-lg">{bellBotState.direction}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
