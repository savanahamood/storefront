import "./App.css";
import Header from "./src/Components/Header/Header";
import Footer from "./src/Components/Footer/Footer";
import Categories from "./src/Components/Categories/Categories";
import Products from "./src/Components/Products/Products";
import { Provider } from 'react-redux';
import store from './src/store/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Provider store={store}>
        <Categories />
        <Products />
      </Provider>
      <Footer />
    </div>
  );
}

export default App;