import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(Tooltip.Content, {
  background: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',

  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',

  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
