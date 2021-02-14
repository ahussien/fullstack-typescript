import React, { Component } from 'react'
import styled from 'styled-components'

class RepoCard extends Component {
  render() {
    return (
      <Container>
        <a href={this.props.link}>
          <Image src={this.props.image} />
        </a>
        <CardBody>
          <Title>{this.props.title}</Title>
          <Description>{this.props.description}</Description>
        </CardBody>
      </Container>
    )
  }
}

const Container = styled.div`
  flex: 1;
  flex-basis: 15%;
  margin: 15px;
  border: solid 2px #3a3a3a;
  border-radius: 5px;
`

const CardBody = styled.div`
  padding: 10px;
`

const Title = styled.h1`
  font-size: 15px;
  text-align: center;
`

const Description = styled.p`
  font-size: 12px;
  text-align: center;
`

const Image = styled.img`
  width: 100%;
`

export default RepoCard