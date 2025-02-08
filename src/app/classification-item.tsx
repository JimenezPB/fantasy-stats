import Image from "next/image";

export function ClassificationItem(){
    return (
        <div >
            <Image src="/default-avatar.jpg" alt={"profile-image"} width={100} height={100} className="profile-img"/>
        </div>
    );
}