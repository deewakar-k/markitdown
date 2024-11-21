import { LucideFileSignature } from 'lucide-react'
import { ActionButton, ActionButtonProps } from './ActionButton'
import { useSetAtom } from 'jotai'
import { createEmptyNoteAtom } from '@renderer/store'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const createNote = useSetAtom(createEmptyNoteAtom)

  const handleCreation = () => {
    createNote()
  }

  return (
    <ActionButton onClick={handleCreation} {...props}>
      <LucideFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
