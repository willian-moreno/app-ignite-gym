import { Center, Heading, Image, ScrollView, Text, VStack } from '@gluestack-ui/themed'

import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'

import { Button } from '@components/button'
import { Input } from '@components/input'

export function SignUp() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
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

          <Center
            flex={1}
            gap="$2"
          >
            <Heading color="$gray100">Crie sua conta</Heading>
            <Input placeholder="Nome" />
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
            <Button text="Criar e acessar" />
          </Center>

          <Button
            text="Voltar para o login"
            variant="outline"
            mt="$12"
          />
        </VStack>
      </VStack>
    </ScrollView>
  )
}
