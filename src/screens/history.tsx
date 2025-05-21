import { useState } from 'react'
import { SectionList } from 'react-native'

import { Heading, Text, VStack } from '@gluestack-ui/themed'

import { HistoryCard } from '@components/history-card'
import { ScreenHeader } from '@components/screen-header'

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: '19.05.2025',
      data: Array.from({ length: 2 }, (_, i) => i.toString()),
    },
    {
      title: '21.05.2025',
      data: Array.from({ length: 1 }, (_, i) => i.toString()),
    },
  ])

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />
      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={() => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading
            color="$gray200"
            fontSize="$md"
            fontFamily="$heading"
            mt="$10"
            mb="$3"
          >
            {section.title}
          </Heading>
        )}
        style={{
          paddingHorizontal: 32,
        }}
        contentContainerStyle={
          exercises.length === 0 && {
            flex: 1,
            justifyContent: 'center',
          }
        }
        ListEmptyComponent={() => (
          <Text
            color="$gray100"
            fontSize="$md"
            fontFamily="$body"
            textAlign="center"
          >
            Não há exercícios registrados ainda. {'\n'}Vamos fazer exercicíos hoje?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  )
}
