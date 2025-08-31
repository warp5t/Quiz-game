import styled from 'styled-components'

export const FlexBox = styled.div<{ $flexDirection?: string }>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection || 'row'};
`
