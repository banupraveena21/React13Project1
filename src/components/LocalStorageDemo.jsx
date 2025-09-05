import useLocalStorage from '../hooks/useLocalStorage';

export default function LocalStorageDemo() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Theme: {theme}</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Toggle Theme
      </button>
    </div>
  );
}
