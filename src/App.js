
import DarkModeToggle from "./components/DarkModeToggle";

const App = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <DarkModeToggle />
        <p className="text-lg text-gray-900 dark:text-white mt-4">Toggle Dark Mode</p>
      </div>
    </div>
  );
};

export default App;

