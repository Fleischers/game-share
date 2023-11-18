"use client";

// import styles from "./page.module.css";
import Navigation from "./Navigation";

// import {
//   Card,
//   Text,
//   Metric,
//   List,
//   ListItem,
//   Title,
//   TextInput,
// } from "@tremor/react";
import { Card, Input, Listbox, ListboxItem } from "@nextui-org/react";
import { useState } from "react";

const gameList = [
  "Satisfactory",
  " Squad",
  " Factorio",
  " Wargame",
  " WARNO",
  " EVE Online",
  " Victoria 2",
  " DiRT Rally/racing/etc",
  " NEBULOUS: Fleet Command",
  " Generals: Zero Hour",
  " Railroad Tycoon",
  " Phasmophobia",
  " DCS World",
  " Lemnis Gate",
  " The Forest Brothers of the Forest",
  " Wildermyth",
  " Stationeers",
  " Hell Let Loose",
  " Act Of Aggression",
  " Steel Division 2",
  " Holdfast: Nations At War",
  " Ready Or Not",
  " Counter-Stikeke",
  " Valorant",
  " Verdun",
  " Door Kickers 2",
  " WarhammerL Vermintide 2",
  " Tannenberg",
  " Total War: Empires",
  " Mount&Blade 2: Bannerlord",
  " Deep Rock Galactic",
  " Age of Empires 2",
  " Project Zomboid",
  " Imperator Rome",
  " Divinity Original Sin 2",
  " theHunter: Call Of The Wild",
  " GTFO",
  " Planetary Annihilation",
  " Forts",
  " Conquest Of Elusium 5",
  " Star Ruler 2",
  " Ancestors Legacy",
  " Crusader Kings \u043c\u043e\u0436\u043b\u0438\u0432\u043e",
  " Endless Space 2",
  " \u043c\u043e\u0436\u043b\u0438\u0432\u043e Civilization",
  " Barotrauma",
  " Line War",
  " private Lineage 2 C4 server",
  " Foxhole",
  " War Of Rights",
  " BattleBit Remastered",
  " Deceive Inc.",
  " Starship Troopers",
  " Fallen Frontier",
  " Way Of the Hunter",
  " Manor Lords",
  " Blaz Blue",
  " Endless Dungeon",
  " Broken Arrow",
  " Marauders",
  " VTOL VR",
];

export default function Home() {
  const [gameName, setGameName] = useState<string>("");

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    gameList.push(gameName);
    setGameName("");
  };

  const addGameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameName(e.target.value);
  };
  return (
    <main>
      <Navigation />

      <div>
        <p>
          Game list:
          <code> pending</code>
        </p>
      </div>
      <form onSubmit={onSubmit}>
        <Input
          value={gameName}
          variant="underlined"
          label="Add game"
          onChange={addGameHandler}
        />
      </form>

      <div>
        <Card className="max-w-xs mx-auto">
          <h2>Amount of shared games</h2>
          <p>16</p>
        </Card>
      </div>

      <div>
        <Card className="max-w-xs">
          <h2>Library</h2>
          <Listbox>
            {gameList.map((item) => (
              <ListboxItem key={item}>
                <span>{item}</span>
              </ListboxItem>
            ))}
          </Listbox>
        </Card>
      </div>
    </main>
  );
}
