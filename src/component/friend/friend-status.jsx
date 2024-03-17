import React from 'react'
import { useIsOnline } from '../../hooks/useIsOnline'


const FriendStatus = () => {
    const isOnline = useIsOnline()

    return (
        <div>
            <h2>FriendStatus</h2>
            <h4>{isOnline ? 'online' : 'offline'}</h4>
        </div>
    )
}

export default FriendStatus