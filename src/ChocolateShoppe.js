import React from 'react';
import {Ul, Picker, Li, ItemPrice, Title, Subtitle} from './AppComponents';
import { Icon } from 'antd';

const ChocolateShoppe = () => {
    return (
        <div>
            <Title>Chocolate Shoppe</Title>
            <Subtitle>Your Raw, Organic Chocolatier</Subtitle>
            <h4><Icon type="shopping-cart" /> Shopping cart</h4>
            <Ul>
                <Li>
                <span>$5.90</span>
                <Picker value={2} />
                <a href="#">99% Peruvian</a>
                <ItemPrice>$2.95</ItemPrice>
                </Li>
                <Li>
                <span>$8.50</span>
                <Picker value={2} />
                <a href="#">70% Venezuelan</a>
                <ItemPrice>$4.25</ItemPrice>
                </Li>
                <Li>
                <span>$4.00</span>
                <Picker value={1} />
                <a href="#">Limited Time: Mango Chili 70% Chocolate</a>
                <ItemPrice>$4</ItemPrice>
                </Li>
            </Ul>
        </div>
    )
}

export default ChocolateShoppe;