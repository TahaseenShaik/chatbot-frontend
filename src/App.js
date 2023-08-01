import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Chatbot from './components/chatbots/chatbot'
const App=()=>{
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Chatbot />
     
    </div>
  );
}

export default App;
