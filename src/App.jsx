import { useState, useEffect } from "react";
import FeedPost from "./components/posts/FeedPost";
import IntervalTimer from "./components/timers/IntervalTimer";
import CounterTimer from "./components/timers/CounterTimer";
import SignupForm from "./components/forms/SignupForm";
import SimpleBulb from "./components/bulbs/SimpleBulb";
import ContextBulb from "./components/bulbs/ContextBulb";
import HooksDemo from "./components/hooks/HooksDemo";
import reactLogo from "./assets/React.svg";

function App() {
  const [currentComponent, setCurrentComponent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const renderComponent = () => {
    if (loading) {
      return <Loader />;
    }

    switch(currentComponent) {
      case 'feedPost':
        return <FeedPost />;
      case 'intervalTimer':
        return <IntervalTimer />;
      case 'counterTimer':
        return <CounterTimer />;
      case 'signupForm':
        return <SignupForm />;
      case 'simpleBulb':
        return <SimpleBulb />;
      case 'contextBulb':
        return <ContextBulb />;
      case 'hooksDemo':
        return <HooksDemo />;
      default:
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in">
            <img src={reactLogo} alt="React Logo" className="h-32 w-32 animate-spin-slow" />
            <h2 className="text-3xl font-bold mt-6 text-blue-600">Welcome to Your React Component Library</h2>
            <p className="text-gray-600 mt-4 text-lg">Select a component from the menu above to view it</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 font-sans">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-2">React Component Showcase</h1>
        <p className="text-gray-600">A collection of reusable React components and custom hooks</p>
      </header>
      
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {['feedPost', 'intervalTimer', 'counterTimer', 'signupForm', 'simpleBulb', 'contextBulb', 'hooksDemo', null].map((componentName) => (
          <button 
            key={componentName || 'home'}
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setCurrentComponent(componentName);
                setLoading(false);
              }, 500);
            }}
            className={`btn ${currentComponent === componentName ? 'bg-indigo-600 hover:bg-indigo-800' : ''}`}
          >
            {componentName === 'feedPost' ? 'Feed Post' : 
             componentName === 'intervalTimer' ? 'Interval Timer' : 
             componentName === 'counterTimer' ? 'Counter Timer' : 
             componentName === 'signupForm' ? 'Signup Form' : 
             componentName === 'simpleBulb' ? 'Simple Bulb' : 
             componentName === 'contextBulb' ? 'Context Bulb' : 
             componentName === 'hooksDemo' ? 'Custom Hooks' : 'Home'}
          </button>
        ))}
      </div>

      <div className="card min-h-[500px] animate-slide-in">
        {renderComponent()}
      </div>
      
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>Built with React and Tailwind CSS</p>
      </footer>
    </div>
  );
}

// Loader component
function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-blue-500 animate-spin"></div>
        <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-indigo-500 animate-spin absolute top-4 left-4"></div>
        <div className="h-8 w-8 rounded-full border-t-4 border-b-4 border-pink-500 animate-spin absolute top-8 left-8"></div>
      </div>
    </div>
  );
}

export default App;
