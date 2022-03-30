import React from 'react';
import CompositeProvider from './client/providers/composite/composite.providers';
import { ContainerPage } from './client/module/container-page/container-page.module'; 
import ReactDOM from 'react-dom';

    ReactDOM.render(
        <React.StrictMode>
            <CompositeProvider>
                <ContainerPage />
            </CompositeProvider>
        </React.StrictMode>,
    document.getElementById('root'));
    