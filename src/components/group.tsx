import { ComponentProps } from 'react'

import { Button, Text } from '@gluestack-ui/themed'

type Props = {
  name: string
  isActive?: boolean
} & ComponentProps<typeof Button>

export function Group({ name, isActive = false, ...props }: Props) {
  return (
    <Button
      minWidth="$24"
      h="$10"
      bg="$gray600"
      rounded="$md"
      justifyContent="center"
      borderColor="$green500"
      borderWidth={isActive ? 1 : 0}
      sx={{
        ':active': {
          borderWidth: 1,
        },
      }}
      {...props}
    >
      <Text
        color={isActive ? '$green500' : '$gray200'}
        textTransform="uppercase"
        fontSize="$xs"
        fontFamily="$heading"
      >
        {name}
      </Text>
    </Button>
  )
}
