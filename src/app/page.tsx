import Image from 'next/image';
import styles from './page.module.css';
import ChatbotButton from '@/components/ChatbotButton';
import FloatingChatbot from 'teko-chatbot-ui/dist/index.mjs';
import 'teko-chatbot-ui/dist/index.css';

export default function Home() {
  return (
    <div className={styles.page}>
      Hello world 4 {typeof window !== undefined && <FloatingChatbot />}
    </div>
  );
}
