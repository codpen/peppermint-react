import React, { useState } from "react";
import { Button, Divider, Modal } from "antd";

const ViewNewsletter = (props) => {
  const [visible, setVisible] = useState(false);

  const onCancel = (e) => {
    e.stopPropagation();
    setVisible(false);
  };

  console.log(props)

  return (
    <div>
        <Modal
          destroyOnClose={true}
          keyboard={true}
          visible={visible}
          title={props.n.title}
          onCancel={onCancel}
          footer={[<Button onClick={onCancel}>Close</Button>]}
        >
          <p>{props.n.text}</p>
          <Divider />
          <p>Author : {props.n.createdBy.name}</p>
        </Modal>
    </div>
  );
};

export default ViewNewsletter;