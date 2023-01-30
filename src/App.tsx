import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Homes';
import NotFound from './pages/NotFound';

/* eslint-disable react/react-in-jsx-scope */
export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
