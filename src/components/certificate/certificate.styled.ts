import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  page: {
    fontFamily: 'Roboto',
    flexDirection: 'row',
  },
  view: {
    width: '100%',
    height: '100%',
    padding: 0,
  },
  image: {
    width: '100%',
  },
  text: {
    position: 'absolute',
    left: '0px',
    right: '0px',
    top: '50%',
    marginHorizontal: 'auto',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
