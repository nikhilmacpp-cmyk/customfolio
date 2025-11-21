import { Briefcase, Code, User } from "lucide-react"
import { useDispatch, useSelector } from "react-redux";
export const AboutSection = () => {
    const initialState = useSelector((state) => state.view);
    const Dispatch = useDispatch()
    const { aboutMeSection ,resume} = initialState;
    const resumeURL = resume?.name ?  URL.createObjectURL(resume) : null;
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="size-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Passionate {aboutMeSection?.designation}</h3>
                    <p className="text-muted-foreground">
                        {aboutMeSection?.experienceAndIntrest}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>

                       {resume?.name && <a href={resumeURL}
                            download={resume?.name}
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> {aboutMeSection?.expertise} </h4>
                                <p className="text-muted-foreground">
                                    {aboutMeSection?.expertiseAndInterest}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> {aboutMeSection?.designation} </h4>
                                <p className="text-muted-foreground">
                                    {aboutMeSection?.aboutYourRole}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Project Management</h4>
                                <p className="text-muted-foreground">
                                    {aboutMeSection?.managementExperience}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}