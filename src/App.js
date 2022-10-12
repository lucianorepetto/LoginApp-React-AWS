import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { Account } from './components/Account';
import Status from './components/Status';

function App() {
  return (
    <Account>
      <Status/>
      <SignUp/>
      <Login/>
    </Account>
  );
}

export default App;
