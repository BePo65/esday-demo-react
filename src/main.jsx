import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { esday } from 'esday'
import advancedFormatPlugin from 'esday/plugins/advancedFormat'

import './index.css'
import App from './App.jsx'

esday.extend(advancedFormatPlugin)

const now = esday()
const nowFormatted = now.format('YYYY-MM-DD HH:mm:ss')
const futureDateFormatted = now.add(5, 'days').format('YYYY-MM-DD HH:mm:ss')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App now={nowFormatted} futureDate={futureDateFormatted} />
  </StrictMode>,
)
