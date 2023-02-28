import * as Toast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof Toast.Root> {
  title: string
  description: string
}

export function ToastBox({ title, description, ...props }: ToastProps) {
  return (
    <Toast.Provider>
      <ToastContainer {...props}>
        <div>
          <ToastTitle>{title}</ToastTitle>
          <ToastDescription>{description}</ToastDescription>
        </div>
        <ToastClose>
          <X size={20} />
        </ToastClose>
      </ToastContainer>

      <ToastViewport />
    </Toast.Provider>
  )
}

ToastBox.displayName = 'Toast'
