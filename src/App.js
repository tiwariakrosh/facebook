
import './App.css';
import Header from './components/Header';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';
import Widgets from './components/widgets/Widgets'
import Login from './components/Login';


function App() {
  const user = null;
  return (
    <div className="App">
      {!user ? (<Login />) : (
        <>
          <Header />
          <div className="pageTop">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
