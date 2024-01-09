import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div className="App ">
      <div className="a bg-slate-950/90 p-7">
        <Navbar></Navbar>
        <Header></Header>
        <Content></Content>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
