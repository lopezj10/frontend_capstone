import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <><div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Route path="/instant-consultation" element={<InstantConsultation />} />

    </div>
      <BrowserRouter>
        <Notification>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/instant-consultation" element={<InstantConsultation />} />
            <Route path="<component_route>" element={<component_name />} /> //replace the component_route with the component path  and component_name with the component name as imported in the **App.js file**.
            //replace the component_route with the component path  and component_name with the component name as imported in the **App.js file**. 
            /{'>'}
          </Routes>
        </Notification>
      </BrowserRouter></>
    
  );
  
}

export default App;
