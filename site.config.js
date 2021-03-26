import CollectionIcon from "./components/icons/collection";
import FireIcon from "./components/icons/fire";
import TimerIcon from "./components/icons/timer";
import StatsIcon from "./components/icons/stats";
import QuestionIcon from "./components/icons/question";
import DesktopIcon from "./components/icons/desktop";
import BriefcaseIcon from "./components/icons/briefcase";
import GithubIcon from "./components/icons/github";
import Link from "next/link";

const site = {
  tabs: [
    { title: "Top", href: "/", icon: <CollectionIcon /> },
    { title: "Best", href: "/best", icon: <FireIcon /> },
    { title: "New", href: "/new", icon: <TimerIcon /> },
    { title: "Ask", href: "/ask", icon: <QuestionIcon /> },
    { title: "Show", href: "/show", icon: <DesktopIcon /> },
    { title: "Job", href: "/job", icon: <BriefcaseIcon /> },
  ],
};

export default site;
