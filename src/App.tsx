import List from './components/list/List.tsx'
import Detail from './components/detail/Detail.tsx'
import Chat from './components/chat/Chat.tsx'
import styles from './style.module.scss'

function App() {

  return (
    <div className={styles.container}>
      <List />
      <Detail />
      <Chat />
    </div>
  )
}

export default App
