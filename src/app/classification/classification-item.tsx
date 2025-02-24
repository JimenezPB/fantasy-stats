'use client'

import Image from "next/image";
import 'primeicons/primeicons.css';
import { redirect } from "next/navigation";
import { HistoryIcons } from "./history-icons";

function click(){
    redirect('team/Boxa');
}

export function ClassificationItem(){
    return (
        <div className="classification-item-container" onClick={click}>
            {/* <i className="pi pi-chevron-up" style={{ color: 'green' }}></i> */}
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <i className="pi pi-chevron-down" style={{
                    color: 'red',
                    position: 'absolute',
                    top: '-20px', // Ajusta según sea necesario
                    left: '80%',
                    transform: 'translateX(-50%)'
                    }}></i>
                <p className="c-position" style={{ textAlign: 'center' }}>1</p>
            </div>
            <div className="c-image-history-container">
                <div className="c-image-container">
                    <Image src="/default-avatar.jpg" alt={"profile-image"} width={65} height={65} className="profile-img"/>
                </div>
                <HistoryIcons />
            </div>
            <div className="c-user-container">
                <div className="c-name-container">
                    <p className="c-team">Nombre del equipo</p>
                    <p className="c-manager">Nombre del manager</p>
                </div>
                <div className="c-stats">
                    <div className="c-stats-container">
                        <p className="c-stats-title">MAX</p>
                        <p className="c-stats-value">12</p>
                    </div>
                    <div className="c-stats-container">
                        <p className="c-stats-title">MIN</p>
                        <p className="c-stats-value">12</p>
                    </div>
                    <div className="c-stats-container">
                        <p className="c-stats-title">MED</p>
                        <p className="c-stats-value">12</p>
                    </div>
                </div>
            </div>
            <div className="c-points-container">
                <p className="c-points">100</p>
                <p className="c-money">12 €</p>
            </div>
        </div>
    );
}