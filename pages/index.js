import React, {useState} from 'react';
import { SmileFilled } from '@ant-design/icons';
import ExchangeForm from '../components/ExchangeForm';

import Link from 'next/link'
import { calculateRate } from '../services/rate';
import ExchangeResult from '../components/ExchangeResult';
import { Spin } from 'antd';

const content = {
  marginTop: '100px',
}

export default function Home() {
  const [currencyData, setCurrencyData] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleSubmit = async ({ from, to, amount }) => {
    try {
      setLoading(true);
      const {data} = await calculateRate(from, to, amount);
      setCurrencyData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div style={content}>
      <div className="text-center mb-5">
        <Link href="#">
          <a className="logo mr-0">
            <SmileFilled size={48} strokeWidth={1} />
          </a>
        </Link>

        <p className="mb-0 mt-3 text-disabled">Welcome to the world !</p>
        {loading && <Spin size="large" />}
      </div>
      <div>
        <ExchangeForm onFinish={handleSubmit} />
        {!!currencyData && <ExchangeResult currencyData={currencyData} />}
      </div>
    </div>
  )
}
