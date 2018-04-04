import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = () => (
    <View style={styles.containerStyle}>
      <ActivityIndicator />
    </View>
  );

const styles = {
  spinnerStyle: {
  }
};

export { Spinner };
