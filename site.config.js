import CollectionIcon from "./components/icons/collection";
import TimerIcon from "./components/icons/timer";
import QuestionIcon from "./components/icons/question";
import DesktopIcon from "./components/icons/desktop";
import BriefcaseIcon from "./components/icons/briefcase";

const site = {
  tabs: [
    { title: "Top", href: "/", icon: <CollectionIcon /> },
    { title: "New", href: "/new", icon: <TimerIcon /> },
    { title: "Ask", href: "/ask", icon: <QuestionIcon /> },
    { title: "Show", href: "/show", icon: <DesktopIcon /> },
    { title: "Job", href: "/job", icon: <BriefcaseIcon /> },
  ],
};

export default site;
