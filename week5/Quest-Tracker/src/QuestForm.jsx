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
      <p>Quest Tracker</p>
      <div>
        <p>Add your new quest :</p>
        <input onChange={handleChangeQuest}></input>
        <button onClick={addNewQuest} type="button">
          Add Quest
        </button>
      </div>
    </div>
  );
}
