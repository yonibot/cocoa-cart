import styled from 'styled-components';
import { Input } from 'antd';

export const Main = styled.div`
    margin: 50px;
`

export const Title = styled.h1`
    margin-bottom: 10px;
`

export const Subtitle = styled.h3`
    margin-bottom: 30px;
`

export const Picker = styled.input`
    width: 20px;
    margin-left: 10px;
    margin-right: 20px;
`

export const Ul = styled.ul`
    list-style-type: none;
    margin-bottom: 40px;
`

export const ItemPrice = styled.div`
    margin-left: 20px;
    display: inline;
`

export const Li = styled.li`
    margin-bottom: 20px;
`

export const Button = styled.button`
    width: 150px;
    height: 30px;
    margin-left: 40px;
`

// Shopping Cart

export const CardNumber = styled(Input)``

export const CardExpiry = styled(Input)``

export const CardCvc = styled(Input)``

export const CreditCardForm = styled.div`
    display: flex;
    flex-direction: column;
    height: 170px;
    justify-content: space-around;
`

export const FormInput = styled.div`
    display: flex;
    flex-direction: row;
`

export const Label = styled.div`
    width: 170px;
    margin-right: 15px;
    text-align: right;
    font-weight: bold;
`