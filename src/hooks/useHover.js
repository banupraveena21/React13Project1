import { useState, useRef, useEffect } from "react";

export default function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleMouseOver = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);

    node.addEventListener("mouseenter", handleMouseOver);
    node.addEventListener("mouseleave", handleMouseOut);

    return () => {
      node.removeEventListener("mouseenter", handleMouseOver);
      node.removeEventListener("mouseleave", handleMouseOut);
    };
  }, []);

  return [isHovered, ref];
}
