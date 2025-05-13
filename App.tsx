import { StatusBar, Text, View } from 'react-native'

import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'

export function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#202024',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? (
        <Text style={{ fontFamily: 'Roboto_700Bold', color: '#fff' }}>Home</Text>
      ) : (
        <View />
      )}
    </View>
  )
}
