'use client'
import './globals.css'
import { ClassificationItem } from "./classification-item";

export default function Home() {
  return (
    <div className="main-container">
      <div className='classification-container'>
        <ClassificationItem />
        <ClassificationItem />
        <ClassificationItem />
        <ClassificationItem />
        <ClassificationItem />
        <ClassificationItem />
        <ClassificationItem />
        <ClassificationItem />
        <ClassificationItem />
        <ClassificationItem />
        <ClassificationItem />
      </div>
    </div>
  );
}
