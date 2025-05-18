import React from 'react';

export default function QuestItem(props) {
  const { data, dataQuest, setDataQuest } = props;

  function statusQuest(completed) {
    return completed ? 'Complete!' : 'Retry';
  }

  function markDone(id) {
    const status = dataQuest.map((data) => (data.id == id ? { ...data, completed: true } : data));
    setDataQuest(status);
  }

  function deleteQuest(id) {
    const deleteData = dataQuest.filter((data) => data !== id);
    setDataQuest(deleteData);
  }
  return (
    <div>
      <li>Status : {statusQuest(data.completed)}</li>
      <button type="button" onClick={() => markDone(data.id)}>
        Mark as Complete
      </button>
      <button type="button" onClick={() => deleteQuest(data.id)}>
        Delete Quest
      </button>
    </div>
  );
}
