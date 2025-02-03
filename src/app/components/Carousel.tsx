import './css/Carousel.css'

export default function Carousel() {
    return (
    <>
    <input type="radio" name="position" />
    <input type="radio" name="position" />
    <input type="radio" name="position" checked/>
    <input type="radio" name="position" />
    <input type="radio" name="position" />
    <div id="carousel">
      <div className="item">
        <img src="static/1.jpg"/>
        <h3 className="name">Sally Sharpe</h3>
        <p className="occupation">Marketing Admin</p>
        <p className="testimonial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, suscipit?</p>
      </div>
      <div className="item">
        <img src="static/2.jpg"/>
        <h3 className="name">Michael John</h3>
        <p className="occupation">Cybersecurity Engineer</p>
        <p className="testimonial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, dolore.</p>
      </div>
      <div className="item" />
        <img src="static/3.jpg" />
        <h3 className="name">Mikayla Eddie</h3>
        <p className="occupation">Software Engineer</p>
        <p className="testimonial">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, temporibus?</p>
      </div>
      <div className="item">
        <img src="static/4.jpg" />
        <h3 className="name">Eve Smith</h3>
        <p className="occupation">UI/UX Designer</p>
        <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, beatae?</p>
      </div>
      <div className="item">
        <img src="static/5.jpg" />
        <h3 className="name" >Luke Maxwell</h3>
        <p className="occupation" >System Architect</p>
        <p className="testimonial" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, tempore.</p>
    </div>

    </>
    )
}