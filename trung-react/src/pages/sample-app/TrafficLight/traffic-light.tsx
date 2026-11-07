import React, { useState } from "react";

// Các màu được phép sử dụng
type LightColor = "red" | "yellow" | "green";

// Cấu trúc cấu hình của một đèn
type LightDetails = {
  duration: number,
  next: LightColor,
  activeClass: string
}


// Thời gian, màu tiếp theo và class của từng đèn
const lightDetails: Record<LightColor,LightDetails>= {
  green: {
    duration: 4000,
    next: "yellow",
    activeClass: "bg-green-600",
  },
   yellow: {
    duration: 3000,
    next: "red",
    activeClass: "bg-yellow-400",
  },
  red: {
    duration: 5000,
    next: "green",
    activeClass: "bg-red-600",
  },
}

// Thứ tự hiển thị từ trên xuống dưới
const lightOrder : LightColor[] = ["red","yellow","green"]


export default function TrafficLight() {
  const [activeLight,setActiveLight] = useState<LightColor>("green")

  React.useEffect(()=>{
    const {duration,next} = lightDetails[activeLight]

    const timeoutId = window.setTimeout(()=>{
      setActiveLight(next);
    },duration)
    

    return () => {
      //clean up function
      window.clearInterval(timeoutId);
    };
  },[activeLight])
  

 return (
    <main className="flex min-h-screen items-center justify-center bg-[#f1f2f4]">
      <div
        role="img"
        aria-label={`Traffic light: ${activeLight}`}
        className="flex flex-col gap-2 rounded-[9px] bg-black p-2"
      >
        {lightOrder.map((color) => (
          <div
            key={color}
            className={`h-[50px] w-[50px] rounded-full ${
              activeLight === color
                ? lightDetails[color].activeClass
                : "bg-[#4b4b4b]"
            }`}
          />
        ))}
      </div>
    </main>
  );
}
