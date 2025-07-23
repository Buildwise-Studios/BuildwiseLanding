import { useCallback, useRef, useEffect } from 'react'

export function useChatScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const shouldAutoScrollRef = useRef(true)

  const scrollToBottom = useCallback((force = false) => {
    if (!containerRef.current) return

    const container = containerRef.current
    const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 100

    // Only auto-scroll if user is near the bottom or if forced
    if (force || (shouldAutoScrollRef.current && isNearBottom)) {
      requestAnimationFrame(() => {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: 'smooth',
        })
      })
    }
  }, [])

  const scrollToBottomImmediate = useCallback(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    requestAnimationFrame(() => {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'auto',
      })
    })
  }, [])

  // Track user scroll behavior
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 100
      shouldAutoScrollRef.current = isNearBottom
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return { 
    containerRef, 
    scrollToBottom, 
    scrollToBottomImmediate,
    shouldAutoScroll: shouldAutoScrollRef.current 
  }
}
