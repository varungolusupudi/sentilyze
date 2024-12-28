import './App.css';
import { Loading } from './components/Loading';
import { useState, useEffect } from 'react';
import {Dashboard} from "./components/Dashboard";

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
        <Dashboard />
    </div>
  );
}

export default App;
