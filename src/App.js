
import './index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>

      <Header title="Today's Tasks"/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
