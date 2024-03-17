import { useEffect, useState } from "react"

export function useIsOnline() {
    const [isOnline, setIsOnline] = useState(null)

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status);
        }

        handleStatusChange(true);
    })
    return isOnline
}