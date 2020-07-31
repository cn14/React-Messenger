import React, {forwardRef} from 'react'
import { Card, Typography, CardContent } from '@material-ui/core'
import './Message.css';
const Message = forwardRef(({username, message}, ref) => {
    const isUser = username === message.username;
    return (

        <Card  ref = {ref} className = {isUser ? 'message_user':'message_guest'}>
            <CardContent>
                <Typography>
                    {!isUser && `${message.username || 'Unknown User'} :`} {message.message}
                </Typography>
            </CardContent>
        </Card>

    )
})

export default Message
