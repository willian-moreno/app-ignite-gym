import { Image, VStack } from '@gluestack-ui/themed'

import BackgroundImg from '@assets/background.png'

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
    </VStack>
  )
}
