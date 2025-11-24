import { useState } from "react"
import { classNameFunction } from "../lib/Utils";
import { useSelector } from "react-redux";
export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
     const initialState = useSelector((state) => state.view);
    const { skills = [] } = initialState;
    const category = ['all',...skills?.map(i=> i?.category)] || [];

    const filteredKills = activeCategory === "all" ? skills : skills.filter(skill => skill.category.toLowerCase() === activeCategory.toLowerCase());
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My <span className="text-primary">Skills</span></h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {category.map((cat, key) => (
                    <button key={key}
                        className={
                            classNameFunction("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )
                        }
                        onClick={() => setActiveCategory(cat)}>
                        {cat}
                    </button>))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredKills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadw-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill?.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                style={{
                                    width: `${skill?.level*10}%`
                                }}
                            />
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill?.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}