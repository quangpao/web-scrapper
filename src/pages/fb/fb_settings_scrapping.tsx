import { UserOutlined } from "@ant-design/icons";
import { Input, Radio, Select, Space } from "antd";
import React from "react";

export default function FBSettingScrapping() {

    const [loginMethod, setLoginMethod] = React.useState("1");

    const onChangeLoginMethod = (event : React.MouseEvent<HTMLElement>) => {
        event.preventDefault();

        const button = event.currentTarget;
        setLoginMethod(button.attributes.getNamedItem("value")?.value!);
    }

    return (
        <div className="settings">
            <br/>
            <div className="settings">
                <Radio.Group defaultValue="1">
                    <Radio.Button className="settings-radio" value="1" onClick={onChangeLoginMethod} >Cookies</Radio.Button>
                    <Radio.Button className="settings-radio" value="2" onClick={onChangeLoginMethod} >Login Information</Radio.Button>
                </Radio.Group>

                {loginMethod === "1" ? <CookiesMethod/> : <LoginMethod/>}
            </div>
        </div>
    );
}

function LoginMethod() {
    return (
        <div className="facebook-login">
            <Space direction="vertical">
                <Input className="input-data"
                    placeholder="Enter your username"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                />
                <Input.Password className="input-data"
                    placeholder="Enter your password"
                />
            </Space>
        </div>
    )
}

function CookiesMethod() {
    return (
        <div className="facebook-cookies">
            <Input.TextArea placeholder="Enter your cookies here" className="input-data" style={{height: "200px", resize: 'none', overflowY: "hidden"}}/>
        </div>
    )
}