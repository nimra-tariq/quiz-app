import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import QuizContainer from './components/QuziContainer/QuizContainer';
function App() {
  return (
    <div className="App">
      <div className='allButFooter'>     
      <Header></Header>
      <QuizContainer></QuizContainer>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
