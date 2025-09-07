import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
    >
      {dark ? "Switch to Light" : "Switch to Dark"}
    </button>
  );
}
