import { compose, withState, withHandlers } from 'recompose';
import { withModal } from './core/withModal';
import MainComponent from './components/Main';

const App = compose(
  withModal(),
  withState('order', 'setOrder', []),
  withState('name', 'setName', ''),
  withState('ice', 'setIce', '正常'),
  withState('sugar', 'setSugar', '正常'),
  withState('price', 'setPrice', 0),
  withState('quantity', 'setQuantity', 0),
  withHandlers({
    onSubmit: ({
      name,
      ice,
      sugar,
      price,
      quantity,
      order,
      setOrder,
      setMessage,
      openModal,
    }) => () => {
      if (price === 0 || name === '' || quantity === 0) {
        openModal();
        return;
      }
      const orderList = order;
      const addOrder = {
        name,
        ice,
        sugar,
        price,
        quantity,
        total: price * quantity,
      };
      orderList.push(addOrder);
      const allOrderList = orderList.map((item, index) => ({
        id: index,
        name: item.name,
        ice: item.ice,
        sugar: item.sugar,
        price: item.price,
        quantity: item.quantity,
        total: item.price * item.quantity,
      }));
      setOrder(allOrderList);
    },
    onDelete: ({ order, setOrder }) => id => {
      if (order.length === 1) {
        setOrder([]);
      }
      const orderList = order.filter(item => item.id !== id);
      setOrder(orderList);
    },
  })
)(MainComponent);

export default App;
