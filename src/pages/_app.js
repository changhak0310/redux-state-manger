import '@/styles/globals.css';
import store from '@/store/store';
import { Provider } from 'react-redux' 
import { fetchTodos } from '@/features/todo/todoSlice';
import '../server.js'

store.dispatch(fetchTodos())

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
