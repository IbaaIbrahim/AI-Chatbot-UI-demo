import { FullScreenChat, ChatbotProvider, initializeAPI } from '@flowdit/chatbot-library'
import '@flowdit/chatbot-library/dist/styles.css'

import './App.css'

function App() {
  // Get token from URL query parameters
  const queryParams = new URLSearchParams(window.location.search);
  const urlToken = queryParams.get('token');
  
  // Use URL token if available, otherwise fallback to hardcoded (or remove hardcoded in prod)
  const token = urlToken || (typeof import.meta !== 'undefined' && import.meta.env?.VITE_DEFAULT_TOKEN) || '';

  initializeAPI({
    baseURL: 'https://flowdit-ai.v2202503187605326384.powersrv.de',
    token: token
  })
  return (
    <div className="App">
      <div className='App-Wrapper'>
        <ChatbotProvider>
          <FullScreenChat />
        </ChatbotProvider>
      </div>
    </div>
  )
}

export default App