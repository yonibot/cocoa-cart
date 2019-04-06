import React, {useState} from 'react';
import {Button, Modal, Typography} from 'antd';
import ChocolateShoppe from './ChocolateShoppe';
import {
    Main,
    CardNumber,
    CardExpiry,
    CardCvc,
    FormInput,
    CreditCardForm,
    Label,
} from './AppComponents';
import './App.css';

const App = () => {
    const [modal, setModal] = useState(false);
    const [cardNumber, setCardNumber] = useState(null);
    const [cardExpiry, setCardExpiry] = useState(null);
    const [cardCvc, setCardCvc] = useState(null);

    return (
        <Main>
            <ChocolateShoppe />
            <Button onClick={() => setModal(true)}>Pay $18.40</Button>
            <Modal
                title="Pay $18.40"
                visible={modal}
                footer={[
                    <Button key="submit" type="primary" loading={false}>
                        Submit Payment
                    </Button>,
                ]}
                onCancel={() => setModal(false)}
            >
                <Typography.Text type="danger" />
                <CreditCardForm>
                    <FormInput>
                        <Label>Card Number:</Label>
                        <CardNumber
                            value={cardNumber}
                            onChange={e => setCardNumber(e.target.value)}
                        />
                    </FormInput>
                    <FormInput>
                        <Label>Expiry:</Label>
                        <CardExpiry
                            value={cardExpiry}
                            onChange={e => setCardExpiry(e.target.value)}
                        />
                    </FormInput>
                    <FormInput>
                        <Label>CVC:</Label>
                        <CardCvc
                            value={cardCvc}
                            onChange={e => setCardCvc(e.target.value)}
                        />
                    </FormInput>
                </CreditCardForm>
            </Modal>
        </Main>
    );
};

export default App;
