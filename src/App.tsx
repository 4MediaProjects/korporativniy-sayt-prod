import styles from './App.module.scss';
import './index.scss';
import Header from './widgets/ui/Header';
import MainPageBody from './components/MainPageBody';
import { JivemVNijnemVK } from './components/Livennov/JivemVNijnemVK';
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
import { JivemVNijnemTG } from './components/Livennov/JivemVNijnemTG';
import { AbakanInfoPortal } from './components/Abakan/AbakanInfoPortal';
import { AbakanTG } from './components/Abakan/AbakanTG';
import { AbakanVK } from './components/Abakan/AbakanVK';
import { AbakanTV } from './components/Abakan/AbakanTV';
import { AbakanNotaBene } from './components/Abakan/AbakanNotaBene';
import { AbakanRadio } from './components/Abakan/AbakanRadio';
import { AchinskTV } from './components/Achinsk/AchinskTV';
import { JivemVNijnemInfoPortal } from './components/Livennov/JivemVNijnemInfoPortal';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import { KomandaPage } from './components/KomandaPage/KomandaPage';

function App() {
    return (
        <div>
            <Header />
            {/*<MainPageBody />*/}
            {/*<CityPage />*/}
            <Routes>
                <Route path="/komanda" element={<KomandaPage />} />
                <Route path="/" element={<MainPageBody />} />
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
                <Route
                    path="/abakan/info-portal"
                    element={<AbakanInfoPortal />}
                />
                <Route path="/abakan/notabene" element={<AbakanNotaBene />} />
                <Route path="/abakan/radio" element={<AbakanRadio />} />
                <Route path="/abakan/tv" element={<AbakanTV />} />
                <Route path="/abakan/tg-channel" element={<AbakanTG />} />
                <Route path="/abakan/vk-group" element={<AbakanVK />} />

                <Route path="/achinsk/tv" element={<AchinskTV />} />

                <Route path="/bratsk/bratsk-24" element={<Bratsk24 />} />
                <Route path="/bratsk/domashniy" element={<BratskDomashniy />} />
                <Route
                    path="/bratsk/evropa-plus"
                    element={<BratskEvropaPlus />}
                />
                <Route path="/bratsk/tg-channel" element={<BratskTG />} />
                <Route path="/bratsk/vk-group" element={<BratskVK />} />
                <Route
                    path="/bratsk/info-portal"
                    element={<BratskInfoPortal />}
                />
                <Route path="/bratsk/pifm" element={<BratskPiFM />} />
                <Route path="/bratsk/shanson" element={<BratskShanson />} />
                <Route path="/bratsk/sts" element={<BratskSTS />} />
                <Route path="/bratsk/tvc" element={<BratskTVC />} />
                <Route path="/bratsk/umorfm" element={<BratskUmorFM />} />

                <Route
                    path="/irkutsk/avtoradio"
                    element={<IrkutskAvtoradio />}
                />
                <Route path="/irkutsk/shanson" element={<IrkutskShanson />} />
                <Route path="/irkutsk/tg-channel" element={<IrkutskTG />} />
                <Route path="/irkutsk/tv" element={<IrkutskTV />} />
                <Route path="/irkutsk/vk-group" element={<IrkutskVK />} />

                <Route
                    path="/krasnoyarsk/info-portal"
                    element={<KrasnoyarskInfoPortal />}
                />
                <Route
                    path="/krasnoyarsk/radio"
                    element={<KrasnoyarskRadio />}
                />
                <Route
                    path="/krasnoyarsk/tg-channel"
                    element={<KrasnoyarskTG />}
                />
                <Route path="/krasnoyarsk/tv" element={<KrasnoyarskTV />} />
                <Route
                    path="/krasnoyarsk/vk-group"
                    element={<KrasnoyarskVK />}
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
}

export default App;
