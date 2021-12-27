import React from "react";
import farm1 from "./img/farm1.jpg";
import farm2 from "./img/farm2.jpg";
import farm3 from "./img/farm3.jpg";
import farm4 from "./img/farm4.jpg";

 
const Home = () => {
    return (
      <div>
        <h2>Welcome!</h2>
        <h3>Our mission is to produce high quality data from partner farms.</h3>
        <p>
        If you are a farmer, add your farm information to our database so we 
        can continue to guarantee quality data to support farming.
        </p>
        <p>
        Dogs raccoons robins rats. Sage mower goat, raccoons rhubarb 
        outhouse a, apples berries corn. Kidney beans ostrich trucks. 
        Oranges cucumbers rhubarb gourds watermelon. Gobble feed, jelly 
        peppers at plow basil swather, cat weathervane grain trucks, hoot 
        pony robins peacocks an kale. Mallet herbs basil nest, in welding 
        equipment pens quail.  
        Dogs raccoons robins rats. Sage mower goat, raccoons rhubarb 
        outhouse a, apples berries corn. Kidney beans ostrich trucks. 
        Oranges cucumbers rhubarb gourds watermelon. Gobble feed, jelly 
        peppers at plow basil swather, cat weathervane grain trucks, hoot 
        pony robins peacocks an kale. Mallet herbs basil nest, in welding 
        equipment pens quail.  
        Dogs raccoons robins rats. Sage mower goat, raccoons rhubarb 
        outhouse a, apples berries corn. Kidney beans ostrich trucks. 
        Oranges cucumbers rhubarb gourds watermelon. Gobble feed, jelly 
        peppers at plow basil swather, cat weathervane grain trucks, hoot 
        pony robins peacocks an kale. Mallet herbs basil nest, in welding 
        equipment pens quail.  
        </p>
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
        
{/*     
        Add a map which shows the location of the farms and which can be 
        interacted with (you can decide where the farms are) */}

        <p>Sunflower wheat in pig. Garden windmill chicks, hen at corn in, 
            lettus a peppers. Prairie dogs raccoons robins rats. John Deere 
            bees, parsley sweet corn at, porky pig shovels. Peacocks baa 
            ostriches owls. Grapes at yams mushrooms organic berries gobble. 
            Petting zoo bulls, Ducks in cabbage on.</p>
      </div>
    );
  }
 
export default Home;