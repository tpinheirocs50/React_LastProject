export default function Movies({ obj }) {
    return (
        <>
            {(!obj || obj.length === 0) && <p>...</p>}
            {obj && obj.length > 0 && (
                <ul className="places">
                    {obj.map((el) => (
                        <li className="place-item" key={el.episode_id}>
                            <h4>{el.title}</h4>
                            <p>{el.opening_crawl}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

