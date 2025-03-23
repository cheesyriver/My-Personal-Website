import { useEffect, useState } from "react";

export function useThemeToggler() {
  const [theme, setTheme] = useState<"lightmode" | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "lightmode") {
      setTheme(savedTheme);
      const html = document.querySelector("html");
      if (html) {
        html.classList.add(savedTheme);
      }
    }
  }, []);

  useEffect(() => {
    const html = document.querySelector("html")!
    const sun = document.getElementById("sun")!
    const moon = document.getElementById("moon")!
    if (html) {
      if (theme === "lightmode") {
        html.classList.add("lightmode");
        sun.classList.add("block")
        sun.classList.remove("hidden")
        moon.classList.remove("block")
        moon.classList.add("hidden")
        localStorage.setItem("theme", "lightmode");
      } else {
        html.classList.remove("lightmode");
        localStorage.removeItem("theme");
        moon.classList.add("block")
        moon.classList.remove("hidden")
        sun.classList.remove("block")
        sun.classList.add("hidden")
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "lightmode" ? null : "lightmode"));
  };

  return { theme, toggleTheme };
}