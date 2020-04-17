import React from 'react';
import { Layout } from 'react-admin';
import { useSelector } from 'react-redux';
// import AppBar from './AppBar';
import Menu from './menu';
import { darkTheme, lightTheme } from './themes';

// const CustomSidebar = props => <Sidebar {...props} size={200} />;

export default props => {
    const theme = useSelector(state =>
        state.theme === 'dark' ? darkTheme : lightTheme
    );
    return (
        <Layout {...props}
            // sidebar={CustomSidebar}
            menu={Menu}
            theme={theme}
        />
    );
};
