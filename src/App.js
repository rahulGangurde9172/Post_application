import { useState } from 'react';
import { ContextProvider } from './CardContext/CardContext';
import './App.css';
import Header from './component/Header';
import Card from './component/Card';
import AddPost from './component/AddPost'
import SideBar from './component/SideBar';


function App() {

  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <div className="App">

      <ContextProvider>

     
      <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="content">
        <Header />
        <div className="main-content">
          {selectedTab === "home" ? <AddPost /> : <Card />}
        </div>
        
      </div>
      {/* <Footer /> */}
      </ContextProvider>
    </div>
  );
}

export default App;
