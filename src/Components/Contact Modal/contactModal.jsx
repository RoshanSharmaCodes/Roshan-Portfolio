import {Modal} from "antd";
import { useState } from "react";
import 'antd/dist/antd.min.css';

const ContactModal = () => {
const [isModalVisible, setIsModalVisible] = useState(false);
  
setIsModalVisible(false);
  
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Contact"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default ContactModal;
