import type { AppProps } from 'next/app';
import "../styles/globals.css";
import { Layout } from '@/components';
import { wrapper } from '../store';
import { Provider } from "react-redux";
 
const MyApp = ({ Component, pageProps }: AppProps) => {
    const { store } = wrapper.useWrappedStore(pageProps);
debugger
    return <Provider store={store}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </Provider>
}

export default MyApp;
