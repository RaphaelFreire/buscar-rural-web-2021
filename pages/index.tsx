import { Button } from '../components/Button/Button'
import { Title } from '../components/Title/Title'
import { Text } from '../components/Text/Text'
import { Input } from '../components/Input/Input'

export default function Home(): JSX.Element {
  return (
    <>
      <Title type="h1">Heading Heading Heading Heading</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis harum
        nobis libero dignissimos accusamus! Possimus dolore minima debitis iusto
        tenetur numquam obcaecati deleniti rem, voluptatum, eveniet odit,
        reiciendis necessitatibus excepturi? Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Facilis harum nobis libero dignissimos
        accusamus! Possimus dolore minima debitis iusto tenetur numquam
        obcaecati deleniti rem, voluptatum, eveniet odit, reiciendis
        necessitatibus excepturi? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Facilis harum nobis libero dignissimos accusamus!
        Possimus dolore minima debitis iusto tenetur numquam obcaecati deleniti
        rem, voluptatum, eveniet odit, reiciendis necessitatibus excepturi?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis harum
        nobis libero dignissimos accusamus! Possimus dolore minima debitis iusto
        tenetur numquam obcaecati deleniti rem, voluptatum, eveniet odit,
        reiciendis necessitatibus excepturi?
      </Text>

      <Button>Primary</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Secondary</Button>

      <Input />
    </>
  )
}
