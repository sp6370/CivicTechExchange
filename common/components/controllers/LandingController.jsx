// @flow

import React from "react";
import RecentProjectsSection from "../componentsBySection/Landing/RecentProjectsSection.jsx";
import LatestBlogPosts from "../componentsBySection/Landing/LatestBlogPosts.jsx";
import TestimonialCarousel from "../common/carousel/TestimonialCarousel.jsx";
import Partners from "../componentsBySection/Landing/Partners.jsx";
import cdn from "../utils/cdn";
import Button from "react-bootstrap/Button";
import url from "../utils/url";
import Section from "../enums/Section";
import ProjectChart from "../svg/homepage/chart.svg";
import GreenSplitDot from "../svg/homepage/green-split-dot.svg";
import YellowDot from "../svg/homepage/yellow-dot.svg";
import RedDot from "../svg/homepage/red-dot.svg";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Glyph, GlyphStyles, GlyphSizes, GlyphWidth } from "../utils/glyphs.js";
import UpcomingEventCard from "../componentsBySection/Landing/UpcomingEventCard.jsx";
import VideoModal from "../common/video/VideoModal.jsx";
import PlaySVG from "../svg/play-button.svg";

type State = {|
  defaultTab: string,
  showModal: boolean,
|};

export const HomepageTabs: Dictionary<string> = {
  Volunteer: "volunteer",
  CreateProject: "createproject",
  Partner: "partner",
};

const tabOptions: Dictionary<string> = {
  volunteer: "tab-volunteer",
  createproject: "tab-createproject",
  partner: "tab-partner",
};

class LandingController extends React.PureComponent<{||}, State> {
  constructor(props): void {
    super(props);
    const tabArg: string = url.argument("tab");
    this.state = {
      showModal: false,
      defaultTab:
        tabArg && tabOptions[tabArg]
          ? tabOptions[tabArg]
          : tabOptions.volunteer,
    };
  }

  onHideShowVideo(): void {
    this.setState({ showModal: false });
    // this.forceUpdate();
  }

  onClickShowVideo(event: SyntheticMouseEvent): void {
    // event.preventDefault();
    this.setState({ showModal: true });
  }

  render(): React$Node {
    return (
      <div className="LandingController-root">
        <VideoModal
          showModal={this.state.showModal}
          onClose={this.onHideShowVideo.bind(this)}
          videoUrl={window.YOUTUBE_VIDEO_URL}
          videoTitle={"DemocracyLab Overview"}
        />
        <div className="container">
          <div className="row">
            {this._renderHero()}
            {this._renderOptions()}
            {this._renderNextHackathon()}
            {this._recentProjects()}
            {this._renderTestimonials()}
            {this._renderLatestBlogPosts()}
            {this._renderCommunityPartners()}
          </div>
        </div>
      </div>
    );
  }

  _recentProjects(): React$Node {
    return (
      <div className="col-12 LandingController-recent">
        <RecentProjectsSection />
      </div>
    );
  }

  _renderHero(): React$Node {
    const heroBorder = cdn.image("dlab-hero-border.png");
    const heroBackground = cdn.image("dlab-hero-background.jpg");
    return (
      <div className="LandingController-hero col-12">
        <div className="LandingController-hero-text">
          <h1>Make Tech. Do Good.</h1>
          <p>
            We connect tech-for-good projects with skilled volunteers and
            socially responsible companies.
          </p>
        </div>
        <div
          className="LandingController-hero-video-container"
          style={{
            borderImageSource: `url(${heroBorder})`,
          }}
        >
          <div
            className="LandingController-hero-video"
            style={{
              backgroundImage: `url(${heroBackground}`,
            }}
            onClick={this.onClickShowVideo.bind(this)}
          >
            <div className="ProjectCard-play-button">
              <PlaySVG />
            </div>
          </div>
        </div>
      </div>
    );
  }

  _renderOptions(): React$Node {
    return (
      <div className="LandingController-options col-12">
        <h2 className="text-center">I'd like to...</h2>
        <Tabs
          defaultActiveKey={this.state.defaultTab}
          id="homepage-tabs"
          className="LandingController-tabs"
          justify
        >
          <Tab eventKey={tabOptions.volunteer} title="Volunteer">
            {this._volunteerSection()}
          </Tab>
          <Tab eventKey={tabOptions.createproject} title="Create a Project">
            {this._createProjectSection()}
          </Tab>
          <Tab eventKey={tabOptions.partner} title="Be a Partner">
            {this._partnerSection()}
          </Tab>
        </Tabs>
      </div>
    );
  }

  _volunteerSection(): React$Node {
    return (
      <div className="LandingController-volunteer-section LandingController-tab-section">
        <h4>Why volunteer through DemocracyLab?</h4>
        <div className="LandingController-icon-group">
          <div className="LandingController-icon">
            <i
              className={Glyph(GlyphStyles.HandHoldingHeart, GlyphWidth.Fixed)}
              aria-hidden="true"
            ></i>
            <p>Make an impact</p>
          </div>
          <div className="LandingController-icon">
            <i
              className={Glyph(GlyphStyles.CircleArrowUp, GlyphWidth.Fixed)}
              aria-hidden="true"
            ></i>
            <p>Gain Experience</p>
          </div>
          <div className="LandingController-icon">
            <i
              className={Glyph(GlyphStyles.Handshake, GlyphWidth.Fixed)}
              aria-hidden="true"
            ></i>
            <p>Build connections</p>
          </div>
        </div>
        <Button variant="primary">Volunteer Now</Button>
      </div>
    );
  }

