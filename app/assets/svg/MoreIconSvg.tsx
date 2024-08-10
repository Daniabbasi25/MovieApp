import React, {FC} from 'react';
import {SvgProps} from '../../model';
import {Path, Rect, Svg} from 'react-native-svg';

const MoreIconSvg: FC<SvgProps> = ({height, width, color = '#827D88'}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 19 14" fill="none">
      <Path
        d="M0.465857 7.13284C0.465837 7.68514 0.913558 8.13288 1.46586 8.13288H2.52836C3.08063 8.13288 3.52834 7.68518 3.52836 7.13292L3.52836 6.96305C3.52838 6.41075 3.08066 5.96301 2.52836 5.96301H1.46586C0.913593 5.96301 0.465884 6.41071 0.465864 6.96298L0.465857 7.13284ZM0.465901 12.1301C0.465901 12.6824 0.913616 13.1301 1.4659 13.1301H2.5284C3.08068 13.1301 3.5284 12.6824 3.5284 12.1301V11.8507C3.5284 11.2984 3.08068 10.8507 2.5284 10.8507H1.4659C0.913615 10.8507 0.465901 11.2984 0.465901 11.8507V12.1301ZM0.465901 2.06987C0.465901 2.62215 0.913616 3.06987 1.4659 3.06987H2.5284C3.08068 3.06987 3.5284 2.62215 3.5284 2.06987V1.98767C3.5284 1.43539 3.08068 0.987671 2.5284 0.987671H1.4659C0.913616 0.987671 0.465901 1.43539 0.465901 1.98767V2.06987ZM5.05863 7.13284C5.05861 7.68514 5.50633 8.13288 6.05863 8.13288H17.0586C17.6109 8.13288 18.0586 7.68518 18.0586 7.13291L18.0586 6.96305C18.0587 6.41075 17.6109 5.96301 17.0586 5.96301H6.05864C5.50637 5.96301 5.05866 6.41071 5.05864 6.96298L5.05863 7.13284ZM5.05867 12.1301C5.05867 12.6824 5.50639 13.1301 6.05867 13.1301H17.0587C17.611 13.1301 18.0587 12.6824 18.0587 12.1301L18.0587 11.8507C18.0587 11.2984 17.611 10.8507 17.0587 10.8507H6.05867C5.50639 10.8507 5.05867 11.2984 5.05867 11.8507V12.1301ZM6.05868 0.987671C5.50639 0.987671 5.05867 1.43539 5.05867 1.98767L5.05867 2.06987C5.05867 2.62215 5.50639 3.06987 6.05867 3.06987H17.0587C17.611 3.06987 18.0587 2.62216 18.0587 2.06987L18.0587 1.98767C18.0587 1.43539 17.611 0.987671 17.0587 0.987671H6.05868Z"
        fill={color}
      />
    </Svg>
  );
};

export default MoreIconSvg;
