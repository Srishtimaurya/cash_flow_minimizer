import React from 'react';
import DataTabelVariable from './array';

const Home = () => {
  const body = {
    color: '#ffffff',
    // color: '#000000',
    // backgroundColor: '#ff7366',
    backgroundColor:'#3CB371',
    padding: 50, 
    marginTop: -25
}
const h1Style = {
  color: '#000000'
};


  return (
    <div style={body}>
      {/* <h1>Cash flow minimiser</h1> */}
      <h1 style={h1Style}>Cash flow minimiser</h1>
      <h3>Given a number of friends who have to give or take some amount of money from one another. 
        Design an algorithm by which the total cash flow among all the friends is minimized. </h3>
      <DataTabelVariable />
    </div>
  );
};

export default Home;