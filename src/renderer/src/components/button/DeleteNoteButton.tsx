import { Trash } from 'lucide-react'
import { ActionButton, ActionButtonProps } from './ActionButton'
import { useSetAtom } from 'jotai'
import { deleteNoteAtom } from '@renderer/store'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)

  const handleDelete = () => {
    deleteNote()
  }

  return (
    <ActionButton onClick={handleDelete} {...props}>
      <Trash className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
