import { useState } from 'react'
import { FlatList } from 'react-native'

import { VStack } from '@gluestack-ui/themed'

import { Group } from '@components/group'
import { HomeHeader } from '@components/home-header'

import { gluestackUIConfig } from './../../config/gluestack-ui.config'

export function Home() {
  const { tokens } = gluestackUIConfig

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
    </VStack>
  )
}
