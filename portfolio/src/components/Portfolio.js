import React from 'react';

const Portfolio = () => {
  return (
    <section className="section" id="work">
      <section className="section-center">
        <div className="section-title">
          <h2>Work</h2>
        </div>
        <div className="section-article">
          <a href="https://moorgal.github.io/bc1_RefactorTheCode/" target="_blank" rel="noreferrer" className="work work1 work-top">
            <div>
              <div className="work-container">
                <div className="work-title-big">
                  <h3>Refactor Code</h3>
                  <p>HTML/CSS</p>
                </div>
              </div>
            </div>
          </a>

          <a href="https://moorgal.github.io/bc2_PortfolioHtmlCss/" target="_blank" rel="noreferrer" className="work work2">
            <div>
              <div className="work-container">
                <div className="work-title-small">
                  <h4>Portfolio Site</h4>
                  <p>HTML/CSS</p>
                </div>
              </div>
            </div>
          </a>

          <a href="https://moorgal.github.io/bc3_PortfolioBootstrap/" target="_blank" rel="noreferrer" className="work work3">
            <div>
              <div className="work-container">
                <div className="work-title-small">
                  <h4>Bootstrap Portfolio</h4>
                  <p>HTML/CSS</p>
                </div>
              </div>
            </div>
          </a>

          <div className="work work4">
            <div className="work-container">
              <div className="work-title-small">
                <h4>Pastel Puzzles</h4>
                <p>MERN Stack</p>
              </div>
            </div>
          </div>

          <div className="work work5">
            <div className="work-container">
              <div className="work-title-small">
                <h4>Run Buddy</h4>
                <p>HTML/CSS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Portfolio;
