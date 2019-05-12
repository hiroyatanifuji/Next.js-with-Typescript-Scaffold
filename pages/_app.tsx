import React from 'react'
import {Provider} from 'react-redux'
import App, {Container, AppComponentProps} from 'next/app'
import withReduxStore, {Store} from '../src/lib/with-redux-store';

interface AppProps {
    store: Store;
    pageProps: any;
}

type Props = AppProps & AppComponentProps;

class MyApp extends App<Props> {

    static async getInitialProps({Component, ctx}) {
        return {
            pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
        }
    }

    public render() {
        const {Component, pageProps, store} = this.props;
        return (
          <Container>
              <Provider store={store}>
                  <Component {...pageProps} />
              </Provider>
          </Container>
        );
    }
}

export default withReduxStore(MyApp);