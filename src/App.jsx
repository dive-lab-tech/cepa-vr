import './App.css'
import logoCepa from './assets/logo-cepa.png'
import logoGob from './assets/logo-gob.png'
import MainCepa from './assets/main-cepa.png'
import 'aframe';
import {
  Scene,
  Sky,
  Assets,
} from '@belivvr/aframe-react';


function App() {

  return (
    <div>
      <Scene>
        <Assets>
          <img id="logoCepa" src={logoCepa} />
          <img id="logoGob" src={logoGob} />
          <img id="mainCepa" src={MainCepa} />
        </Assets>
        <a-entity
          id="logoCepa"
          geometry="primitive: plane; width: 1; height: 1"
          material="src: #logoCepa"
          position="0 1.5 -3"
        />
        <a-entity
          id="logoGob"
          geometry="primitive: plane; width: 1; height: 1"
          material="src: #logoGob"
          position="0 0.5 -3"
        />
        <a-entity
          id="mainCepa"
          geometry="primitive: plane; width: 1; height: 1"
          material="src: #mainCepa"
          position="0 0 -3"
        />
        
        <Sky color="#004F8B" />

          
      </Scene>
      


        
    </div>
  )
}

export default App
