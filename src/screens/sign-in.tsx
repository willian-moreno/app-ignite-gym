import { Center, Heading, Image, Text, VStack } from '@gluestack-ui/themed'

import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'

import { Input } from '@components/input'

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

        <Center gap="$2">
          <Heading color="$gray100">Acesse a conta</Heading>
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            placeholder="Senha"
            autoCapitalize="none"
            secureTextEntry
          />
        </Center>
      </VStack>
    </VStack>
  )
}
