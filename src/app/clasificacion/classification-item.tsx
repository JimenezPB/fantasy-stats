"use client";

import Image from "next/image";
import "primeicons/primeicons.css";
import { HistoryIcons } from "./history-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Fetch classification from classification.json

const getData = async () => {
  const response = fetch("classification.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const data = (await response).json();

  return data;
};


export function ClassificationItem() {
  const router = useRouter();
  const [classification, setClassification] = useState([]);
  const [loading, setLoading] = useState(true);

  function click(equipo: string) {
    router.push(`/equipo/${equipo}`);
  }

  const showClassification = () => {
    getData().then((data) => {
      setClassification(data.classification);
      console.log(data.classification);
      setLoading(false);
    });
  };

  useEffect(() => {
    showClassification();
  }, []);

  return loading
    ? null
    : classification.map((classification, index) => {
        return (
          <div
            key={classification.equipo}
            className="classification-item-container"
            onClick={() => click(classification.equipo)}
          >
            <div style={{ position: "relative", display: "inline-block" }}>
              {classification.movimiento === -1 && (
                <i
                  className="pi pi-chevron-down"
                  style={{
                    color: "red",
                    position: "absolute",
                    top: "-20px", // Ajusta según sea necesario
                    left: "80%",
                    transform: "translateX(-50%)",
                  }}
                />
              )}

              {classification.movimiento !== 1 &&
                classification.movimiento !== -1 && (
                  <i
                    className="pi pi-equals"
                    style={{
                      color: "yellow",
                      position: "absolute",
                      top: "-20px", // Ajusta según sea necesario
                      left: "80%",
                      transform: "translateX(-50%)",
                    }}
                  />
                )}

              {classification.movimiento === 1 && (
                <i
                  className="pi pi-chevron-up"
                  style={{
                    color: "green",
                    position: "absolute",
                    top: "-20px", // Ajusta según sea necesario
                    left: "80%",
                    transform: "translateX(-50%)",
                  }}
                />
              )}
              <p className="c-position" style={{ textAlign: "center" }}>
                {index}
              </p>
            </div>
            <div className="c-image-history-container">
              <div className="c-image-container">
                <Image
                  src="/default-avatar.jpg"
                  alt={"profile-image"}
                  width={65}
                  height={65}
                  className="profile-img"
                />
              </div>
              <div className="history-container">
                {classification.historico?.map((h, index) => {
                  return <HistoryIcons key={index} history={h} />;
                })}
              </div>
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
        );
      });
}
