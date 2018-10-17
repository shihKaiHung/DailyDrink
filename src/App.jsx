import { compose, withState, withHandlers } from 'recompose';
import { withModal } from './core/withModal';
import MainComponent from './components/Main';

const App = compose(
  withModal(),
  withState('editOpen', 'setEditOpen', false),
  withState('currentEdit', 'setCurrentEdit', 0),
  withState('order', 'setOrder', []),
  withState('name', 'setName', ''),
  withState('ice', 'setIce', '正常'),
  withState('sugar', 'setSugar', '正常'),
  withState('price', 'setPrice', 0),
  withState('text', 'setText', ''),
  withState('quantity', 'setQuantity', 0),
  withHandlers({
    initialState: ({
      setName,
      setIce,
      setSugar,
      setPrice,
      setText,
      setQuantity,
    }) => () => {
      setName('');
      setPrice(0);
      setQuantity(0);
      setIce('正常');
      setSugar('正常');
    },
  }),
  withHandlers({
    onSubmit: ({
      editOpen,
      name,
      ice,
      sugar,
      price,
      quantity,
      order,
      text,
      setOrder,
      openModal,
      initialState,
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
        text,
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
        text: item.text,
        total: item.price * item.quantity,
      }));
      setOrder(allOrderList);
      initialState();
    },
    onDelete: ({ order, setOrder }) => id => {
      if (order.length === 1) {
        setOrder([]);
      }
      const orderList = order.filter(item => item.id !== id);
      setOrder(orderList);
    },
    onEdit: ({ setEditOpen, editOpen, setCurrentEdit }) => id => {
      setEditOpen(!editOpen);
      setCurrentEdit(id);
    },
    onEditSubmit: ({
      currentEdit,
      setEditOpen,
      order,
      name,
      ice,
      sugar,
      price,
      quantity,
      text,
      setOrder,
      openModal,
      initialState,
    }) => () => {
      if (price === 0 || name === '' || quantity === 0) {
        openModal();
        return;
      }
      let orderList = order;
      const editOrder = {
        name,
        ice,
        sugar,
        price,
        quantity,
        text,
        id: currentEdit,
        total: price * quantity,
      };
      orderList[currentEdit] = editOrder;
      setOrder(orderList);
      setEditOpen(false);
      initialState();
    },
  })
)(MainComponent);

export default App;
