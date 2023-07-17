import React from "react";
import Players from "./Players";
import Player from "./Player/Player";

const PlayerList = () => {
    return (
        <>
            {Players.map((player) => (
                <Player
                    name={player.name}
                    team={player.team}
                    nationality={player.nationality}
                    jerseyNumber={player.jerseyNumber}
                    age={player.age}
                    imageUrl={player.imageUrl}
                />
            ))}
        </>
    );
};

export default PlayerList;
