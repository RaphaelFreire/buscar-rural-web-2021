import { Button } from '../components/Button/Button'
import { Title } from '../components/Title/Title'

export default function Home(): JSX.Element {
  return (
    <>
      <Title>Heading Heading Heading Heading</Title>
      <Title type="heading-6">Heading Heading Heading Heading</Title>

      <Button>Primary</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Secondary</Button>
    </>
  )
}
