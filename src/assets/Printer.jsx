import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Printer = () => {
  return (
    <View>
      <Svg width={27} height={22} viewBox="0 0 27 22">
        <Path
          d="M18.5587 0C18.9575 0 19.3523 0.0711309 19.7207 0.209331C20.0891 0.347532 20.4238 0.550095 20.7058 0.805456C20.9878 1.06082 21.2114 1.36398 21.364 1.69762C21.5166 2.03127 21.5951 2.38886 21.5951 2.75V3.67033H22.6073C23.7705 3.67098 24.886 4.08961 25.7088 4.83434C26.5316 5.57906 26.9945 6.58903 26.996 7.64256L27 14.9722C27.0002 15.3332 26.9218 15.6907 26.7695 16.0242C26.6171 16.3578 26.3937 16.6609 26.112 16.9163C25.8303 17.1716 25.4958 17.3742 25.1276 17.5125C24.7595 17.6508 24.3648 17.7221 23.9663 17.7222H21.5924V19.25C21.5924 19.9793 21.2725 20.6788 20.7031 21.1945C20.1336 21.7103 19.3613 22 18.556 22H8.43455C7.62923 22 6.85691 21.7103 6.28746 21.1945C5.71802 20.6788 5.39811 19.9793 5.39811 19.25V17.7222H3.03644C2.23112 17.7222 1.45879 17.4325 0.889352 16.9168C0.319909 16.401 0 15.7016 0 14.9722V7.64378C0 6.59028 0.462091 5.57993 1.28462 4.83499C2.10715 4.09006 3.22273 3.67156 4.38597 3.67156L5.39676 3.67033L5.39811 2.75C5.39811 2.02065 5.71802 1.32118 6.28746 0.805456C6.85691 0.289731 7.62923 0 8.43455 0H18.5587ZM18.556 12.8333H8.43455C8.16611 12.8333 7.90867 12.9299 7.71885 13.1018C7.52904 13.2737 7.4224 13.5069 7.4224 13.75V19.25C7.4224 19.756 7.87584 20.1667 8.43455 20.1667H18.556C18.8244 20.1667 19.0819 20.0701 19.2717 19.8982C19.4615 19.7263 19.5682 19.4931 19.5682 19.25V13.75C19.5682 13.5069 19.4615 13.2737 19.2717 13.1018C19.0819 12.9299 18.8244 12.8333 18.556 12.8333ZM22.6073 5.50489H4.38597C3.75961 5.50489 3.15891 5.73024 2.71601 6.13136C2.27311 6.53247 2.02429 7.07651 2.02429 7.64378V14.9722C2.02429 15.4782 2.47773 15.8889 3.03644 15.8889H5.39811V13.75C5.39811 13.0207 5.71802 12.3212 6.28746 11.8055C6.85691 11.2897 7.62923 11 8.43455 11H18.556C19.3613 11 20.1336 11.2897 20.7031 11.8055C21.2725 12.3212 21.5924 13.0207 21.5924 13.75V15.8889H23.9987C24.2608 15.881 24.5094 15.781 24.6917 15.6102C24.874 15.4394 24.9759 15.211 24.9757 14.9734L24.9717 7.64378C24.9702 7.07648 24.7206 6.53283 24.2774 6.13192C23.8342 5.73101 23.2337 5.50553 22.6073 5.50489ZM18.5587 1.83333H8.43455C8.16611 1.83333 7.90867 1.92991 7.71885 2.10182C7.52904 2.27373 7.4224 2.50688 7.4224 2.75L7.42105 3.67033H19.5709V2.75C19.5709 2.50688 19.4642 2.27373 19.2744 2.10182C19.0846 1.92991 18.8271 1.83333 18.5587 1.83333Z"
          fill="white"
        />
      </Svg>
    </View>
  );
};

export default Printer;