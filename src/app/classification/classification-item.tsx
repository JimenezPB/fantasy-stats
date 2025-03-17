'use client'

import Image from "next/image";
import 'primeicons/primeicons.css';
import { redirect } from "next/navigation";
import { HistoryIcons } from "./history-icons";
import { useEffect, useState } from "react";

// Fetch classification from classification.json

const getData = async () => {
    const response = fetch('classification.json',
        {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        }
    );
    
    const data = (await response).json();

    return data;
  }
  

function click(){
    redirect("/team/boxa")
}

export function ClassificationItem(){
    const [classification, setClassification] = useState([])
    const [loading, setLoading] = useState(true)

    const showClassification = () => {
        getData().then(data => {
            setClassification(data.classification);
            console.log(classification);
            setLoading(false);
        })
    }

    useEffect(()=>{
        console.log("HOLA");

        showClassification()
    },[])

    return (
        loading ? null : classification.map((classification, index) => {
            return (
                <div key={classification.equipo}>
                    <div className="classification-item-container" onClick={click}>
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            { classification.movimiento === -1 &&  <i className="pi pi-chevron-down" style={{
                                    color: 'red',
                                    position: 'absolute',
                                    top: '-20px', // Ajusta según sea necesario
                                    left: '80%',
                                    transform: 'translateX(-50%)'
                                    }}
                                />
                            }
                                
                            { classification.movimiento !== 1 && classification.movimiento !== 1 && <i className="pi pi-equals" style={{
                                        color: 'yellow',
                                        position: 'absolute',
                                        top: '-20px', // Ajusta según sea necesario
                                        left: '80%',
                                        transform: 'translateX(-50%)'
                                    }}
                                />
                            }
                                
                           { classification.movimiento === 1 && <i className="pi pi-chevron-up" style={{
                                        color: 'green',
                                        position: 'absolute',
                                        top: '-20px', // Ajusta según sea necesario
                                        left: '80%',
                                        transform: 'translateX(-50%)'
                                    }}
                                />
                            }
                            <p className="c-position" style={{ textAlign: 'center' }}>{index}</p>
                        </div>
                        <div className="c-image-history-container">
                            <div className="c-image-container">
                                <Image src="/default-avatar.jpg" alt={"profile-image"} width={65} height={65} className="profile-img"/>
                            </div>
                            <HistoryIcons history={classification.historico} />
                        </div>
                        <div className="c-user-container">
                            <div className="c-name-container">
                            <p className="c-team">{classification.equipo}</p>
                            <p className="c-manager">{classification.manager}</p>
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
                            <p className="c-points">{classification.puntos}</p>
                            <p className="c-money">{classification.pago_acumulado} €</p>
                        </div>
                    </div>
                </div>
            );
        })
    );
}