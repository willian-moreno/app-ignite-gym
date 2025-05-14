import { ComponentProps } from 'react'

import { ButtonSpinner, Button as GluestackButton, Text } from '@gluestack-ui/themed'

type Props = {
  text: string
  variant?: 'solid' | 'outline'
  isLoading?: boolean
} & ComponentProps<typeof GluestackButton>

const btnVariants: Record<string, ComponentProps<typeof GluestackButton>> = {
  solid: {
    bg: '$green700',
    borderWidth: '$0',
    '$active-bg': '$green500',
  },
  outline: {
    bg: 'transparent',
    borderWidth: '$1',
    '$active-bg': '$gray500',
  },
}

const textVariants: Record<string, ComponentProps<typeof Text>> = {
  solid: {
    color: '$white',
  },
  outline: {
    color: '$green500',
  },
}

export function Button({ text, disabled, variant = 'solid', isLoading = false, ...props }: Props) {
  const isDisabled = disabled || isLoading

  return (
    <GluestackButton
      w="$full"
      h="$14"
      bg={btnVariants[variant].bg}
      borderWidth={btnVariants[variant].borderWidth}
      borderColor="$green500"
      borderRadius="$sm"
      disabled={isDisabled}
      $active-bg={btnVariants[variant]['$active-bg']}
      {...props}
    >
      {isLoading ? (
        <ButtonSpinner color={textVariants[variant].color} />
      ) : (
        <Text
          color={textVariants[variant].color}
          fontFamily="$heading"
          fontSize="$sm"
        >
          {text}
        </Text>
      )}
    </GluestackButton>
  )
}
