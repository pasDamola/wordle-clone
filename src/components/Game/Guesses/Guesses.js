function Guesses({ guesses }) {
    return (
        <div class="guess-results">
            {guesses?.map((guess) => {
                return (
                    <p key={guess} className="guess">{guess}</p>
                )
            })}
        </div>
    )
}


export default Guesses;