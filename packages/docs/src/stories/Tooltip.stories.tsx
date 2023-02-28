import type { StoryObj, Meta } from '@storybook/react'
import { Box, Button, TooltipBox, TooltipProps } from '@flp-ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: TooltipBox,

  args: {
    children: <Button>Hover Tooltip</Button>,
    content: 'This is a Tooltip',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '$16',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
