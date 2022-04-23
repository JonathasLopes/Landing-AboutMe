import React, { useState } from 'react';
import './Utils/colors.css';
import './Assets/global.css';
import Routers from './routes';
import LocaleContext from './LocaleContext';
import i18n from './i18n';

function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  return (
    <LocaleContext.Provider value={{locale, setLocale}}>
      <Routers />
    </LocaleContext.Provider>
  );
}

export default App;
