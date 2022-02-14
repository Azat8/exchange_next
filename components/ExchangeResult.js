import { Typography } from 'antd';

const { Title } = Typography;

export default ({ currencyData: { amount, currency_code, exchange_rate } }) => {
    return (
        <div className='text-center'>
            <Title level={3}>Exchange rate: {exchange_rate}</Title>
            <Title level={3}>Total amount: {amount} {currency_code}</Title>
        </div>
    );
}