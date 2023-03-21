import './App.css'
import logoCepa from './assets/logo-cepa.png'
import logoGob from './assets/logo-gob.png'
import MainCepa from './assets/main-cepa.png'
import 'aframe';
import {
  Scene,
  Sky,
  Assets,
  Entity,
  Box,
  Plane,
} from '@belivvr/aframe-react';


function App() {

  return (
    <div>
      <Scene>
        
        <Box
          position={{ x: 0, y: 0, z: -5 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          color="#4CC3D9"
          width="4"
          height="4"
          depth="4"
        />

        <Plane
          position={{ x: 0, y: 0, z: -5 }}
          rotation={{ x: -90, y: 0, z: 0 }}
          color="#7BC8A4"
          width="4"
          height="4"
        />

        <Entity
          primitive="a-camera"
          position={{ x: 0, y: 0, z: 0 }}
          rotation={{ x: 0, y: 0, z: 0 }}
        />

        <Assets>
          <img id="logo-cepa" src={logoCepa} />
          <img id="logo-gob" src={logoGob} />
          <img id="main-cepa" src={MainCepa} />
        </Assets>




       
        <Sky color="#004F8B" />

          
      </Scene>
      


        
    </div>
  )
}

export default App
