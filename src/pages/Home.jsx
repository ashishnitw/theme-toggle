import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center transition-colors">
      <h1 className="text-3xl font-bold mb-6">Beautiful Theme Toggle</h1>
      <ThemeToggle />
    </div>
  );
}
