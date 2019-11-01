import React from 'react';
import {useCollection} from 'react-firebase-hooks/firestore';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import 'normalize.css';

const App = () => {

    const [snapshot, loading, error] = useCollection();

    return (
        <div>
            <Header/>
            <main>
                <p>Party time.</p>
            </main>
            <Footer/>
        </div>
    );
};

export default App;