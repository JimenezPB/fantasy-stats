'use client'
import { ClassificationItem } from './components/classification/classification-item';
import './globals.css'

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
