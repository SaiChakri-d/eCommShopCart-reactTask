import React from "react";
import Card from "./Card";
import Data from "./Data";

function Section(props) {
  return (
    <>
      {/* <!-- Section--> */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {Data.map((Item) => (
              <Card
                Name={Item.Name}
                Price={Item.Price}
                Image={Item.Image}
                addItem={props.addItem}
                removeItem={props.removeItem}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;
