import React, { useCallback } from 'react';
import { Stage, Graphics } from '@inlet/react-pixi';

interface Props {
  color: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

const Canvas: React.FC<Props> = props => {
  const draw = useCallback(
    g => {
      const opacity = 1;
      const radius = 60;
      g.clear();
      g.lineStyle(0);
      g.beginFill(props.color, opacity);
      g.drawCircle(props.x, props.y, radius);
      g.endFill();
    },
    [props],
  );

  const { width, height } = props;

  return (
    <Stage width={width} height={height}>
      <Graphics draw={draw} />
    </Stage>
  );
};

export default Canvas;
