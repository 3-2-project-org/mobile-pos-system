import React from "react";
import { Path, Svg } from "react-native-svg";
import { View, Text } from "react-native";


const BackIcon = () => {
  return (
    <View>
      <Svg
        width="9"
        height="16"
        viewBox="0 0 9 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.439657 9.06002C0.158756 8.77877 0.000976563 8.39752 0.000976562 8.00002C0.000976562 7.60252 0.158756 7.22127 0.439657 6.94002L6.09566 1.28202C6.37705 1.00076 6.75865 0.842802 7.15651 0.842896C7.35351 0.842942 7.54857 0.88179 7.73056 0.957221C7.91254 1.03265 8.07789 1.14319 8.21716 1.28252C8.35642 1.42185 8.46688 1.58725 8.54223 1.76928C8.61757 1.9513 8.65633 2.14638 8.65628 2.34338C8.65624 2.54038 8.61739 2.73544 8.54196 2.91742C8.46653 3.09941 8.35599 3.26476 8.21666 3.40402L3.62066 8.00002L8.21666 12.596C8.35999 12.7343 8.47434 12.8998 8.55303 13.0828C8.63173 13.2657 8.6732 13.4625 8.67503 13.6617C8.67685 13.8609 8.63899 14.0584 8.56366 14.2428C8.48832 14.4272 8.37702 14.5947 8.23625 14.7356C8.09548 14.8765 7.92805 14.988 7.74375 15.0635C7.55944 15.139 7.36194 15.177 7.16277 15.1754C6.9636 15.1738 6.76675 15.1325 6.58371 15.0539C6.40067 14.9754 6.2351 14.8612 6.09666 14.718L0.437657 9.06002H0.439657Z"
          fill="#0FA958"
        />
      </Svg>
    </View>
  );
};

export default BackIcon;