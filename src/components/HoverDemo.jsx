import useHover from "../hooks/useHover";

export default function HoverDemo() {
  const [isHovered, hoverRef] = useHover();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div
        ref={hoverRef}
        className={`p-8 rounded-lg cursor-pointer transition 
          ${isHovered ? "bg-cyan-500 text-white shadow-lg" : "bg-gray-700 text-gray-300"}`}
      >
        {isHovered ? "You're hovering over me!" : "Hover over me"}
      </div>
    </div>
  );
}
