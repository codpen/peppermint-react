import React, { useState, useEffect } from "react";
import { Button, Divider, Input, Tabs, Form } from "antd";
import { EditTwoTone } from "@ant-design/icons";

import { useHistory } from "react-router-dom";

// eslint-disable-next-line
const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [name, setName] = useState();
  const [email, setEmail] = useState();

  async function postData() {
    await fetch(`/api/v1/auth/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name ? name : user.name,
        email: email ? email : user.email
      }),
    }).then((res) => res.json())
      .then((res) => {
      console.log(res)
    })
  }

  const onFinish = async () => {
    email.toLowerCase()
    await postData()
  };

  return (
    <div>
      <h3>
        Account{" "}
        <Button
          onClick={postData}
          disabled={name || email ? false : true}
          type="primary"
          htmlType="submit"
          style={{ float: "right", marginTop: 5 }}
        >
          Save
        </Button>
      </h3>
      <Divider />
      <h5>Profile</h5>
      <p>This information will be linked to your tickets.</p>
      <div>
        <Form
          name="profile"
          initialValues={{ remember: false }}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item label="Name">
            <Input
              defaultValue={user.name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Email">
            <Input defaultValue={user.email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const ResetPass = () => {
  const [password, setPassword] = useState("");
  const history = useHistory();

  const resetPassword = async () => {
    await fetch(`/api/v1/auth/resetPassword/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        password,
      }),
    }).then((res) => res.json);
    history.push("/");
  };

  return (
    <div>
      <h3>Security</h3>
      <Input
        placeholder="Enter new Password ... "
        style={{ width: 200 }}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button onClick={resetPassword} style={{ marginLeft: 10, margin: 5 }}>
        <EditTwoTone />
      </Button>
    </div>
  );
};

const Version = () => {
  return (
    <div className="version">
      <p>0.1.7</p>
    </div>
  );
};

const Settings = () => {
  const { TabPane } = Tabs;

  const history = useHistory();

  useEffect(() => {
    async function auth() {
      await fetch(`/api/v1/auth/token`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          const res = response;
          if (res.auth === false) {
            history.push("/login");
          } else {
            return console.log("logged in");
          }
        });
    }
    auth();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Version />
      <div className="site-layout-content">
        <Tabs defaultActiveKey="1" centered={true}>
          <TabPane tab="Profile" key="1">
            <UserProfile />
            <Divider />
            <ResetPass />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
