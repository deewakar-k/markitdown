import {
  ActionsButtonRow,
  Content,
  Editor,
  FloatingNoteTitle,
  NotePreviewList,
  RootLayout,
  Sidebar
} from '@/components'

const App = () => {
  return (
    <>
      <RootLayout>
        <Sidebar className="p-2">
          <ActionsButtonRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-900 border-l-white/20">
          <FloatingNoteTitle className="pt-2" />
          <Editor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
