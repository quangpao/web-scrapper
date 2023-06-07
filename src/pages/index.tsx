import { invoke } from "@tauri-apps/api/tauri";
import { listen } from "@tauri-apps/api/event"
import { useEffect, useState } from "react";
import { Button, Progress } from "antd";
import MainNavbar from "./main_navbar";
import MainContent from "./main_content";
import { Layout } from "antd";

interface ProgressEventPayload {
    progress: number;
}

interface ProgressEventProps {
    payload: ProgressEventPayload;
}

interface ImageEventPayload {
    image: [];
}
interface ImageEventProps {
    payload: ImageEventPayload;
}

export default function Home() {
    return(
        <Layout>
            <Layout.Sider><MainNavbar/></Layout.Sider>
            <Layout.Content><MainContent/></Layout.Content>
        </Layout>
    )
}