import styles from './App.module.scss'
import './index.scss'
import Header from "./widgets/ui/Header";
import MainPageBody from "./components/MainPageBody";
import CityPage from './components/CityPage';

function App() {

  return (
    <div>
      <Header />
      {/*<MainPageBody />*/}
      <CityPage />
    </div>
  )
}

export default App
