import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <View>
      <LottieView
        source={require('../../assets/lottie/loading1.json')}
        autoPlay
        style={{flex: 1}}
      />
    </View>
  );
};

export default Loading;
