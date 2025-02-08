import Image from "next/image";

export function ClassificationItem(){
    return (
        <div className="classification-item-container">
            <p className="c-position">1</p>
            <Image src="/default-avatar.jpg" alt={"profile-image"} width={100} height={100} className="profile-img"/>
            <div className="c-user-container">
                <p className="c-username">Boxa</p>
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