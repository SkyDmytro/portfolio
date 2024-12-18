import githubIcon from '../assets/githubIcon.svg';
import linkedInIcon from '../assets/linkedInIcon.svg';
import { gitHubLink, linkedInLink } from '../helpers/constants';

export const SocialsMainPage = () => {
  return (
    <div className="absolute h-full flex flex-col justify-center z-10 left-2">
      <a href={gitHubLink} target="_blank" className="mb-3" rel="noreferrer">
        <img src={githubIcon} alt="GitHub icon" className="h-10 w-10" />
      </a>
      <a href={linkedInLink} target="_blank" className="mt-3" rel="noreferrer">
        <img src={linkedInIcon} alt="LinkedIn icon" className="h-10 w-10" />
      </a>
    </div>
  );
};
