import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

export default function RootLayout() {
    return (
        <>
            <h1>Header</h1>

            <Outlet/>
            <Menu/>
            
            <h1>Footer</h1>
        </>
    );
}