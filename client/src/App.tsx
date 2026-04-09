import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <Portfolio />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
