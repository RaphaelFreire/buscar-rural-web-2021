import { Button } from '../components/Button/ButtonPrimary'

export default function Home(): JSX.Element {
  return (
    <>
      <Button>Primary</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Secondary</Button>
    </>
  )
}
