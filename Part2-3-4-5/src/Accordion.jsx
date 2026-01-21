import { useState } from 'react'
import Panel from './Panel'

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="accordion">
      <h2>Accordion</h2>

      <Panel
        title="Panel 1"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        <p>This is the content of Panel 1.</p>
      </Panel>

      <Panel
        title="Panel 2"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        <p>This is the content of Panel 2.</p>
      </Panel>
    </div>
  )
}
