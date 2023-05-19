'use client'

import "@wonderflow/react-components/core.css";
import "@wonderflow/themes";
import { ResponsiveProvider, Container, Text, Stack } from '@wonderflow/react-components'

export default function Home() {
  return (
    <ResponsiveProvider>
      <Container dimension="large" padding>
        <Stack rowGap={32} vPadding={16}>
          <Stack>
            <Text variant="subtitle-2">A playgorund based on NextJs@13 and Wanda@12</Text>
            <Text>
              <Text as="span" variant="display-4">NextJs + </Text>
              <Text as="span" variant="display-4" color="danger">Wanda</Text>
            </Text>
            <Text variant="tagline-1">Created by Wonderflow Design Team</Text>
          </Stack>

          <Stack direction="row" fill={false} columnGap={32}>
            <a href="https://design.wonderflow.ai/get-started/documentation/get-started/introduction" target="_blank">Get Started</a>
            <a href="https://design.wonderflow.ai/playground" target="_blank">Playground</a>
            <a href="https://wonderflow-bv.github.io/wanda" target="_blank">Storybook</a>
            <a href="https://github.com/wonderflow-bv/wanda" target="_blank">Github</a>
            <a href="https://wonderflow.ai/" target="_blank">Company</a>
          </Stack>

          <Text variant="body-1">Happy Hacking 🥷</Text>
        </Stack>
      </Container>
    </ResponsiveProvider>
  )
}
