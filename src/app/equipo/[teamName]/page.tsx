'use client'

import { useParams } from "next/navigation";

export default function Equipo() {
    const params = useParams(); // Obtiene el ID desde la URL
    const { teamName } = params;

    return (
        <div className="main-container">
            <div className="center-container">
                <h1>Team Name: {teamName}</h1>
            </div>
        </div>
    )
}