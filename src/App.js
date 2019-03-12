import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import ChocolateShoppe from './ChocolateShoppe';
import { Main, CardNumber, CardExpiry, CardCvc, FormInput, CreditCardForm, Label } from './AppComponents';
import usePaymentProcessing from './services/usePaymentProcessing';
import './App.css';

const App = () => {

    const {
        isProcessing,
        errorMessage,
        paymentStatus,
        createPayment,
    } = usePaymentProcessing();


    const [modal, setModal] = useState(false);
    const [cardNumber, setCardNumber] = useState(null);
    const [cardExpiry, setCardExpiry] = useState(null);
    const [cardCvc, setCardCvc] = useState(null);
    
    const handleSubmit = () => {
        createPayment({cardNumber, cardExpiry, cardCvc});
    }

    return (
        <Main>
            <ChocolateShoppe />
            <Button onClick={() => setModal(true)}>Pay $18.40</Button>

            <Modal
                title="Pay $18.40"
                visible={modal}
                footer={[
                    <Button key="submit" type="primary" loading={isProcessing} onClick={handleSubmit}>
                      Submit Payment
                    </Button>,
                  ]}
                onCancel={() => setModal(false)} >
                <CreditCardForm>
                    <FormInput>
                        <Label>Card Number:</Label>
                        <CardNumber value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                    </FormInput>
                    <FormInput>
                        <Label>Expiry:</Label>
                        <CardExpiry value={cardExpiry} onChange={(e) => setCardExpiry(e.target.value)} />
                    </FormInput>
                    <FormInput>
                        <Label>CVC:</Label>
                        <CardCvc value={cardCvc} onChange={(e) => setCardCvc(e.target.value)} />
                    </FormInput>
                </CreditCardForm>
            </Modal>
        </Main>
    );
};

export default App;
