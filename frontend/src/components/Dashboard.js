import React, { useState } from 'react';
import RainEffect from './RainEffect';

export const Dashboard = () => {
    const [text, setText] = useState('');
    const [response, setResponse] = useState('');

    const handleInput = (e) => {
        const textarea = e.target;
        setText(textarea.value);
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://127.0.0.1:5000/api/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text }),
            })

            const data = await response.json();
            setResponse(data.message);
            setText('');
        } catch (error) {
            console.log(error);
            setResponse('Error submitting text');
        }
    }

    return (
        <div className="relative bg-[#2d303a] min-h-screen">
            {/* Rain effect as overlay */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="rain absolute inset-0 overflow-hidden">
                    <RainEffect />
                </div>
            </div>

            {/* Main content */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center gap-10">
                <form onSubmit={handleSubmit} className="">
                    <textarea
                        value={text}
                        onChange={handleInput}
                        placeholder="Input text to analyze"
                        className="min-h-[48px] w-96 text-white bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 border border-gray-200 px-4 py-3 shadow-lg focus:outline-none focus:border-sky-300 transition-colors resize-none overflow-hidden placeholder-gray-300"
                        style={{
                            lineHeight: '1.5',
                        }}
                    />
                    <button type="submit"
                        className="px-6 py-2 bg-white bg-opacity-40 backdrop-filter backdrop-blur-xl text-white rounded-md border border-gray-200 shadow-lg hover:bg-opacity-50 transition-all">
                        Submit
                    </button>
                </form>
                {response && (
                    <div className="mt-4 p-3 bg-white rounded-md border border-gray-200 shadow-lg">
                        <p>{response}</p>
                    </div>
                )}
            </div>
        </div>
    );
}