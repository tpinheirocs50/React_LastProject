import { Link } from "react-router-dom";

export default function CoursesPage() {
    return (

        //vai à base de dados, tabela cursos, e traz todos os cursos inscritos na base de dados numa forma de array: cursos = []
        <div>
            <h4>Pagina de cursos</h4>
            {/* ciclo for que itera o array de cursos e para cada um mostra nome do curso, duração, regime e link para abrir uma nova página com toda a info do curso */}
            <Link to='/course/react'>React</Link><br/>
            <Link to='/course/laravel'>Laravel</Link><br/>
            <Link to='/course/javascript'>Javascript</Link><br/>
        </div>
    );
}