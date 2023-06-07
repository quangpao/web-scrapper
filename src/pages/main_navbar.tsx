/**
 * @author quangpao
 * @description main navbar component switch between pages
 * @version 1.0.0
 * @todo facebook, instagram, tiktok, youtube, and other scraping websites
 */

import React from "react";
import { Menu } from "antd";
import { FacebookOutlined, InstagramOutlined, YoutubeOutlined } from "@ant-design/icons";

export default function MainNavbar() {
    return (
        <Menu theme="light" mode="vertical" defaultSelectedKeys={["1"]}>
            <Menu.Item className="menu-item" key="1"><FacebookOutlined style={{fontSize: "18px", color: "#3b5998"}}/> Facebook</Menu.Item>
            <Menu.Item disabled={true} className="menu-item" key="2"><InstagramOutlined style={{fontSize: "18px", color: "pink"}}/> Instagram</Menu.Item>
            <Menu.Item disabled={true} className="menu-item" key="3"><YoutubeOutlined style={{fontSize: "18px", color: "red"}}/> Youtube</Menu.Item>
            <Menu.Item disabled={true} className="menu-item" key="4">Tiktok</Menu.Item>
            <Menu.Item disabled={true} className="menu-item" key="5">Other</Menu.Item>
        </Menu>
    );
}
