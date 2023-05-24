import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  text: {
    marginLeft:30,
    marginTop:20,
    borderColor: '#ffff',
    color:'#ffff'
  }
});
