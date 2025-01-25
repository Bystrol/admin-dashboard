import { AsyncComponentFallback } from '@/components/molecules/async-component-fallback';
import { Orders } from '../components/templates/orders';

export const OrdersContainer = () => {
  return (
    <AsyncComponentFallback>
      <Orders />
    </AsyncComponentFallback>
  );
};
