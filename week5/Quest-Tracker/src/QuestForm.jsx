import React, { useState } from 'react';

export default function QuestForm(props) {
  const { dataQuest, setDataQuest } = props;

  function handleChangeQuest(e) {
    setDataQuest(e.target.value);
  }

  function addNewQuest() {
    console.log([...dataQuest]);
    setDataQuest([...dataQuest, { id: id, title: title, completed: completed }]);
  }
  return (
    <div>
      <h2>Quest Tracker</h2>
      <div>
        <p>Add your new quest :</p>
        <input onChange={handleChangeQuest} placeholder="input your quest"></input>
        <button onClick={addNewQuest} type="button">
          Add Quest
        </button>
      </div>
    </div>
  );
}
