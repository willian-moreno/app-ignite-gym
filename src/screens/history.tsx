import { VStack } from '@gluestack-ui/themed'

import { HistoryCard } from '@components/history-card'
import { ScreenHeader } from '@components/screen-header'

export function History() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />
      <HistoryCard />
    </VStack>
  )
}
