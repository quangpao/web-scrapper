/**
 * @author quangpao
 * @description main content component of each page
 * @version 1.0.0
 * @todo facebook, instagram, tiktok, youtube, and other scraping websites
 */

import React from "react";
import { Button, Input, Space } from "antd";
import { 
    ThunderboltTwoTone, 
} from "@ant-design/icons";

export default function FBImageScrapping() {
    return (
        <div>
            <br/>
            <div className="main">
                <Input className="input" placeholder="https://www.facebook.com/quangpou/posts/153861010358507" />
                <Button type="text" className="button-scrapper" size="large"><ThunderboltTwoTone twoToneColor="#FFE7CE" style={{fontSize: "20px"}}/>Scrape</Button>
            </div>

            <div className="output" hidden>
                <div className="output-terminal">
                    <div className="terminal-text">
                        <Space direction="vertical">
                        </Space>
                    </div>
                </div>
            </div>
        </div>
    );
}