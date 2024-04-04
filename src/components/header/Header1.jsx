import React from "react";
import { Typography } from "antd";
import { FacebookOutlined, TwitterOutlined } from "@ant-design/icons";

const Header1 = () => {
  return (
    <div
      style={{
        backgroundColor: "#2B3445",
        color: "white",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Typography.Text
          style={{
            padding: "2px 10px",
            marginRight: "5px",
            fontSize: "12px",
            borderRadius: "10px",
            backgroundColor: "#D23F57",
          }}
        >
          HOT
        </Typography.Text>
        <Typography.Text style={{ fontSize: "12px", marginRight: "10px" }}>
          Free Express Shipping
        </Typography.Text>
      </div>
      <div>
        <FacebookOutlined style={{ marginRight: "10px", fontSize: "18px" }} />
        <TwitterOutlined style={{ marginRight: "10px", fontSize: "18px" }} />
      </div>
    </div>
  );
};

export default Header1;
