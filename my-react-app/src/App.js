
import './App.css';
// import Hello from './Hello';
// import MyFile from './MyFile';
// import Random from './Random';
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from './compos/FoodItems';
import ErrorMsg from './compos/ErrorMsg';

function App() {
  let foodItems = ["Sabzi","Dal","Roti","Rice","Salad"]
  //let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry.</h3> : null
  return (
   <>
   <h1>Healthy Food</h1>
   <ErrorMsg items={foodItems}/>
   <FoodItems items={foodItems}/>
   </>
  );
}

export default App;
