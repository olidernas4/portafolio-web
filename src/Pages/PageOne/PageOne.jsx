import { useEffect } from "react";
import "./PageOne.css";
import robot from '../PageOne/robot1.png'


const PageOne = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".bottom-row .item");

    items.forEach((item) => {
      item.addEventListener("click", () => {
        disableActive();
        item.classList.add("active");
      });
    });

    const disableActive = () => {
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("active");
      }
    };
  }, []);
  return (
    <>
      <div className="bg">
        <div className="oval">
          <img src={robot} />
        </div>
        <div className="shadow"></div>
      </div>

      <div className="page-one-text-container">
        <div className="main-text">
          <h1 className="text">DESARROLLADOR</h1>
          <h2 className="text">
            JUNIOR 
          </h2>
        </div>

        <span className="intro-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
          dignissimos voluptatem officiis, possimus culpa illum ipsum? Quia cum
          adipisci velit exercitationem, veritatis at accusamus, deserunt
          perferendis aliquid minima doloribus quo!
        </span>

        <span className="intro-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quos
          voluptas molestiae beatae, necessitatibus doloremque blanditiis
          perspiciatis laboriosam amet consequuntur?
        </span>

        <div className="bottom-row">
          <h5 className="item active">experience</h5>
          <h5 className="item">skill</h5>
          <h5 className="item">center</h5>
        </div>
      </div>
    </>
  );
};

export default PageOne;
