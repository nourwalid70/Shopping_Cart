import logo from './logo.jpeg';
const About = () => {
    console.log("here")
    return(
        
        <div className="about">
                <img className="logo" src={logo} alt="logo" />
         <p >  NaN shopping is a website providing products such as jackets, t-shirts, bags,accessories and more for affordable prices.
               <br/>The payment can be done with credit card or cash upon receiving.
            </p>
        </div>
    )

}

export default About;