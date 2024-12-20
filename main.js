const App = (props) => {
  const { initialButtonText, initialClassesList } = props

  const [buttonText, setButtonText] = React.useState(initialButtonText)
  const [buttonClass, setButtonClass] = React.useState('')

  const onClickHandler = () => {
    setButtonText(`React clicked! ${new Date().toLocaleTimeString()}`)
    setButtonClass('btn-info')
  }

  return (
    <div>
      <h1>React Button</h1>
      <button className={buttonClass} onClick={onClickHandler}>
        {buttonText}
      </button>
    </div>
  )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(<App initialButtonText="Click me-2" initialClassesList="btn-default" />)
