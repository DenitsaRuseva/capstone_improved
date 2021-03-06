import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import '../NavigationItems/NavigationItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WithBadge from '../../../hoc/withBadge/withBadge';
import WithTooltip from '../../../hoc/WithTooltip/WithTooltip';


const navigationItems = (props) => (
    <ul className='navigationItems'>
        <NavigationItem link='/' exact={true}>Home</NavigationItem>
        <NavigationItem link="/shopping">Shop</NavigationItem>
        <ul className='navigationItems'>
            <NavigationItem link='/cart' clicked={props.badgeCount > 0 ? null : (event) => {event.preventDefault(); props.clickOnEmptyCart()}}>
                <WithBadge  showBadge={props.showBadge} count={props.badgeCount}><WithTooltip showTooltip={props.showTooltip} position='down' message='Cart is empty'><FontAwesomeIcon icon='shopping-cart' aria-hidden="true"/></WithTooltip></WithBadge>
            </NavigationItem>
        </ul>

    </ul>
);

export default navigationItems;