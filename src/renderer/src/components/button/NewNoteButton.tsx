import { LucideFileSignature } from 'lucide-react'
import { ActionButton, ActionButtonProps } from './ActionButton'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <LucideFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
