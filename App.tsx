import { StatusBar, View } from 'react-native'

import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'
import { GluestackUIProvider, Text } from '@gluestack-ui/themed'

export function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <GluestackUIProvider>
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
          <Text
            fontSize={24}
            fontFamily="Roboto_700Bold"
            color="white"
          >
            Home
          </Text>
        ) : (
          <View />
        )}
      </View>
    </GluestackUIProvider>
  )
}
