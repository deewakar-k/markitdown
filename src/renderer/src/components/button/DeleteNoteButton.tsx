import { Trash } from 'lucide-react'
import { ActionButton, ActionButtonProps } from './ActionButton'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <Trash className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
