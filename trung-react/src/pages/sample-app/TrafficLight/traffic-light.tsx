type LightColor = "red" | "yellow" | "green";

const lights: LightColor[] = ["red", "yellow", "green"];

const activeClasses: Record<LightColor, string> = {
  red: "bg-red-600",
  yellow: "bg-yellow-400",
  green: "bg-[#27751b]",
};

export default function TrafficLight() {
  const activeLight: LightColor = "green";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f1f2f4]">
      <div
        role="img"
        aria-label={`Traffic light: ${activeLight}`}
        className="flex flex-col gap-2 rounded-[9px] bg-black p-2"
      >
        {lights.map((color) => (
          <div
            key={color}
            className={`h-[50px] w-[50px] rounded-full ${
              activeLight === color ? activeClasses[color] : "bg-[#4b4b4b]"
            }`}
          />
        ))}
      </div>
    </main>
  );
}
