import * as Tooltip from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import { TooltipArrow, TooltipContent } from './styles'

export interface TooltipProps extends ComponentProps<typeof Tooltip.Root> {
  content: string
}

export function TooltipBox({ content, children, ...props }: TooltipProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root {...props}>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <TooltipContent>
            <TooltipArrow />
            {content}
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

TooltipBox.displayName = 'Tooltip'
