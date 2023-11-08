import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {OspfDataLoadInitiator} from "./org/hkfree/ospf/tools/load/OspfDataLoadInitiator";
import {OspfModel} from "./org/hkfree/ospf/model/ospf/OspfModel";

function App() {

  useEffect(() => {
    console.log("Bootstrapping...");
    const initiator = new OspfDataLoadInitiator();
    const model = new OspfModel();
    initiator.loadDataFromRemoteServerFiles(model, "https://lab.hkfree.org/ospfmap/ospf-data/data-archive/2023-11-08/2023-11-08--14-15.zip").then(() => {
      console.log("MODEL", model);
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;
