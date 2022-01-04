import React from 'react';

import HomeState from './Home.state';
import HomeStyle from './Home.style';

export default function Home() {
    const Posts = HomeState();
    return (
        <HomeStyle>
            <Posts />
        </HomeStyle>
    )
}
