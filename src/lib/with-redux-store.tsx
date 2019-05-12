import React from 'react'
import {initStore, RootState, rootInitialState} from '../store'

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

function getOrCreateStore(initialState: RootState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initStore(initialState)
  }

  // Store in global variable if client
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initStore(initialState)
  }
  return window[__NEXT_REDUX_STORE__]
}

// 戻り値の型を抽出
export type Store = ReturnType<typeof getOrCreateStore>

type Props = { initialReduxState: RootState }

const withReduxStore = (Component: React.ComponentClass<Props & Store>) => {
  return class Redux extends React.Component<Props & Store> {

    static async getInitialProps(appContext: any) {
      const reduxStore = getOrCreateStore(rootInitialState)

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore

      let appProps = {}
      if ((Component as any).getInitialProps) {
        appProps = await (Component as any).getInitialProps(appContext)
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      }
    }

    render() {
      return (
        <Component {...this.props} store={getOrCreateStore(this.props.initialReduxState)}/>
      )
    }
  }
}

export default withReduxStore;