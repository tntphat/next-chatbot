import Image from 'next/image';
import styles from './page.module.css';
import ChatbotButton from '@/components/ChatbotButton';

export default function Home() {
  return (
    <div className={styles.page}>Hello world 2{/* <ChatbotButton /> */}</div>
  );
}
