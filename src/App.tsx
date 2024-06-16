import { PrimeReactProvider } from 'primereact/api';
import './App.css';
import Showcase from './components/Showcase';
import ThemeSelector from './components/ThemeSelector';
import { ThemeProvider } from './context/ThemeContext';
import './styles/main.css';

function App() {
  return (
    <>
      <PrimeReactProvider>
        <ThemeProvider initialTheme="lara-light-teal">
          <div className="flex flex-col gap-3">
            <div className="w-full flex surface-card items-center justify-between p-3">
              <div className="text-lg font-bold">
                Vite + Tailwind + Primereact Styled
              </div>
              <ThemeSelector></ThemeSelector>
            </div>
            <Showcase></Showcase>
          </div>
        </ThemeProvider>
      </PrimeReactProvider>
    </>
  );
}

export default App;
