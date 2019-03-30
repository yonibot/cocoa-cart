import { useState } from 'react';
import * as PaymentProcessorApi from '../api/PaymentProcessorApi';
import * as MyServer from '../api/MyServer';

export const PAYMENT_STATUS = {
    success: 'SUCCESS',
    fail: 'FAIL',
};

export default function usePaymentProcessing() {
    const [isProcessing, setIsProcessing] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [paymentStatus, setPaymentStatus] = useState(null);

    const createPayment = async (paymentDetails) => {
        setErrorMessage(null);
        setIsProcessing(true);
        try {
            const token = await PaymentProcessorApi.createToken(paymentDetails)
            await MyServer.createCharge(token);
            setPaymentStatus(PAYMENT_STATUS.success);
        } catch (error) {
            setPaymentStatus(PAYMENT_STATUS.fail);
            setErrorMessage('Please try another card.')
        }
        setIsProcessing(false);
    };

    return {
        isProcessing,
        errorMessage,
        paymentStatus,
        createPayment,
    };
}
