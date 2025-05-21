import { useState } from 'react'
import { FlatList } from 'react-native'

import { Heading, HStack, Text, VStack } from '@gluestack-ui/themed'

import { ExerciseCard } from '@components/exercise-card'
import { Group } from '@components/group'
import { HomeHeader } from '@components/home-header'

import { gluestackUIConfig } from './../../config/gluestack-ui.config'

export function Home() {
  const { tokens } = gluestackUIConfig

  const [exercises, setExercises] = useState(Array.from({ length: 50 }, (_, i) => i.toString()))
  const [groups, setGroups] = useState(['Costas', 'Bíceps', 'Tríceps', 'Ombro'])
  const [groupSelected, setGroupSelected] = useState('Costas')

  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 32,
          columnGap: tokens.space['3'],
        }}
        style={{
          marginVertical: 40,
          maxHeight: 44,
          minHeight: 44,
        }}
        horizontal
      />

      <VStack
        flex={1}
        px="$8"
      >
        <HStack
          alignItems="center"
          justifyContent="space-between"
          mb="$5"
        >
          <Heading
            color="$gray200"
            fontSize="$md"
            fontFamily="$heading"
          >
            Exercícios
          </Heading>
          <Text
            color="$gray200"
            fontSize="$sm"
            fontFamily="$body"
          >
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ExerciseCard onPress={() => {}} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 56,
            rowGap: tokens.space['3'],
          }}
        />
      </VStack>
    </VStack>
  )
}
