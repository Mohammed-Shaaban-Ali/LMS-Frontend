"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";
type Props = {};

function ThemeSwitcher({}: Props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="flex items-center justify-center mx-4 cursor-pointer">
      {theme === "light" ? (
        <BiMoon
          fill="black"
          size={25}
          onClick={() => {
            setTheme("dark");
          }}
        />
      ) : (
        <BiSun
          size={25}
          onClick={() => {
            setTheme("light");
          }}
        />
      )}
    </div>
  );
}

export default ThemeSwitcher;
