import DevToImage from "../svgs/DevToImage";
import FacebookImage from "../svgs/FacebookImage";
import GitHubImage from "../svgs/GitHubImage";
import GitlabImage from "../svgs/GitlabImage";
import LinkedInImage from "../svgs/LinkedInImage";
import TwitchImage from "../svgs/TwitchImage";
import TwitterImage from "../svgs/TwitterImage";
import YoutubeImage from "../svgs/YoutubeImage";

// export const BASE_API_URL = 'http://localhost:3030/api';
export const BASE_API_URL = "/api";
export const GREY_COLOR = "#737373";
export const PURPLE_COLOR = "#633CFF";

export const options = [
  {
    value: "GitHub",
    label: (
      <div className="dropdown-item">
        <GitHubImage fill="#000" /> GitHub
      </div>
    ),
  },
  {
    value: "LinkedIn",
    label: (
      <div className="dropdown-item">
        <LinkedInImage fill="#000" /> LinkedIn
      </div>
    ),
  },
  {
    value: "YouTube",
    label: (
      <div className="dropdown-item">
        <YoutubeImage fill="#000" /> Youtube
      </div>
    ),
  },
  {
    value: "Twitter",
    label: (
      <div className="dropdown-item">
        <TwitterImage fill="#000" /> Twitter
      </div>
    ),
  },
  {
    value: "Facebook",
    label: (
      <div className="dropdown-item">
        <FacebookImage fill="#000" /> Facebook
      </div>
    ),
  },
  {
    value: "twitch",
    label: (
      <div className="dropdown-item">
        <TwitchImage fill="#000" /> Twitch
      </div>
    ),
  },
  {
    value: "Dev.to",
    label: (
      <div className="dropdown-item">
        <DevToImage fill="#000" /> Dev.to
      </div>
    ),
  },
  {
    value: "GitLab",
    label: (
      <div className="dropdown-item">
        <GitlabImage fill="#000" /> GitLab
      </div>
    ),
  },
];

export const previewItems = {
  github: <GitHubImage />,
  linkedin: <LinkedInImage />,
  youtube: <YoutubeImage />,
  twitter: <TwitterImage />,
  facebook: <FacebookImage />,
  twitch: <TwitchImage />,
  "dev.to": <DevToImage />,
  gitlab: <GitlabImage />,
};

export const previewLinkColors = {
  github: "bg-black",
  purple: "bg-purple",
  youtube: "bg-youtube",
  twitter: "bg-twitter",
  linkedin: "bg-linkedin",
  facebook: "bg-facebook",
  twitch: "bg-twitch",
  devto: "bg-devto",
  gitlab: "bg-gitlab",
  hashnode: "bg-hashnode",
};
