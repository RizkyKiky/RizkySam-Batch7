import React from 'react';
import QuestItem from './QuestItem';

export default function QuestList(props) {
  const { dataQuest, setDataQuest } = props;

  return (
    <div>
      <h4>List Of Quest</h4>
      {dataQuest.map((data, index) => (
        <div style={{ border: '2px solid gray', marginBottom: '5px', padding: '5px', listStyleType: 'none' }}>
          <li>ID : {data.id}</li>
          <li>Title Quest : "{data.title}"</li>
          <QuestItem data={data} dataQuest={dataQuest} setDataQuest={setDataQuest} />
        </div>
      ))}
    </div>
  );
}
