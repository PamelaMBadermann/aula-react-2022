import './App.css';
// import { Titulo } from './components/Titulo/Titulo';
// import { Wrapper } from './components/Wrapper/Wrapper';
// import { ClassCard } from './components/ClassCard/ClassCard';
// import { Login } from './pages/Login/Login';
// import { Cards } from './pages/Cards/Cards';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <h1>Menu da aplicação</h1>
      <hr/>
      <Router />
    </div>
  );
}

export default App;
