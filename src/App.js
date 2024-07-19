import DarkModeToggle from "./components/DarkModeToggle";
const App = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <DarkModeToggle />
      <p className="text-lg">Toggle Dark Mode</p>
    </div>
  );
};

export default App;
