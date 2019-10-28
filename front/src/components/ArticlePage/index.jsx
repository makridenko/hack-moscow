import React, { Component } from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'
import Header from '../Header'
import ArticleBlock from '../ArticleBlock'

import PropTypes from 'prop-types'

const PageStyled = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    overflow: auto;

    .topics-container {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-items: stretch;
    }
`

class ArticlePage extends Component {
  render () {
    const id = this.props.match.params.id
    return (
      <PageStyled>
        <Header />
        <Container className='topics-container'>
          <ArticleBlock
            id={id}
          />
        </Container>
      </PageStyled>
    )
  }
}

ArticlePage.propTypes = {
  match: PropTypes.object.isRequired
}

export default ArticlePage
