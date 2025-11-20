export default function People({ obj }) {
    return (
        <>
            {(!obj || obj.length === 0) && <p>...</p>}
            {obj && obj.length > 0 && (
                <ul className="places">
                    {obj.map((el, index) => (
                        <li className="place-item" key={index}>
                            <p><b>{el.name}:</b> {el.birth_year}, {el.gender}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}