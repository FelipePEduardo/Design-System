import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + 32px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + 32px))` },
})

export const ToastContainer = styled(Toast.Root, {
  maxWidth: 360,
  background: '$gray800',
  padding: '$3 $5',
  borderRadius: '$sm',

  fontFamily: '$default',

  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',

  border: '1px solid $gray600',

  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },

  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  fontSize: '$xl',
  fontWeight: '$bold',
  color: '$white',
  lineHeight: '$base',
  marginBottom: '$1',
})

export const ToastDescription = styled(Toast.Description, {
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray200',
})

export const ToastClose = styled(Toast.Close, {
  border: 0,
  background: 'none',

  color: '$gray200',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: 32,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})
