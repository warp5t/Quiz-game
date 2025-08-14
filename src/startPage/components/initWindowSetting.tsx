import { useRef } from 'react';

export const InitWindowSettings = () => {
  const inputAmmountRef = useRef<HTMLInputElement>(null)

  const increment = () => {
    if (inputAmmountRef.current) {
      const currentValue = Number(inputAmmountRef.current.value)
      if (currentValue < 15) inputAmmountRef.current.value = String(currentValue + 1)
    }
  }

  const decrement = () => {
    if (inputAmmountRef.current) {
      const currentValue = Number(inputAmmountRef.current.value)
      if (currentValue > 0) inputAmmountRef.current.value = String(currentValue - 1)
    }
  }

  return(
    <>
    <input type="number" ref={inputAmmountRef} placeholder='1' readOnly/>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    </>
  )
}