import styles from './App.module.scss';
import './index.scss';
import Header from './widgets/ui/Header';
import MainPageBody from './components/MainPageBody';
import { JivemVNijnemVK } from './components/JivemVNijnem/JivemVNijnemVK';
import { BratskInfoPortal } from './components/Bratsk/BratskInfoPortal';
import { BratskTG } from './components/Bratsk/BratskTG';
import { BratskVK } from './components/Bratsk/BratskVK';
import { Bratsk24 } from './components/Bratsk/Bratsk24';
import { BratskSTS } from './components/Bratsk/BratskSTS';
import { BratskDomashniy } from './components/Bratsk/BratskDomashniy';
import { BratskTVC } from './components/Bratsk/BratskTVC';
import { BratskEvropaPlus } from './components/Bratsk/BratskEvropaPlus';
import { BratskShanson } from './components/Bratsk/BratskShanson';
import { BratskUmorFM } from './components/Bratsk/BratskUmorFM';
import { BratskPiFM } from './components/Bratsk/BratskPiFM';
import { IrkutskTG } from './components/Irkutsk/IrkutskTG';
import { IrkutskVK } from './components/Irkutsk/IrkutskVK';
import { IrkutskTV } from './components/Irkutsk/IrkutskTV';
import { IrkutskAvtoradio } from './components/Irkutsk/IrkutskAvtoradio';
import { IrkutskShanson } from './components/Irkutsk/IrkutskShanson';
import { KrasnoyarskInfoPortal } from './components/Krasnoyarsk/KrasnoyarskInfoPortal';
import { KrasnoyarskTG } from './components/Krasnoyarsk/KrasnoyarskTG';
import { KrasnoyarskVK } from './components/Krasnoyarsk/KrasnoyarskVK';
import { KrasnoyarskTV } from './components/Krasnoyarsk/KrasnoyarskTV';
import { KrasnoyarskRadio } from './components/Krasnoyarsk/KrasnoyarskRadio';
import { JivemVNijnemTG } from './components/JivemVNijnem/JivemVNijnemTG';
import { AbakanInfoPortal } from './components/Abakan/AbakanInfoPortal';
import { AbakanTG } from './components/Abakan/AbakanTG';
import { AbakanVK } from './components/Abakan/AbakanVK';
import { AbakanTV } from './components/Abakan/AbakanTV';
import { AbakanNotaBene } from './components/Abakan/AbakanNotaBene';
import { AbakanRadio } from './components/Abakan/AbakanRadio';
import { AchinskTV } from './components/Achinsk/AchinskTV';
import { JivemVNijnemInfoPortal } from './components/JivemVNijnem/JivemVNijnemInfoPortal';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
    return (
        <div>
            <Header />
            {/*<MainPageBody />*/}
            {/*<CityPage />*/}
            <Routes>
                <Route
                    path="/nijniy-novgorod/info-portal"
                    element={<JivemVNijnemInfoPortal />}
                />
                <Route
                    path="/nijniy-novgorod/tg-channel"
                    element={<JivemVNijnemTG />}
                />
                <Route
                    path="/nijniy-novgorod/vk-group"
                    element={<JivemVNijnemVK />}
                />
            </Routes>
        </div>
    );
}

export default App;
