import logo from './logo.svg';
import './App.css';
import ExerciseContainer from './Components/ExerciseContainer/ExerciseContainer';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <div className="App">
      <ExerciseContainer></ExerciseContainer>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
