import React from 'react';
import NewsList from './NewsList'
const HostSliders = React.lazy(() => import("remote/Sliders"))

function App() {
  return (
    <div>
      <h2>本地组件 NewsList</h2>
      <NewsList />
      <h2>Host Sliders</h2>
      <React.Suspense fallback={<div>Loading HostSliders</div>}>
        <HostSliders />
      </React.Suspense>
    </div>
  )
}

export default App