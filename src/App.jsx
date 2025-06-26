import React from 'react';
import AllRoutes from './routes/AllRoutes';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <AllRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
