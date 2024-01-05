// import { DotLottiePlayer, Controls, PlayerEvents } from '@dotlottie/react-player';
// import '@dotlottie/react-player/dist/index.css';
import YouTube from 'react-youtube'
// import { useState } from 'react';
const Videos = () => {
    // const [loading, setLoading] = useState(true);
    const opts = {
        height: '300',
        width: '500',
        playerVars: {
          autoplay: 1,
        },
      };

      const onReady = (event:any) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      };
  return (
   
    <div className='flex flex-col'>
    {/* {loading ? (
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
    )} */}
<h1 className='text-2xl text-center py-5 text-gray-500'>Videos</h1>
<div className='flex flex-row gap-5 px-10 justify-center items-center w-full'>
<YouTube
      videoId="wYjp2zoqQrs"
      opts={opts}
      onReady={onReady}
    />

<YouTube
      videoId="Mne7IBAU9Nc"
      opts={opts}
      onReady={onReady}
    />
</div>


  </div>
  
  );
};

export default Videos;
