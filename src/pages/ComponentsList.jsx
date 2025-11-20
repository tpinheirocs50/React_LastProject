import ComponentsCard from "../components/ComponentsCard"
import { CORE_CONCEPTS } from "../data/coreConcepts";

export default function ComponentsList() {
    return (
        <div>
            {CORE_CONCEPTS.map((el) => <ComponentsCard key={el.title} {... el} />)}
        </div>
    );
}