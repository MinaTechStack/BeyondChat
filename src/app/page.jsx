'use client';

import Sidebar from '../components/Sidebar';
import ConversationList from '../components/ConversationList';
import ChatHeader from '../components/ChatHeader';
import ChatMessages from '../components/ChatMessages';
import MessageInput from '../components/MessageInput';
import Copilot from '@/components/copilot';

export default function Home() {
  return (
    <main className="flex h-screen w-full overflow-hidden bg-white">
      <aside className="hidden md:flex w-16 xl:w-20 border-r border-gray-200">
        <Sidebar />
      </aside>

      <aside className="hidden md:flex md:w-64 lg:w-72 xl:w-80 border-r border-gray-200">
        <ConversationList />
      </aside>

      <section className="flex flex-col flex-1 min-w-0">
        <ChatHeader />
        <div className="flex-1 overflow-y-auto">
          <ChatMessages />
        </div>
        <MessageInput />
      </section>

      <aside className="hidden lg:flex w-72 xl:w-80 border-l border-gray-200">
        <Copilot />
      </aside>
    </main>
  );
}
