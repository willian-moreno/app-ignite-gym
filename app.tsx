import { StatusBar } from 'react-native'

import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'
import { GluestackUIProvider } from '@gluestack-ui/themed'

import { Loading } from '@components/loading'

import { Routes } from '@routes/index'

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
      {fontsLoaded ? <Routes /> : <Loading />}
    </GluestackUIProvider>
  )
}
