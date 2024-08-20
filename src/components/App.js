import React, { useState } from 'react';
import Header from '../components/Header';
import ShoppingList from './ShoppingList';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Header onDarkModeClick={toggleDarkMode} />
      {/* Example items */}
      <ShoppingList items={[
        { id: 1, name: 'Yogurt', category: 'Dairy' },
        { id: 2, name: 'Pomegranate', category: 'Produce' },
        { id: 3, name: 'Lettuce', category: 'Produce' },
        { id: 4, name: 'String Cheese', category: 'Dairy' },
        { id: 5, name: 'Cookies', category: 'Dessert' }
      ]} />
    </div>
  );
};

export default App;