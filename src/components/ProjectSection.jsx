import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: 'PortFolio website',
        description: 'A personal portfolio website to showcase my projects and skills.',
        imageUrl: '/projects/portfolio.png',
        tags: ['React', 'Tailwind CSS'],
        gitHubUrl: 'https://github.com/nikhilmacpp-cmyk/react-portfolio'
    }
]

export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl mb-4 text-center">{" "}Feature <span className="text-primary">Project</span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">
                Here are some of my featured projects, where creativity meets clean code to deliver
                engaging and user-focused digital experiences
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.imageUrl} alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, key) => (
                                    <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    {/* <a href="">
                                            <ExternalLink/>
                                        </a> */}
                                    <a href={project.gitHubUrl} target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a href="https://github.com/nikhilmacpp-cmyk" 
                target="_blank"
                className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Check My GitHub <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
}