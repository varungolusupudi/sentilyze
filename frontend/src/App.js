import './App.css';
import { Loading } from './components/Loading';
import { useState, useEffect } from 'react';

function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 4000);
    }, []);

    if (loading) {
        return <Loading />;
    }
  return (
    <div className="App">
        <h1 className="font-extrabold text-5xl">WOOOO</h1>
    </div>
  );
}

export default App;
