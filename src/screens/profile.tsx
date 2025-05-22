import { Platform, ScrollView, TouchableOpacity } from 'react-native'

import { Center, Heading, KeyboardAvoidingView, Text, VStack } from '@gluestack-ui/themed'

import { Button } from '@components/button'
import { Input } from '@components/input'
import { UserPhoto } from '@components/user-photo'

import { ScreenHeader } from '../components/screen-header'

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <KeyboardAvoidingView
        flex={1}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={10}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 56 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Center
            mt="$6"
            px="$10"
          >
            <UserPhoto
              source={{ uri: 'https://github.com/willian-moreno.png' }}
              size="xl"
              alt="Imagem do usuário"
            />
            <TouchableOpacity activeOpacity={0.7}>
              <Text
                color="$green500"
                fontFamily="$heading"
                fontSize="$md"
                mt="$2"
                mb="$8"
              >
                Alterar Foto
              </Text>
            </TouchableOpacity>

            <Center
              w="$full"
              gap="$4"
            >
              <Input
                bg="$gray600"
                placeholder="Nome"
              />
              <Input
                bg="$gray600"
                value="johndoe@email.com"
                isReadOnly
              />
            </Center>

            <Heading
              color="$gray200"
              fontSize="$md"
              fontFamily="$heading"
              mt="$12"
              mb="$2"
              alignSelf="flex-start"
            >
              Alterar senha
            </Heading>

            <Center
              w="$full"
              gap="$4"
            >
              <Input
                bg="$gray600"
                placeholder="Senha anterior"
                secureTextEntry
              />
              <Input
                bg="$gray600"
                placeholder="Nova senha"
                secureTextEntry
              />
              <Input
                bg="$gray600"
                placeholder="Confirme a nova senha"
                secureTextEntry
              />
              <Button text="Atualizar" />
            </Center>
          </Center>
        </ScrollView>
      </KeyboardAvoidingView>
    </VStack>
  )
}
