import React, { useState } from 'react'
import { DotLottiePlayer, Controls, PlayerEvents } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
const Animation = () => {
     const [loading, setLoading] = useState(true);
  return (
    <div>
      <h1>Animation</h1>
         {loading ? (
      <div>loading....</div>
    ) : (
      <DotLottiePlayer
        src="https://lottie.host/c404786e-2d84-4239-a092-5fa55366d5a7/DRPRrsgJH4.json"
        onEvent={(event: PlayerEvents) => {
          if (event === PlayerEvents.Ready) {
            setLoading(false);
          }
        }}
        autoplay
        loop
      >
        <Controls />
      </DotLottiePlayer>
    )}
        </div>
  )
}

export default Animation