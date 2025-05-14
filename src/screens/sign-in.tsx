import { Platform } from 'react-native'

import {
  Center,
  Heading,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed'

import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'

import { Button } from '@components/button'
import { Input } from '@components/input'

export function SignIn() {
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
              <Button text="Acessar" />
            </Center>

            <Center
              flex={1}
              justifyContent="flex-end"
              mt="$12"
            >
              <Text
                color="$gray100"
                fontFamily="$body"
                fontSize="$sm"
                mb="$3"
              >
                Ainda não tem acesso?
              </Text>
              <Button
                text="Criar conta"
                variant="outline"
              />
            </Center>
          </VStack>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
