import { Bounce, ToastContainer } from 'react-toastify';

export function MessageContainer() {
  return (
    <ToastContainer
      position='top-right'
      autoClose={10000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='light'
      transition={Bounce}
    />
  );
}
