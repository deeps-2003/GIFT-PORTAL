import '../assets/css/footer.css'

const Footer = () => {
  return (
    <>
<footer className="footer-distributed">

			<div className="footer-left">

				<h3 id="fcompany">Gift Cart</h3>

				<p className="footer-links">
				Unwrap the Extraordinary
				</p>

				<p className="footer-company-name">Gift Cart © 2024</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>123,ABC street</span>Thambaram,Chennai</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+91 9345615766</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">giftcart@company.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
                    <br></br>
                    Crafting Memories, Delighting Moments - Your Personalized Gift Experience Begins Here
				</p>



			</div>

		</footer></>
  );
      }


export default Footer;