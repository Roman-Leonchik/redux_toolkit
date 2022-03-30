import React from 'react';
import CompositeProvider from './client/providers/composite/composite.providers';
import { Header } from './client/module/header/header.module';
import { List } from './client/module/list/list.module';
import ReactDOM from 'react-dom';

    ReactDOM.render(
        <React.StrictMode>
            <CompositeProvider>
                <Header />
                <List />
            </CompositeProvider>
        </React.StrictMode>,
    document.getElementById('root'));
    