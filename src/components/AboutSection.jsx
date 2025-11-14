import { Briefcase, Code, User } from "lucide-react"
import { useDispatch, useSelector } from "react-redux";
export const AboutSection = () => {
    const initialState = useSelector((state) => state.view);
    const Dispatch = useDispatch()
    const { aboutMeSection } = initialState;
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

                    {/* <p className="text-muted-foreground">
                        I'm a passionate web developer and tech creator who loves turning ideas into engaging digital experiences.
                        My goal is to build user-focused, accessible, and visually appealing web solutions that combine creativity
                        with clean, efficient code
                    </p> */}

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>

                        <a href="/public/resume/nikhil-resume.pdf"
                            download={'nikhil-resume.pdf'}
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development </h4>
                                <p className="text-muted-foreground">
                                    I create responsive, high-performance websites using modern technologies,
                                    focusing on clean design, smooth interactions, and exceptional user experiences
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
                                <h4 className="font-semibold text-lg"> UI/UX Design </h4>
                                <p className="text-muted-foreground">
                                    I craft elegant, user-friendly designs that focus on clarity, consistency,
                                    and seamless interaction to enhance every user's digital journey
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
                                    I manage projects with clear communication, efficient planning, and timely delivery,
                                    ensuring quality results through teamwork and strategic execution
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}