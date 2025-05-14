import { ComponentProps } from 'react'

import { ButtonSpinner, Button as GluestackButton, Text } from '@gluestack-ui/themed'

type Props = { text: string; isLoading?: boolean } & ComponentProps<typeof GluestackButton>

export function Button({ text, disabled, isLoading = false, ...props }: Props) {
  const isDisabled = disabled || isLoading

  return (
    <GluestackButton
      w="$full"
      h="$14"
      backgroundColor="$green700"
      borderWidth="$0"
      borderColor="$green500"
      borderRadius="$sm"
      disabled={isDisabled}
      $active-bg="$green500"
      {...props}
    >
      {isLoading ? (
        <ButtonSpinner color="$white" />
      ) : (
        <Text
          color="$white"
          fontFamily="$heading"
          fontSize="$sm"
        >
          {text}
        </Text>
      )}
    </GluestackButton>
  )
}
