import {COLORS} from '@app/constants/Colors';
import {StyleSheet, Text, View} from 'react-native';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TEST MPC</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: COLORS.secondary,
    fontWeight: 'bold',
  },
});
