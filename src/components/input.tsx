import { ComponentProps } from 'react'

import { Input as GluestackInput, InputField } from '@gluestack-ui/themed'

type Props = { isReadOnly?: boolean } & ComponentProps<typeof InputField>

export function Input({ isReadOnly = false, ...props }: Props) {
  return (
    <GluestackInput
      h="$14"
      borderWidth="$0"
      borderRadius="$md"
      $focus={{
        borderWidth: 1,
        borderColor: '$green500',
      }}
      isReadOnly={isReadOnly}
      opacity={isReadOnly ? 0.5 : 1}
    >
      <InputField
        bg="$gray700"
        px="$4"
        color="$white"
        fontFamily="$body"
        placeholderTextColor="$gray300"
        {...props}
      />
    </GluestackInput>
  )
}
