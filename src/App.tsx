import { FullScreenChat, ChatbotProvider, initializeAPI } from '@flowdit/chatbot-library'
import '@flowdit/chatbot-library/dist/styles.css'

import './App.css'

function App() {
  // Get token from URL query parameters
  const queryParams = new URLSearchParams(window.location.search);
  const urlToken = queryParams.get('token');

  // Use URL token if available, otherwise fallback to env token
  const token = urlToken || (typeof import.meta !== 'undefined' && import.meta.env?.VITE_DEFAULT_TOKEN) || '';

  initializeAPI({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'https://localhost:8000',
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