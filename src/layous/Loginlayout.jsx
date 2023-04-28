import React from 'react';
import NavigationBar from '../pages/common/NavigationBar';
import { Outlet } from 'react-router-dom';

const Loginlayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Loginlayout;