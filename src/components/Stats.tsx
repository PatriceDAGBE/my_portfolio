
// const myStats = {
//     experience_year: 2,
//     projects_completed: 50,
//     clients_worldwide: 6000,
//     arward_archived: 12000
// };

const formatStats = (label, number) => {
    // Si le nombre est 5, on retourne "4+"
    if (label == "Projects<br/>Completed") {
        return number > 2 ? `${number}+` : number;
    }

    // Si le nombre est 1000 ou plus, on utilise une notation "K"
    if (number >= 1000) {
        // On divise par 1000 et on ajoute "K"
        // Math.floor(number / 1000) pour avoir un nombre entier
        // Par exemple, 12000 devient 12K, 6000 devient 6K
        return `${Math.floor(number / 1000)}k`;
    }

    // Sinon, on retourne le nombre tel quel
    return number;
};

const Stats = ({myStats}) => {
    return (
        <div className="flex flex-wrap sm:flex-nowrap justify-between w-full gap-8 mt-4 bg-secondary-dark p-10 rounded-2xl">
            {/* On va mapper un tableau de données, c'est plus propre que la répétition */}
            {myStats.map((stat, index) => (
                <div key={index} className="flex flex-row items-center gap-x-2">
                    <p className="text-primary font-bold text-5xl">{formatStats(stat.label, stat.value)}</p>
                    <p className="text-2xl text-gray-400" dangerouslySetInnerHTML={{ __html: stat.label }} />
                </div>
            ))}
        </div>
    );
}

export default Stats;