import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { Navbar } from "./Navbar";
import { ProjectSection } from "./ProjectSection";
import { SkillsSection } from "./SkillsSection";
import { StartBackGround } from "./StartBackGround";
import { ThemeToggle } from "./ThemeToggle";

const BuildPortFolio = (props) => {
    const {
        action = ()=>{}
    } = props;
    return (<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme toggle */}
        <ThemeToggle />

        {/* BackGround Effects */}
        <StartBackGround />

        {/* Nav bar */}
        <Navbar 
        action={action}
        />

        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
        </main>

        {/* Simple Footer */}
        <Footer />
    </div>)
}

export default BuildPortFolio