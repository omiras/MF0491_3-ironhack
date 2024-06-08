async function getPuzzle(wordCount) {
    let hiddenSentence = "Buena Suerte";

    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    const data = await response.json();
    console.log(data);
    hiddenSentence = data.puzzle;

    return hiddenSentence;
}
