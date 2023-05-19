'use client'

// import Image from 'next/image'
// import styles from './page.module.css'
import "@wonderflow/react-components/core.css";
import "@wonderflow/themes";
import { ResponsiveProvider, Container } from '@wonderflow/react-components'

export default function Home() {
  return (
    <ResponsiveProvider>
      <Container>start</Container>
    </ResponsiveProvider>
  )
}
