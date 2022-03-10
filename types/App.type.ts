import { NextComponentType, NextPageContext } from 'next/types'

export type AppPropsType = {
    Component: NextComponentType<NextPageContext, any, {}> & { Layout: React.ComponentType };
    pageProps: any;
}

export type LayoutPropsType = {
    children: React.ReactNode;
}