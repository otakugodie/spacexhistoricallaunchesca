import {Image} from '@chakra-ui/react'
import {Routes, Route } from 'react-router-dom';
import {LaunchList} from './components/LaunchList';
import {LaunchDetails} from './components/LaunchDetails';
import logo from './assets/SpaceXLogo.png';

export function App() {
  return (
    <>
      <Image m={4} src={logo} width={300}></Image>

      <Routes>
        <Route path='/' element={<LaunchList />} />
        <Route path='launch/:launchId' element={<LaunchDetails />} />
      </Routes>
    </>
  )
}