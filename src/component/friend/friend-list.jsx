import React from 'react'
import { useIsOnline } from '../../hooks/useIsOnline'

const FriendList = () => {
    const isOnline = useIsOnline()
    return (
        <div>
            <h2>FriendList
            </h2>
            <p style={{ color: isOnline ? 'red' : 'grey' }}>Ale</p>

        </div>
    )
}

export default FriendList