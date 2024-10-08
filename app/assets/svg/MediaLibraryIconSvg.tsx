import React, {FC} from 'react';
import {SvgProps} from '../../model';
import {Path, Rect, Svg} from 'react-native-svg';

const MediaLibraryIconSvg: FC<SvgProps> = ({
  height,
  width,
  color = '#827D88',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
      <Rect
        y="3.47369"
        width="18"
        height="14.5263"
        rx="0.947368"
        fill={color}
      />
      <Path
        d="M16.1052 1.57892C16.6104 1.57892 16.7367 2.10523 16.7367 2.36839H0.947266C0.947266 1.73681 1.36832 1.57892 1.57884 1.57892H16.1052Z"
        fill={color}
      />
      <Path
        d="M15.2462 0C15.6808 0 15.7894 0.421053 15.7894 0.631579H2.21045C2.21045 0.126316 2.57255 0 2.75361 0H15.2462Z"
        fill={color}
      />
    </Svg>
  );
};

export default MediaLibraryIconSvg;
