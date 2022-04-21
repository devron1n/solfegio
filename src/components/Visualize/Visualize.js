import { useState } from "react";
import useSound from "use-sound";

import beepSound from "../../common/sounds/beep.wav";

import "./Visualize.less";

const fretboard = {
  notes: ["До", "Ре", "Ми", "Фа", "Соль", "Ля", "Си"],
  strings: ["1", "2", "3", "4", "5", "6"],
};

export default function Visualize() {
  const [showHelp, setShowHelp] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const [taskValue, setTaskValue] = useState("");
  const [showTimer, setShowTimer] = useState(false);
  const [timerValue, setTimerValue] = useState(null);

  const [play] = useSound(beepSound);

  const { notes, strings } = fretboard;

  let timer;

  async function counter(toTime) {
    for (let i = 0; i < toTime + 1; i++) {
      timer = setTimeout(() => {
        setTimerValue(0 + i);

        if (i == toTime) {
          play();
        }
      }, i * 1000);
    }
  }

  async function handleStart() {
    clearTimeout(timer);

    setTaskValue(
      `${notes[Math.floor(Math.random() * notes.length)]}, на ${
        strings[Math.floor(Math.random() * strings.length)]
      } струне`
    );
    setShowTask(true);

    await counter(5);
    setShowTimer(true);
  }

  return (
    <div className="Visualize">
      <div className="Visualize__description">
        <h3>
          Задание №1 (теория и визуализация)
          <br />
          “Нахождение нот на грифе гитары”
        </h3>
        <b>Задача:</b> Необходимо найти 10 заданных преподавателем нот на разных
        струнах.
        <br />
        <br />
        <b>Условия получения зачета:</b> Нельзя допустить ни одной ошибки при
        нахождении нот, уложившись в 5 секундный лимит времени для нахождения
        каждой ноты.
      </div>

      {showTask && <div className="Visualize__task">{taskValue}</div>}
      {showTimer && <div className="Visualize__timer">{timerValue}</div>}

      <div
        className="Visualize__button Visualize__button--start"
        onClick={() => handleStart()}
      >
        Старт
      </div>

      <div
        className="Visualize__button Visualize__button--help"
        onClick={() => setShowHelp(!showHelp)}
      >
        Помощь
      </div>
      {showHelp && (
        <div className="Visualize__help-container">
          <div className="Visualize__help"></div>
        </div>
      )}
    </div>
  );
}
