import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 100;
  transform: translateX(-50%) translateY(-50%);
  width: 200px;
  height: 130px;
  background: #158fef;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    color: #fff;
    font-size: 14px;
  }
`;

const Button = styled.button`
  width: 80px;
  cursor: pointer;
  background: none;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  transition: all 0.3s;
  &:hover {
    background-color: #fff;
    color: #158fef;
  }
`;

const ModalComponent = ({ closeModal }) => (
  <Main>
    <p>請輸入完整訂單資訊</p>
    <Button onClick={closeModal}>關閉</Button>
  </Main>
);

export const withModal = () => {
  return function(WrappedComponent) {
    class Modal extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          modalOpen: false,
          message: '',
        };
        this.setMessage = this.setMessage.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }

      setMessage(message) {
        this.setState({
          message,
        });
      }

      openModal() {
        this.setState({
          modalOpen: true,
        });
      }

      closeModal() {
        this.setState({
          modalOpen: false,
        });
      }

      render() {
        const params = {
          setMessage: this.setMessage,
          openModal: this.openModal,
          ModalComponent: this.state.modalOpen && (
            <ModalComponent closeModal={this.closeModal} />
          ),
        };
        return <WrappedComponent {...params} {...this.props} />;
      }
    }
    return Modal;
  };
};
