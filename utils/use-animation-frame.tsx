import { useCallback, useRef, useEffect } from "react";

const useAnimantionFrame = (enabled: boolean, callback: () => void) => {

    const requestRef = useRef<ReturnType<typeof requestAnimationFrame>>(0)

    const animate = useCallback(() => {
        callback()
        requestRef.current = requestAnimationFrame(animate)

    }, [callback])

    useEffect(() => {
        if (enabled)
            requestRef.current = requestAnimationFrame(animate)
        return () => {
            if (requestRef.current) {
                return cancelAnimationFrame(requestRef.current)
            }
        }
    }, [enabled, animate])
}

export default useAnimantionFrame