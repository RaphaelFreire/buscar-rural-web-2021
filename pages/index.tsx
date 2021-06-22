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
      <Button variant="primary" size="small">
        Primary Small
      </Button>
      <Button variant="primary" size="normal">
        Primary Normal
      </Button>

      <Button variant="secondary" size="small">
        Secondary Small
      </Button>
      <Button variant="secondary" size="normal">
        Secondary Normal
      </Button>

      <Button variant="outline" size="small">
        Secondary Small
      </Button>
      <Button variant="outline" size="normal">
        Secondary Normal
      </Button>

      <Button variant="ghost" size="small">
        Secondary Small
      </Button>
      <Button variant="ghost" size="normal">
        Secondary Normal
      </Button>

      <Input />
    </>
  )
}
