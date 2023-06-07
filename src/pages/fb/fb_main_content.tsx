/**
 * @author quangpao
 * @description main content component of each page
 * @version 1.0.0
 * @todo facebook, instagram, tiktok, youtube, and other scraping websites
 */

import React from "react";
import { Tabs } from "antd";
import { 
    FileImageTwoTone, 
    ProfileTwoTone, 
    SettingTwoTone, 
    VideoCameraTwoTone 
} from "@ant-design/icons";
import FBImageScrapping from "./fb_image_scrapping_screen";
import FBSettingScrapping from "./fb_settings_scrapping";

export default function FBMainContent() {

    const items = [
        {
            key: "1",
            label: (
                <span>
                    <FileImageTwoTone twoToneColor="#E4A5FF" style={{fontSize: "18px"}}/> Images
                </span>
            ),
            children: (
                <FBImageScrapping/>
            )
        },
        {
            key: "2",
            label: (
                <span>
                    <VideoCameraTwoTone twoToneColor="#FFAAC9" style={{fontSize: "18px"}}/> Videos
                </span>
            ),
            disabled: true
        },
        {
            key: "3",
            label: (
                <span>
                    <ProfileTwoTone twoToneColor="#FFCDA8" style={{fontSize: "18px"}}/> Profile
                </span>
            ),
            disabled: true
        },
        {
            key: "4",
            label: (
                <span>
                    <SettingTwoTone twoToneColor="#FFE7CE" style={{fontSize: "18px"}}/> Settings
                </span>
            ),
            children: (
                <FBSettingScrapping/>
            )
        }
    ]

    return (
        <div className="main-content">
            <Tabs defaultActiveKey="1" items={items}/>
        </div>
    );
}