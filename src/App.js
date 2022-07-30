import Upload from './components/Upload'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <Upload />
    </ErrorBoundary>
  )
}

export default App
