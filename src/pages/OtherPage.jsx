import CardButton from "../components/CardButton";
import Button from "../components/Button";
import DinamicContent from "../components/DinamicContent";
import CardList from "../components/CardList";

export default function OtherPage() {

    function logToConsole(msg) {
        console.log(msg);
    }


    return (
        <>
            <CardButton title="titulo" description="descriçao"/>
            <DinamicContent/>
            <CardList/>
            <Button handleClick={() => logToConsole("Logged to console")}>Log to console</Button>
        </>
    );
}