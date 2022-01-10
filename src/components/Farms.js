import React from "react";
import farm1 from "./img/farm1.jpg";
import farm2 from "./img/farm2.jpg";
import farm3 from "./img/farm3.jpg";
import farm4 from "./img/farm4.jpg";

const Farms = () => {
    return (
        <div>
            <h3>Partner farms</h3>
                <div className="farm-section">
                    <div className="farm">
                        <img src={farm1} className="farm-img" alt="Noora's farm" />
                        <h4>Noora's farm</h4>
                    </div>
                    <div className="farm">
                        <img src={farm2} className="farm-img" alt="Friman Metsola collective" />
                        <h4>Friman Metsola collective</h4>
                    </div>
                    <div className="farm">
                        <img src={farm3} className="farm-img" alt="Organic Ossi's Impact That Lasts plantation" />
                        <h4>Organic Ossi's Impact That Lasts plantation</h4>
                    </div>
                    <div className="farm">
                        <img src={farm4} className="farm-img" alt="PartialTech Research Farm" />
                        <h4>PartialTech Research Farm</h4>
                    </div>
                </div>
        </div>
    )
        
        
/*     
        Add a map which shows the location of the farms and which can be 
        interacted with (you can decide where the farms are) */
    
}

export default Farms;