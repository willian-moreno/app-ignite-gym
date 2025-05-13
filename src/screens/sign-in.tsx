import { Center, Image, Text, VStack } from '@gluestack-ui/themed'

import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'

export function SignIn() {
  return (
    <VStack
      flex={1}
      bg="$gray700"
    >
      <Image
        defaultSource={BackgroundImg}
        source={BackgroundImg}
        alt="Pessoas treinando"
        w="$full"
        h="$3/4"
        position="absolute"
      />
      <Center my="$24">
        <LogoSvg />
        <Text
          color="$gray100"
          fontSize="$sm"
        >
          Treine sua mente e o seu corpo.
        </Text>
      </Center>
    </VStack>
  )
}
