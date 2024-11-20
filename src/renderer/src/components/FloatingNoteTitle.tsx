import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const FloatingNoteTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const title = 'note title'

  return (
    <div className={twMerge('flex justify-center', className)} {...props}>
      <span className="text-zinc-500">{title}</span>
    </div>
  )
}
