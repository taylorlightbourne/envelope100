import Login from './components/Login';
import EnvelopeTracker from './components/Budgeting/EnvelopeTracker';
import BinderList from './components/Budgeting/BinderList';
import EnvelopeList from './components/Budgeting/EnvelopeList';


function App() {
  return (
    <div>
        <h1>Hello World</h1>
        <Login />
        <BinderList />
        <EnvelopeList />
        <EnvelopeTracker />
    </div>
  );
}

export default App;
