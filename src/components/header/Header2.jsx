import React from "react";
import { Input, Badge, Row, Col } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

const Header2 = () => {
  return (
    <div>
      <Row justify="space-between" align="middle" style={{ padding: "20px 0" }}>
        <Col flex="auto">
          <img src="./img/logo2.svg" alt="logo" />
        </Col>
        <Col flex="800px">
          <Row align="middle">
            <Col flex="auto">
              <Input
                style={{ padding: "10px" }}
                placeholder="Search…"
              />
            </Col>
            <Col style={{ padding: "10px" }}>
              <Badge count={4} offset={[10, 0]}>
                <ShoppingCartOutlined style={{ fontSize: "24px" }} />
              </Badge>
            </Col>
            <Col style={{ padding: "10px" }}>
              <UserOutlined style={{ fontSize: "24px" }} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Header2;
