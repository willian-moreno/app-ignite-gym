import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { Heading, HStack, Icon, Image, Text, VStack } from '@gluestack-ui/themed'
import { ChevronRight } from 'lucide-react-native'

type Props = {} & TouchableOpacityProps

export function ExerciseCard({ ...props }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...props}
    >
      <HStack
        bg="$gray500"
        alignItems="center"
        p="$2"
        pr="$4"
        rounded="$md"
      >
        <Image
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
          alt="Imagem do exercício"
          w="$16"
          h="$16"
          rounded="$md"
          mr="$4"
          resizeMode="cover"
        />
        <VStack flex={1}>
          <Heading
            color="$white"
            fontSize="$lg"
            fontFamily="$heading"
          >
            Puxada frontal
          </Heading>
          <Text
            color="$gray200"
            fontSize="$sm"
            fontFamily="$body"
            mt="$1"
            numberOfLines={2}
          >
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon
          as={ChevronRight}
          color="$gray300"
        />
      </HStack>
    </TouchableOpacity>
  )
}
