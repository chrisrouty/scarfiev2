import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { DashboardMenuItem, MenuItemLink } from 'react-admin';

//components
import SubMenu from './submenu';
// import products from '../products';
// import images from '../images';


const Menu = ({ onMenuClick, dense, logout }) => {
    const [state, setState] = useState({
        menuCatalog: false,
        menuCustomers: false,
        menuImages: false,
        menuAdmin: false,
    });

    const open = useSelector(state => state.admin.ui.sidebarOpen);
    useSelector(state => state.theme); // force rerender on theme change

    const handleToggle = menu => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <div>
            {' '}
            <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={open} />
            <SubMenu
                handleToggle={() => handleToggle('menuCatalog')}
                isOpen={state.menuCatalog}
                sidebarIsOpen={open}
                name="Catalogue"
                dense={dense}
            >
                <MenuItemLink
                    to={`/products`}
                    primaryText="Produits"
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/product-images`}
                    primaryText="Les images produit"
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuImages')}
                isOpen={state.menuImages}
                sidebarIsOpen={open}
                name="Les images"
                dense={dense}
            >
                <MenuItemLink
                    to={`/images`}
                    primaryText="Images"
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuAdmin')}
                isOpen={state.menuAdmin}
                sidebarIsOpen={open}
                name="Administration"
                dense={dense}
            >
                <MenuItemLink
                    to={`/admins`}
                    primaryText="Admins"
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
        </div>
    );
};

Menu.propTypes = {
    onMenuClick: PropTypes.func,
    logout: PropTypes.object,
};

export default Menu;
