/**
 * @author quangpao
 * @description main content component of each page
 * @version 1.0.0
 * @todo facebook, instagram, tiktok, youtube, and other scraping websites
 */

import React, { Component } from "react";
import { Button, Input, Layout, Menu } from "antd";
import { FileImageTwoTone, ProfileTwoTone, SettingTwoTone, ThunderboltTwoTone, VideoCameraTwoTone } from "@ant-design/icons";

export default function MainContent() {
    return (
        <div className="main-content">
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
                <Menu.Item className="menu-item-2" key="1"><FileImageTwoTone twoToneColor="#E4A5FF" style={{fontSize: "18px"}}/> Images</Menu.Item>
                <Menu.Item disabled={true} className="menu-item-2" key="2"><VideoCameraTwoTone twoToneColor="#FFAAC9" style={{fontSize: "18px"}}/> Video</Menu.Item>
                <Menu.Item disabled={true} className="menu-item-2" key="3"><ProfileTwoTone twoToneColor="#FFCDA8" style={{fontSize: "18px"}}/> Profiles</Menu.Item>
                <Menu.Item disabled={true} className="menu-item-2" key="4"><SettingTwoTone twoToneColor="#FFE7CE" style={{fontSize: "18px"}}/> Settings</Menu.Item>
            </Menu> 
            <br />
            <div className="main">
                <Input className="input" placeholder="https://www.facebook.com/quangpou/posts/153861010358507" />
                <Button type="text" className="button-scrapper" size="large"><ThunderboltTwoTone twoToneColor="#FFE7CE" style={{fontSize: "20px"}}/>Scrape</Button>
            </div>

            <div className="output">
                
            </div>

        </div>
    );
}