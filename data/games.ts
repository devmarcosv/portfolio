export type Game = {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    tags: string[];
    engine: string;
    repoUrl: string;
    featured?: boolean;
}

export const games: Game[] = [
    {
    id: "game-01",
    title: "Aetheria Chronicles",
    description: "Breve descrição do jogo. Mecânica principal, objetivo e o que torna ele único.",
    thumbnail: "/images/games/game-01.png",
    tags: ["Puzzle", "2D"],
    engine: "Unity",
    repoUrl: "https://github.com/seuusuario/jogo1",
    featured: true,

    },
]
