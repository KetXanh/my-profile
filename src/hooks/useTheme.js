import { useEffect, useState } from "react";

export default function useTheme() {
  const [dark, setDark] = useState(() => {
    // ưu tiên localStorage
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";

    // fallback theo hệ thống
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return { dark, setDark };
}
