import type { StoryObj, Meta } from '@storybook/react'
import { Button, ToastBox, ToastProps } from '@flp-ignite-ui/react'
import { useEffect, useRef, useState } from 'react'

const ToastDemo = (props: ToastProps) => {
  const [open, setOpen] = useState(false)

  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => setOpen(true), 100)
        }}
      >
        Open Toast
      </Button>
      <ToastBox open={open} onOpenChange={setOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Form/Toast',
  component: ToastDemo,

  args: {
    title: 'Agentamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
