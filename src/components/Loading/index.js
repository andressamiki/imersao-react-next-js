import Lottie from 'react-lottie';
import Widget from '../Widget';
import animationData from '../../../lotties/spinnerAnimation.json';

export default function Loading() {
  const [animationState] = React.useState({ isStopped: false, isPaused: false });
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        <div>
          <Lottie
            options={defaultOptions}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        </div>
      </Widget.Content>
    </Widget>
  );
}
