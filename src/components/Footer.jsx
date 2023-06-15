import { email, facebook, instagram, linkedin, twitter } from '../assets'

const Footer = () => (
    <footer>
        <section className="Footer">
            <div className="FooterBox">
                <p className="MyName">Samuel Oldmark</p>
                <p className="Email">samuel@oldmark.se</p>
                <p className="Number">(+46) 738048300</p>
                <div className='SocialMedias'>
                    <img src={email} alt="email" className='EmailIcon' />
                    <img src={facebook} alt="facebook" className='Facebook' />
                    <img src={instagram} alt="instagram" className='Instagram' />
                    <img src={linkedin} alt="linkedin" className='Linkedin' />
                    <img src={twitter} alt="twitter" className='Twitter' />
                </div>
            </div>
        </section>
    </footer>
);

export default Footer