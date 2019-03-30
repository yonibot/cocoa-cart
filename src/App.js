import React, { useState, useEffect } from 'react';
import { Button, Modal, Typography } from 'antd';
import ChocolateShoppe from './ChocolateShoppe';
import { Main, CardNumber, CardExpiry, CardCvc, FormInput, CreditCardForm, Label } from './AppComponents';
import usePaymentProcessing, { PAYMENT_STATUS } from './services/usePaymentProcessing';
import './App.css';

const App = () => {

    const [modal, setModal] = useState(false);
    const [cardNumber, setCardNumber] = useState(null);
    const [cardExpiry, setCardExpiry] = useState(null);
    const [cardCvc, setCardCvc] = useState(null);
    
    const {
        isProcessing,
        errorMessage,
        paymentStatus,
        createPayment,
    } = usePaymentProcessing();

    useEffect(() => {
        if (paymentStatus === PAYMENT_STATUS.success) {
            setModal(false)
        }
    }, [paymentStatus]);


    const handleSubmit = async () => {
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
                <Typography.Text type="danger">{errorMessage}</Typography.Text>
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
