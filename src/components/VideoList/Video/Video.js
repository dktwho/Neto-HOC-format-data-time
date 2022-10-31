
import DateTime from './DataTime/DataTime';

export default function Video(props) {
  return (
    <div className="Video">
      <iframe
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title={props.title}
      />
      <DateTime date={props.date} />
    </div>
  );
}
