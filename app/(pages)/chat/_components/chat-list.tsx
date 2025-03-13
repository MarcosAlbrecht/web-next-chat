import { Accordion } from "@/app/_components/ui/accordion";
import { ChamadosDto } from "../../home/_actions/api";
import ChatAccordionSection from "./accordion-item";

interface ChatListProps {
  chatList: ChamadosDto[];
  selectedChatId: number | null;
  idUserLogged: string;
  onSelect: (chatId: number) => void;
}

export default function ChatList({
  chatList,
  selectedChatId,
  idUserLogged,
  onSelect,
}: ChatListProps) {
  const chatsAbertos = chatList.filter(
    (call) => call.tecnico_responsavel === null
  );
  const meusChats = chatList.filter(
    (call) => call.tecnico_responsavel === idUserLogged
  );
  const outrosChats = chatList.filter(
    (call) =>
      call.tecnico_responsavel !== null &&
      call.tecnico_responsavel !== idUserLogged
  );
  return (
    <div className="border-r border-gray-200 w-full h-screen overflow-y-auto scroll-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold">Chats</h2>
        <input
          type="text"
          placeholder="Search..."
          className="w-full mt-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <Accordion
          type="multiple"
          className="w-full px-4"
          defaultValue={["abertos", "meus-chats"]}
        >
          <ChatAccordionSection
            title="Chats Abertos"
            value="abertos"
            chats={chatsAbertos}
            selectedChatId={selectedChatId}
            onSelect={onSelect}
          />
          <ChatAccordionSection
            title="Meus Chats"
            value="meus-chats"
            chats={meusChats}
            selectedChatId={selectedChatId}
            onSelect={onSelect}
          />
          <ChatAccordionSection
            title="Outros Chats"
            value="outros-chats"
            chats={outrosChats}
            selectedChatId={selectedChatId}
            onSelect={onSelect}
          />
        </Accordion>
      </div>
    </div>
  );
}
