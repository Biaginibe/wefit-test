import successImg from '../../assets/images/success.svg'
import { Container, Content, LinkButton } from './styled'

export function Finish () {
  
  return (
    <Container>
      <Content>
      <h3>Compra realizada com sucesso!</h3>
      <img src={successImg} />

      <LinkButton to='/'>Voltar</LinkButton>
      </Content>
    </Container>
  )

}