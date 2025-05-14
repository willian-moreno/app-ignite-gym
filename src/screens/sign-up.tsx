import { Center, Heading } from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'

import { Button } from '@components/button'
import { Input } from '@components/input'

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

export function SignUp() {
  const navigator = useNavigation<AuthNavigatorRoutesProps>()

  async function handleGoBack() {
    navigator.goBack()
  }

  return (
    <>
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
        onPress={handleGoBack}
      />
    </>
  )
}
