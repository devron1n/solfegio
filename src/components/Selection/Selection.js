import { useState } from "react";
import useSound from "use-sound";

import A1 from "../../common/sounds/fretboard/1_A.mp3";
import B1 from "../../common/sounds/fretboard/1_B.mp3";
import C1 from "../../common/sounds/fretboard/1_C.mp3";
import D1 from "../../common/sounds/fretboard/1_D.mp3";
import E1 from "../../common/sounds/fretboard/1_E.mp3";
import F1 from "../../common/sounds/fretboard/1_F.mp3";
import G1 from "../../common/sounds/fretboard/1_G.mp3";

import A2 from "../../common/sounds/fretboard/2_A.mp3";
import B2 from "../../common/sounds/fretboard/2_B.mp3";
import C2 from "../../common/sounds/fretboard/2_C.mp3";
import D2 from "../../common/sounds/fretboard/2_D.mp3";
import E2 from "../../common/sounds/fretboard/2_E.mp3";
import F2 from "../../common/sounds/fretboard/2_F.mp3";
import G2 from "../../common/sounds/fretboard/2_G.mp3";

import A3 from "../../common/sounds/fretboard/3_A.mp3";
import B3 from "../../common/sounds/fretboard/3_B.mp3";
import C3 from "../../common/sounds/fretboard/3_C.mp3";
import D3 from "../../common/sounds/fretboard/3_D.mp3";
import E3 from "../../common/sounds/fretboard/3_E.mp3";
import F3 from "../../common/sounds/fretboard/3_F.mp3";
import G3 from "../../common/sounds/fretboard/3_G.mp3";

import A4 from "../../common/sounds/fretboard/4_A.mp3";
import B4 from "../../common/sounds/fretboard/4_B.mp3";
import C4 from "../../common/sounds/fretboard/4_C.mp3";
import D4 from "../../common/sounds/fretboard/4_D.mp3";
import E4 from "../../common/sounds/fretboard/4_E.mp3";
import F4 from "../../common/sounds/fretboard/4_F.mp3";
import G4 from "../../common/sounds/fretboard/4_G.mp3";

import A5 from "../../common/sounds/fretboard/5_A.mp3";
import B5 from "../../common/sounds/fretboard/5_B.mp3";
import C5 from "../../common/sounds/fretboard/5_C.mp3";
import D5 from "../../common/sounds/fretboard/5_D.mp3";
import E5 from "../../common/sounds/fretboard/5_E.mp3";
import F5 from "../../common/sounds/fretboard/5_F.mp3";
import G5 from "../../common/sounds/fretboard/5_G.mp3";

import A6 from "../../common/sounds/fretboard/6_A.mp3";
import B6 from "../../common/sounds/fretboard/6_B.mp3";
import C6 from "../../common/sounds/fretboard/6_C.mp3";
import D6 from "../../common/sounds/fretboard/6_D.mp3";
import E6 from "../../common/sounds/fretboard/6_E.mp3";
import F6 from "../../common/sounds/fretboard/6_F.mp3";
import G6 from "../../common/sounds/fretboard/6_G.mp3";

import "./Selection.less";

const fretboard = {
  // notes: ["До", "Ре", "Ми", "Фа", "Соль", "Ля", "Си"],
  notes: ["C", "D", "E", "F", "G", "A", "B"],
  strings: ["1", "2", "3", "4", "5", "6"],
};

export default function Selection() {
  const [currentSound, setCurrentSound] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  const [play_A1] = useSound(A1);
  const [play_B1] = useSound(B1);
  const [play_C1] = useSound(C1);
  const [play_D1] = useSound(D1);
  const [play_E1] = useSound(E1);
  const [play_F1] = useSound(F1);
  const [play_G1] = useSound(G1);

  const [play_A2] = useSound(A2);
  const [play_B2] = useSound(B2);
  const [play_C2] = useSound(C2);
  const [play_D2] = useSound(D2);
  const [play_E2] = useSound(E2);
  const [play_F2] = useSound(F2);
  const [play_G2] = useSound(G2);

  const [play_A3] = useSound(A3);
  const [play_B3] = useSound(B3);
  const [play_C3] = useSound(C3);
  const [play_D3] = useSound(D3);
  const [play_E3] = useSound(E3);
  const [play_F3] = useSound(F3);
  const [play_G3] = useSound(G3);

  const [play_A4] = useSound(A4);
  const [play_B4] = useSound(B4);
  const [play_C4] = useSound(C4);
  const [play_D4] = useSound(D4);
  const [play_E4] = useSound(E4);
  const [play_F4] = useSound(F4);
  const [play_G4] = useSound(G4);

  const [play_A5] = useSound(A5);
  const [play_B5] = useSound(B5);
  const [play_C5] = useSound(C5);
  const [play_D5] = useSound(D5);
  const [play_E5] = useSound(E5);
  const [play_F5] = useSound(F5);
  const [play_G5] = useSound(G5);

  const [play_A6] = useSound(A6);
  const [play_B6] = useSound(B6);
  const [play_C6] = useSound(C6);
  const [play_D6] = useSound(D6);
  const [play_E6] = useSound(E6);
  const [play_F6] = useSound(F6);
  const [play_G6] = useSound(G6);

  const fretboardSounds = {
    play_A1,
    play_B1,
    play_C1,
    play_D1,
    play_E1,
    play_F1,
    play_G1,

    play_A2,
    play_B2,
    play_C2,
    play_D2,
    play_E2,
    play_F2,
    play_G2,

    play_A3,
    play_B3,
    play_C3,
    play_D3,
    play_E3,
    play_F3,
    play_G3,

    play_A4,
    play_B4,
    play_C4,
    play_D4,
    play_E4,
    play_F4,
    play_G4,

    play_A5,
    play_B5,
    play_C5,
    play_D5,
    play_E5,
    play_F5,
    play_G5,

    play_A6,
    play_B6,
    play_C6,
    play_D6,
    play_E6,
    play_F6,
    play_G6,
  };

  const { notes, strings } = fretboard;

  async function playAgain() {
    if (currentSound) {
      fretboardSounds[currentSound]();
    }
  }

  async function handleStart() {
    const targetSoundName = `play_${
      notes[Math.floor(Math.random() * notes.length)]
    }${strings[Math.floor(Math.random() * strings.length)]}`;

    setCurrentSound(targetSoundName);

    fretboardSounds[targetSoundName]();
  }

  return (
    <div className="Selection">
      <div className="Selection__description">
        <h3>
          Задание №3 (слух)
          <br />
          “Подбор на слух 10 нот”
        </h3>
        <b>Задача:</b> Необходимо определить на слух 10 сыгранных преподавателем
        нот.
        <br />
        <br />
        <b>Условия получения зачета:</b> Кол-во взятых на гитаре нот при подборе
        каждой ноты не должно превышать 5!
      </div>

      <div
        className="Selection__button Selection__button--start"
        onClick={() => handleStart()}
        style={{ backgroundColor: "#6c1ab7" }}
      >
        Старт
      </div>

      <div
        className="Selection__button Selection__button--retry"
        onClick={() => playAgain()}
      >
        Проиграть еще раз
      </div>

      <div
        className="Selection__button Selection__button--help"
        onClick={() => setShowHelp(!showHelp)}
        disabled={!currentSound}
      >
        Помощь
      </div>
      {showHelp && currentSound && (
        <div className="Selection__help-container">
          <div className="Selection__help">{`${
            currentSound[currentSound.length - 2]
          }, на ${currentSound[currentSound.length - 1]}  струне`}</div>
        </div>
      )}
    </div>
  );
}
