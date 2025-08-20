import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import VideoCard from "./components/VideoCard";
import { VideoGrid } from "./components/VideoGrid";
import  AppBar  from "./components/AppBar";
import { LeftBar } from "./components/LeftBar";


export default function Home() {
  return (
    <div className="text-white">
       <AppBar />
       <div className="flex">

      <LeftBar />
      <VideoGrid />
       </div>
    </div>
  );
}
