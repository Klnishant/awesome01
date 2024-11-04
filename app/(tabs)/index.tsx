import { Image, StyleSheet, Platform, View, Text, useColorScheme } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
   const isDarkMode = useColorScheme() === 'light';
   const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    whiteText:{
      color: '#ffffff',
    },
    darkText: {
      color: '#000000',
    }
  });
  return (
    <SafeAreaView style={styles.container}>
      <View>
       <Text style={isDarkMode ? styles.darkText : styles.whiteText}> Hello World</Text>
      </View>
    </SafeAreaView>
  )
}