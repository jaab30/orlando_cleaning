import React from 'react';
import PackageCard from "../components/PackageCard";
import servPackages from "../utils/packages.json";

const ServPackages = (): any => {

    const renderCard = (): any => {
        const result = servPackages.map(item => {
            return (
                <PackageCard
                    image={item.image}
                    title={item.title}
                    price={item.price}
                />
            )
        })
        return result;
    }

    return (
        <aside id="package" className="packages">
            <div className="packages__title-box">
                <h3 className="packages__title">services packages</h3>
            </div>
            <div className="packages__images-box">
                {renderCard()}
            </div>

        </aside>
    )
}

export default ServPackages;