declare global {
  interface Window {
    gtag: (
      command: 'config' | 'set' | 'event',
      targetId: string,
      params: Record<string, any>
    ) => void
  }
}

export {}
