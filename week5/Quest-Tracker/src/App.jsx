import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import QuestForm from './QuestForm';

function App() {
  const [dataQuest, setDataQuest] = useState([
    {
      id: 1,
      title: 'Rescue the village from the dragons',
      completed: false,
    },
    {
      id: 2,
      title: 'Princess or villagers? : find your own path',
      completed: false,
    },
    {
      id: 3,
      title: 'The Excalibur',
      completed: false,
    },
    {
      id: 4,
      title: 'Journey to the gongmen city',
      completed: false,
    },
    {
      id: 5,
      title: 'The end : happily reunited and coroneted by the queen',
      completed: false,
    },
    {
      id: 6,
      title: 'The next of kin? Chase your own way',
      completed: false,
    },
  ]);
  return (
    <div>
      <QuestForm dataQuest={dataQuest} setDataQuest={setDataQuest} />
    </div>
  );
}

export default App;
