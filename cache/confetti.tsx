import Confetti from 'react-confetti'

export const ConfettiDemo = (props: { isRun: boolean }) => {
  return (
    <div>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        run={props.isRun}
        recycle={true}
        numberOfPieces={200}
        gravity={0.2}
        wind={0.01}
      />
    </div>
  )
}
