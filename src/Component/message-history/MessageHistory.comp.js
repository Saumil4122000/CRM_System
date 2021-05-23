import React from 'react'
import Proptyes from 'prop-types'
import './message-history.style.css'

export const MessageHistory = ({ msg }) => {
    if (!msg) return null
    return msg.map((row, i) =>
        <div key={i} className="message-history mt-3">
            <div className="send font-weight-bold textsecondry">
                <div className="sender">
                    {row.messageBy}
            </div>
                <div className="date">
                    {row.date}
            </div>
            </div>

            <div className="message">
                    {row.message}
            </div>
        </div>
    )


}

MessageHistory.prototype = {
    msg: Proptyes.array.isRequired
}