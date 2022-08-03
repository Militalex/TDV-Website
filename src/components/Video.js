import React from 'react'

function WebmVideo(options) {
    console.log(options)
    return (
        <video {...options}>
            <source src={options.path + ".webm"} type="video/webm" />
            <source src={options.path + ".mp4"} type="video/mp4" />
        </video>
    )
}

export default WebmVideo