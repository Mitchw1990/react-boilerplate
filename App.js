import React from 'react';
import {useCollection} from 'react-firebase-hooks/firestore';

const App = () => {

    const [snapshot, loading, error] = useCollection();


    return (
        <div>Party time.</div>
    );
};

export default App;