  _createProjectSection(): React$Node {
    return (
      <React.Fragment>
        <div className="LandingController-createproject-section LandingController-tab-section">
          <h4>Why create a project on DemocracyLab?</h4>
          <div className="LandingController-icon-group">
            <div className="LandingController-icon">
              <i
                className={Glyph(GlyphStyles.ChartLine, GlyphWidth.Fixed)}
                aria-hidden="true"
              ></i>
              <p>Develop your idea</p>
            </div>
            <div className="LandingController-icon">
              <i
                className={Glyph(GlyphStyles.ReachingUp, GlyphWidth.Fixed)}
                aria-hidden="true"
              ></i>
              <p>Find passionate volunteers</p>
            </div>
            <div className="LandingController-icon">
              <i
                className={
                  Glyph(GlyphStyles.CodeBranch, GlyphWidth.Fixed) + " rotate-90"
                }
                aria-hidden="true"
              ></i>
              <p>Access global talent</p>
            </div>
          </div>
          <Button variant="primary">Create a project</Button>
        </div>
        <div className="LandingController-chart-section col-12 col-lg-10">
          <div className="lc-gridbox-parent">
          {/* <h3 class="lc-vertical-left">Organization Type</h3> */}
            <div className="lc-gridbox">
              <div className="lc-text ml-auto">For Profit</div>
              <div className="lc-big-box"><ProjectChart /></div>
              <div className="lc-text ml-auto">Non-profit</div>
              <div className="lc-spacer"></div>
              <div className="lc-text mb-auto">Public IP</div>
              <div className="lc-text mb-auto">Proprietary</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  _partnerSection(): React$Node {
    return (
      <div className="LandingController-partner-section LandingController-tab-section">
        <h4>Why become a sponsor?</h4>
        <div className="LandingController-icon-group">
          <div className="LandingController-icon">
            <i
              className={Glyph(GlyphStyles.Cubes, GlyphWidth.Fixed)}
              aria-hidden="true"
            ></i>
            <p>Make an impact</p>
          </div>
          <div className="LandingController-icon">
            <i
              className={Glyph(GlyphStyles.Shapes, GlyphWidth.Fixed)}
              aria-hidden="true"
            ></i>
            <p>Differentiate your company</p>
          </div>
          <div className="LandingController-icon">
            <i
              className={Glyph(GlyphStyles.PeopleGroup, GlyphWidth.Fixed)}
              aria-hidden="true"
            ></i>
            <p>Attract talent</p>
          </div>
        </div>
        <Button variant="primary">Become a Sponsor</Button>
        <h4>Why host a tech-for-good-hackathon?</h4>
        <div className="LandingController-icon-group">
          <div className="LandingController-icon">
            <i
              className={Glyph(GlyphStyles.Comments, GlyphWidth.Fixed)}
              aria-hidden="true"
            ></i>
            <p>Engage your team</p>
          </div>
          <div className="LandingController-icon">
            <i
              className={Glyph(GlyphStyles.CircleArrowUp, GlyphWidth.Fixed)}
              aria-hidden="true"
            ></i>
            <p>Drive performance</p>
          </div>
          <div className="LandingController-icon">
            <i
              className={Glyph(GlyphStyles.HandsHolding, GlyphWidth.Fixed)}
              aria-hidden="true"
            ></i>
            <p>Give back to your community</p>
          </div>
        </div>
        <Button variant="primary">Host a Hackathon</Button>
      </div>
    );
  }

  _renderNextHackathon(): React$Node {
    // this may be an empty div if there is no upcoming event; that's ok
    return (
      <div className="LandingController-next-hackathon col-12 col-lg-11 ml-lg-auto mr-lg-auto">
        <UpcomingEventCard />
      </div>
    );
  }
  _renderTestimonials(): React$Node {
    return (
      <div className="LandingController-testimonial-container carousel-testimonial-root col-12">
        <h2 className="text-center">
          What people are saying about DemocracyLab
        </h2>
        <TestimonialCarousel interval={15000} />
      </div>
    );
  }

  _renderLatestBlogPosts(): React$Node {
    return (
      <div className="LandingController-latestblogposts col-12">
        <h2 className="text-center">Blog</h2>
        <LatestBlogPosts />
      </div>
    );
  }

  _renderCommunityPartners() {
    const partnerLogos = Partners.map(i => (
      <div key={i.name} className="LandingController-partnersinaction-logo">
        <a href={i.link}>
          <img src={i.logo} alt={i.name} />
        </a>
      </div>
    ));

    return (
      <div className="LandingController-partnersinaction col-12">
        <h2 className="text-center">Our Community Partners</h2>
        <div className="LandingController-partnersinaction-container">
          {partnerLogos}
        </div>
      </div>
    );
  }
}
export default LandingController;
