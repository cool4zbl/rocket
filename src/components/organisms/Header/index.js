import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('secondary')};
  color: ${palette('grayscale', 2)};
  padding: 2rem;
  text-align: center;
`

const Header = (props) => {
  return (
    <Wrapper {...props}>
      I am the Header
    </Wrapper>
  )
}

Header.propTypes = {
  reverse: PropTypes.bool,
}

export default Header
