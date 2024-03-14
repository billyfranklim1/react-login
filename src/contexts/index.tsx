import { DarkModeProvider } from "./DarkMode/DarkModeContext";
import { ReactQueryProvider } from "./Query";

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <DarkModeProvider>{children}</DarkModeProvider>
    </ReactQueryProvider>
  );
}
