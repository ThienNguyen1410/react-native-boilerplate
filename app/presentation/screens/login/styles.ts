import {COLORS} from '@app/constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  imageContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    color: COLORS.primary,
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    width: '80%',
    height: '25%',
    borderRadius: 10,
  },
  textButton: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialContainer: {
    flex: 1,
    alignItems: 'center',
    margin: '10%',
    paddingBottom: '5%',
  },
  socialButton: {
    margin: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    width: '80%',
    height: '25%',
    borderRadius: 10,
  },
});
