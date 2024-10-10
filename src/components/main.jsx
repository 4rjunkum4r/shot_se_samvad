import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/images/main.jpg"
            alt="Card"
            height={1024}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">Hello camera enthusiast </h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus culpa, reiciendis aut nemo rerum possimus vero similique, voluptate assumenda facilis maiores optio laudantium delectus asperiores, amet voluptates fuga quod numquam!
                Ipsam, esse? Aut facilis qui aliquid cumque nisi, cupiditate ratione, natus ex iste fugit nostrum at itaque neque dolor eveniet, quod reiciendis animi expedita repellendus doloribus asperiores doloremque eum totam?
              </p>
              <h5 className="card-title fs-1 text fw-lighter">What we do? </h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid et porro ipsum nostrum corporis doloremque adipisci odio non enim tempore eaque, vitae earum cupiditate id odit nisi quis dignissimos voluptatum?
              Minus saepe impedit suscipit accusamus labore quaerat illo explicabo fugiat laboriosam itaque maxime omnis porro molestiae nemo facere aliquam voluptate corrupti quis, sunt voluptatum necessitatibus? Explicabo inventore similique dolore magni!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
