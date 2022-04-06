import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export const LogoTitle = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://http2.mlstatic.com/D_NQ_NP_996968-MLA45245658175_032021-O.jpg',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  image: {
    width: 125,
    height: 55,
  },
});
