import * as React from 'react';
import './App.css';
import FootBar from './Components/NavBar/FootBar';
import NavBar from './Components/NavBar/NavBar';
import TrackCart from './Components/NavBar/TrackCart';
import ShoppingList from './Components/ShoppingList/ShoppingList';

function App() {
  return (<div style={{height: '100%'}}>
    <div className="App">
    <NavBar />
    <TrackCart />
    </div>
    <div className='content-view'  style={{height: '100%'}}>
      <div className='sub-label-offer'>
        Shop for $5000 or more and get 10% discount on your order
      </div>
      <div>
        <h2 style={{textAlign: 'left', margin: '0 auto'}}> Shopping Cart </h2>
        <ShoppingList />
      </div>
      <FootBar />
    </div>
    </div>
  );
}

export default App;
