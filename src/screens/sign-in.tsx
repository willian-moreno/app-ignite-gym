import { Center, Heading, Text } from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'

import { Button } from '@components/button'
import { Input } from '@components/input'

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

export function SignIn() {
  const navigator = useNavigation<AuthNavigatorRoutesProps>()

  async function handleNavigateToSignUp() {
    navigator.navigate('sign_up')
  }

  return (
    <>
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
          onPress={handleNavigateToSignUp}
        />
      </Center>
    </>
  )
}
