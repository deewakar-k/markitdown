import {
  ActionsButtonRow,
  Content,
  Editor,
  FloatingNoteTitle,
  NotePreviewList,
  RootLayout,
  Sidebar
} from '@/components'
import { useRef } from 'react'

const App = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <>
      <RootLayout>
        <Sidebar className="p-2">
          <ActionsButtonRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-1" onSelect={resetScroll} />
        </Sidebar>
        <Content ref={contentContainerRef} className="border-l bg-zinc-900 border-l-white/20">
          <FloatingNoteTitle className="pt-2" />
          <Editor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
