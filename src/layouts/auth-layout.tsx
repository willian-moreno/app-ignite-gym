import { Platform } from 'react-native'

import { Center, Image, KeyboardAvoidingView, ScrollView, Text, VStack } from '@gluestack-ui/themed'

import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'

type Props = {
  children: React.ReactNode
}

export function AuthLayout({ children }: Props) {
  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={10}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <VStack flex={1}>
          <Image
            defaultSource={BackgroundImg}
            source={BackgroundImg}
            alt="Pessoas treinando"
            w="$full"
            h="$3/4"
            position="absolute"
          />
          <VStack
            flex={1}
            px="$10"
            pb="$16"
          >
            <Center my="$24">
              <LogoSvg />
              <Text
                color="$gray100"
                fontSize="$sm"
              >
                Treine sua mente e o seu corpo.
              </Text>
            </Center>
            {children}
          </VStack>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
