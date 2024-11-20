import { cn, formatDateFromMs } from '@renderer/utils'
import { ComponentProps } from 'react'
import { NoteInfo } from 'src/shared/models'

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>

export const NotePreview = ({
  title,
  content,
  lastEditTime,
  isActive = false,
  className,
  ...props
}: NotePreviewProps) => {
  const date = formatDateFromMs(lastEditTime)

  return (
    <div
      {...props}
      className={cn(
        'cursor-pointer px-2 py-3 rounded-md transition-colors duration-75',
        {
          'bg-zinc-400/75': isActive,
          'hover:bg-zinc-500': !isActive
        },
        className
      )}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 font-light text-left">{date}</span>
    </div>
  )
}