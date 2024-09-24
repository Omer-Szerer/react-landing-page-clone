import './index.css';

export default function App() {
  return (
    <>
      <div className="section-1">
        <div className="header">
          <div className="header-left">
            <a href="https://inflatable.wannathis.one/">
              <div className="text-INFLATABLE">Inflatable</div>
            </a>
            <div className="by">by</div>
            <a
              href="https://wannathis.one/"
              aria-label="wannathis"
              className="link to wannathis website"
            >
              <img
                src="https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/ic-logo.svg"
                alt="wannathis logo"
                className="wannathis-logo"
              />
            </a>
          </div>
          <a href="#download" className="btn-header">
            <div className="btn-text desktop">
              Download, for Figma and Blender
            </div>
            {/* <div className="btn-text mobile">Download</div> */}
          </a>
        </div>
        <div className="hero">
          <div className="hero-img">
            <img
              className="hero-1-left"
              src="https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/hero-1.png"
              alt="yellow inflatable abstract 3d illustration"
            />
            <img
              className="hero-2-right"
              src="https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/hero-3.png"
              alt="silver inflatable abstract 3d illustration"
            />
          </div>
          <div className="hero-text">
            <div className="hero-text-wrapper">
              <div className="caption">Stay creative with</div>
              <h1 className="h-1">
                Inflatable <br /> abstract 3d <br />
                illustrations
              </h1>
            </div>
          </div>
          <div className="hero-img-2">
            <img
              className="hero-3-center"
              src="https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/hero-2.png"
              alt="purple inflatable abstract 3d illustration"
            />
            <img
              className="hero-4-center"
              src="https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/hero-4.png"
              alt="bubbles inflatable abstract 3d illustration"
            />
          </div>
        </div>
        <div className="hero-description">
          <div className="hero-description-wrapper">
            <div className="hero-description-left">
              <h4>Playful & captivating</h4>
            </div>
            <div className="hero-description-center">
              <img
                src="https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/star.png"
                alt="star"
              />
            </div>
            <div className="hero-description-right">
              <p>
                Add sense of playfulness into your projects that's perfect for
                capturing attention and creating memorable experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-2">
        <div />
      </div>
    </>
  );
}
