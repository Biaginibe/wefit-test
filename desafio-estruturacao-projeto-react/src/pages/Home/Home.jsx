import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import { api } from "../../services/axios";
import { Container, Content } from "./styles";

export function Home(){
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.get('/products').then(res => setProducts(res.data))
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Content>
          {products.map((product, i) => {
            return <Card key={i} data = {product} index={i}/>
          })}
        </Content>
      </Container>
    </>
  )
}