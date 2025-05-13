import { StatusBar, View } from 'react-native'

import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'
import { Center, GluestackUIProvider, Text } from '@gluestack-ui/themed'

import { config } from './config/gluestack-ui.config'

export function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? (
        <Center
          flex={1}
          bg="$gray700"
        >
          <Text
            fontSize={24}
            fontFamily="Roboto_700Bold"
            color="white"
          >
            Home
          </Text>
        </Center>
      ) : (
        <View />
      )}
    </GluestackUIProvider>
  )
}
