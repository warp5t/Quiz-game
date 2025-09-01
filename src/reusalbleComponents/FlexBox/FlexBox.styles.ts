import styled from 'styled-components'

export const StyledDiv = styled.div<{
  $flexDirection?: string
  $justifyContent?: string
  $alignItems?: string
  $gap?: string
}>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection || 'row'};
  justify-content: ${(props) => props.$justifyContent || 'flex-start'};
  align-items: ${(props) => props.$alignItems || 'stretch'};
  gap: ${(props) => props.$gap || '0'};
`
