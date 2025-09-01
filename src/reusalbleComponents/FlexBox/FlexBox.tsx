import { forwardRef } from 'react'
import { StyledDiv } from './FlexBox.styles'

export interface IFlexBoxProps {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  gap?: string
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export const FlexBox = forwardRef<HTMLDivElement, IFlexBoxProps>(
  ({ flexDirection, justifyContent, alignItems, gap, children, className, style }, ref) => (
    <StyledDiv
      ref={ref}
      $flexDirection={flexDirection}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $gap={gap}
      className={className}
      style={style}
    >
      {children}
    </StyledDiv>
  )
)

FlexBox.displayName = 'FlexBox'
