import { useParams } from "react-router-dom";

export default function Course() {

    // recolher o nome do slug no url e guardar na variavel "course_name"
    let { course_name } = useParams();

    return (
        <div>
            <h1>This is the {course_name} page</h1>
        </div>
    );
}