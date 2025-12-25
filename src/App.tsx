import { FullScreenChat, ChatbotProvider, initializeAPI } from '@flowdit/chatbot-library'
import '@flowdit/chatbot-library/dist/styles.css'

import './App.css'

function App() {
  initializeAPI({
    baseURL: 'https://localhost:8000',
    token: '.....'
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