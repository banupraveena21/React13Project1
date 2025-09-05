import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LocalStorageDemo from './components/LocalStorageDemo'
import FetchExample from './components/FetchDemo'
import InputExample from './components/InputExample'
import SearchInput from './components/DebounceDemo'
import PreviousValueDemo from './components/PreviousValueDemo'
import HoverDemo from './components/HoverDemo'
import Page from './components/TitleDemo'
import useTimeout from './hooks/useTimeout'
import ClipboardExample from './components/ClipboardDemo'
import ResponsiveComponent from './components/MediaQueryDemo'
import OnlineStatus from './components/OnlineStatusDemo'
import GeolocationExample from './components/GeolocationDemo'
import ThemeToggle from './components/ThemeDemo'
import CounterDemo from './components/CounterDemo'


function App() {
  return (
    <div>
      <CounterDemo />
    </div>
  )
}

export default App;
