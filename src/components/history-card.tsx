import { Heading, HStack, Text, VStack } from '@gluestack-ui/themed'

export function HistoryCard() {
  return (
    <HStack
      w="$full"
      px="$5"
      py="$4"
      mb="$3"
      bg="$gray600"
      rounded="$md"
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack mr="$5">
        <Heading
          color="$white"
          fontSize="$md"
          fontFamily="$heading"
          textTransform="capitalize"
        >
          Costas
        </Heading>
        <Text
          color="$gray100"
          fontSize="$lg"
          fontFamily="$body"
          numberOfLines={1}
        >
          Puxada frontal
        </Text>
      </VStack>
      <Text
        color="$gray300"
        fontSize="$md"
        fontFamily="$body"
        numberOfLines={1}
      >
        08:58
      </Text>
    </HStack>
  )
}
