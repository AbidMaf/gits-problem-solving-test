function gitsLeaderboard(scores, gits) {
    // scores.sort();
    const gits_ranks = gits.map(gits_score => {
        let rank = 1;
        let previous_score = null;

        // Iterasi terhadap score pemain lain
        scores.forEach(score => {
            // Jika scorenya sama dengan score sebelumnya (previous_score), maka rank tetap sama
            if(score === previous_score) {
                return;
            }

            if(gits_score < score) {
                rank++;
            }

            previous_score = score;
        })

        return rank;
    })

    return gits_ranks;
}

console.log({
    case_1: {
        input: "7 | 100 100 50 40 40 20 10 | 4 | 5 25 50 120",
        output: gitsLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]),
    },
    case_2: {
        input: "4 | 100 80 80 70 | 3 | 60 70 100",
        output: gitsLeaderboard([100, 80, 80, 70], [60, 70, 100]),
    },
    case_3: {
        input: "11 | 100 100 90 85 85 75 70 60 60 55 50 | 5 | 45 65 90 85 100)",
        output: gitsLeaderboard([100, 100, 90, 85, 85, 75, 70, 60, 60, 55, 50], [45, 65, 90, 85, 100]),
    },
});