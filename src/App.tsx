import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {OspfDataLoadInitiator} from "./org/hkfree/ospf/tools/load/OspfDataLoadInitiator";
import {OspfModel} from "./org/hkfree/ospf/model/ospf/OspfModel";
import {MapModel} from "./org/hkfree/ospf/model/map/MapModel";
import {D3Renderer} from "./D3Renderer";

function App() {

  const [mapModel, setMapModel] = useState<MapModel | null>(null);

  useEffect(() => {
    console.log("Bootstrapping...");
    const initiator = new OspfDataLoadInitiator();
    const model = new OspfModel();

    initiator.loadDataFromRemoteServerFiles(model, "https://lab.hkfree.org/ospfmap/ospf-data/data-archive/2023-11-08/2023-11-08--14-15.zip").then(() => {
      console.log("MODEL", model);
      console.log("MAP-MODEL", model.getConvertedWholeModelToMapModel());
      // TODO this is called twice, why? thus D3 is rendering twice (two groups of SVG nodes are created!) as well
      setMapModel(model.getConvertedWholeModelToMapModel());
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {mapModel && <D3Renderer mapModel={mapModel} />}
      </header>
    </div>
  );
}

export default App;
