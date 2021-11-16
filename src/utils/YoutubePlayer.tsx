import ReactPlayer from 'react-player/youtube';

const YoutubePlayer = (props : any) => {
  return (
    <ReactPlayer url={props.url} playing={true} muted width="100%"/>
  );
}

export default YoutubePlayer;