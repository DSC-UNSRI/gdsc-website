export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div className="footer-item">
                    <p className="text-[#4285F4] font-bold">
                        Home
                    </p>
                    <a href="#">Lorem ipsum</a>
                    <a href="#">Lorem ipsum</a>
                    <a href="#">Lorem ipsum</a>
                    <p className="text-[#4285F4] font-bold md:mt-3">
                        About GDSC
                    </p>
                    <a href="#">What is GDSC?</a>
                    <a href="#">Vision & Mission</a>
                    <a href="#">Why GDSC?</a>
                </div>
                <div className="footer-item">
                    <p className="text-[#EA4335] font-bold">
                        Recordings
                    </p>
                    <a href="#">Most Watched</a>
                    <a href="#">Webinar</a>
                    <a href="#">Workshop</a>
                </div>
                <div className="footer-item">
                    <p className="text-[#FBBC04] font-bold">
                        Upcoming Events
                    </p>
                    <a href="#">Lorem ipsum</a>
                    <a href="#">Lorem ipsum</a>
                    <a href="#">Lorem ipsum</a>
                </div>
                <div className="footer-item">
                    <p className="text-[#0F9D58] font-bold">
                        Members
                    </p>
                    <a href="#">Core Team</a>
                    <a href="#">Front-End Development</a>
                    <a href="#">Back-End Development</a>
                    <a href="#">Mobile Development</a>
                    <a href="#">UI/UX Design</a>
                    <a href="#">Project Management</a>
                    <a href="#">Public Relation</a>
                    <a href="#">Media & Digital Branding</a>
                </div>
                <div className="footer-item justify-start items-center">
                    <img src="/gdsc-unsri-logo.png" alt="gdsc-unsri-logo" className="xl:w-28 lg:w-20 h-fit"/>
                    <div className="text-center">
                        <p className="font-medium text-lg text-gray-800">Google Developer Student Clubs</p>
                        <p className="font-light text-gray-500">Universitas Sriwijaya</p>
                    </div>
                    <a className="footer-button" href="#">
                        Contact Us
                    </a>
                    <a className="footer-button" href="#">
                        Join Our Community
                    </a>
                </div>
            </div>
        </footer>
    );
}