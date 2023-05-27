import Image from 'next/image'
import styles from './page.module.css'

import { Card, Text, Metric, List, ListItem, Title } from "@tremor/react";

const gameList = ["Satisfactory", " Squad", " Factorio", " Wargame", " WARNO", " EVE Online", " Victoria 2", " DiRT Rally\/racing\/etc", " NEBULOUS: Fleet Command", " Generals: Zero Hour", " Railroad Tycoon", " Phasmophobia", " DCS World", " Lemnis Gate", " The Forest Brothers of the Forest", " Wildermyth", " Stationeers", " Hell Let Loose", " Act Of Aggression", " Steel Division 2", " Holdfast: Nations At War", " Ready Or Not", " Counter-Stikeke", " Valorant", " Verdun", " Door Kickers 2", " WarhammerL Vermintide 2", " Tannenberg", " Total War: Empires", " Mount&Blade 2: Bannerlord", " Deep Rock Galactic", " Age of Empires 2", " Project Zomboid", " Imperator Rome", " Divinity Original Sin 2", " theHunter: Call Of The Wild", " GTFO", " Planetary Annihilation", " Forts", " Conquest Of Elusium 5", " Star Ruler 2", " Ancestors Legacy", " Crusader Kings \u043c\u043e\u0436\u043b\u0438\u0432\u043e", " Endless Space 2", " \u043c\u043e\u0436\u043b\u0438\u0432\u043e Civilization", " Barotrauma", " Line War", " private Lineage 2 C4 server", " Foxhole", " War Of Rights", " BattleBit Remastered", " Deceive Inc.", " Starship Troopers", " Fallen Frontier", " Way Of the Hunter", " Manor Lords", " Blaz Blue", " Endless Dungeon", " Broken Arrow", " Marauders", " VTOL VR"];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>FCL deployment check</p>

      </div>

      <div><p>
        Game list:
        <code className={styles.code}> pending</code>
      </p></div>

      <div>
        <Card className="max-w-xs mx-auto">
          <Text>Amount of shared games</Text>
          <Metric>16</Metric>
        </Card>
      </div>

      <div className={styles.center}> 
        <Card className="max-w-xs">
          <Title>Library</Title>
          <List>
            {gameList.map((item) => (
              <ListItem key={item}>
                <span>{item}</span>
              </ListItem>
            ))}
          </List>
        </Card>
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />

      </div>
    </main>
  )
}
