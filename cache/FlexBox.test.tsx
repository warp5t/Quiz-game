import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FlexBox } from './FlexBox'

describe('FlexBox', () => {
  it('renders children correctly', () => {
    render(
      <FlexBox>
        <div data-testid='child'>Test Child</div>
      </FlexBox>
    )

    expect(screen.getByTestId('child')).toBeInTheDocument()
    expect(screen.getByText('Test Child')).toBeInTheDocument()
  })

  it('renders with default props', () => {
    const { container } = render(<FlexBox>Content</FlexBox>)

    const flexbox = container.firstChild as HTMLElement
    expect(flexbox).toBeInTheDocument()
    expect(flexbox).toHaveTextContent('Content')
  })
})
