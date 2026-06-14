'use client'

import { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react'

interface ModalState {
  isOpen: boolean
  type: string | null
  data: unknown
}

interface ModalContextType {
  modal: ModalState
  openModal: (type: string, data?: unknown) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    type: null,
    data: null,
  })

  const openModal = useCallback((type: string, data?: unknown) => {
    setModal({ isOpen: true, type, data })
  }, [])

  const closeModal = useCallback(() => {
    setModal({ isOpen: false, type: null, data: null })
  }, [])

  const value = useMemo(
    () => ({
      modal,
      openModal,
      closeModal,
    }),
    [modal, openModal, closeModal]
  )

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}