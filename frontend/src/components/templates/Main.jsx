import React from 'react'
import './Main.css'
import Header from './Header'


export default props =>
    <React.Fragment>
        <Header>
            <main className="content">
                Conteúdo
            </main>
        </Header>
    </React.Fragment>