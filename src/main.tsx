import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import './app/styles/index.css'
import '@/shared/const/i18n.ts'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './shared/const/theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
