import { Trash } from "lucide-react";
import { useSelector } from "react-redux";

export const PortfolioForm = (props) => {
    const initialState = useSelector((state) => state.view);
    const { firstName = '', middleName = '', lastName = '', tagLine = '', isShowMyWork, aboutMeSection = '', resume, skills = [], projectDetails = [] } = initialState;
    const {
        action = () => { },
    } = props
    console.log('projectDetails', projectDetails)
    return <div className="container border border-primary p-2 m-3">
        <form>
            {/* Name Section */}
            <div className="grid grid-flow-col gap-2 mt-1">
                <div className="relative bg-white">
                    <input type="text" id="First Name"
                        defaultValue={firstName}
                        onChange={(e) => action({ type: 'FIRST-NAME-CHANGE', payload: e.target.value })}
                        className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="first name"
                        className="absolute bg-transparent text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10
                         origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                         peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 
                         rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto bg-white">
                        First Name</label>
                </div>
                <div className="relative bg-white">
                    <input type="text" id="middle name"
                        defaultValue={middleName}
                        onChange={(e) => action({ type: 'MIDDLE-NAME-CHANGE', payload: e.target.value })}
                        className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="middle name"
                        className="absolute bg-transparent text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 
                        origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                         peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 
                         rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto bg-white">
                        Middle Name</label>
                </div>
                <div className="relative bg-white">
                    <input type="text" id="last name"
                        defaultValue={lastName}
                        onChange={(e) => action({ type: 'LAST-NAME-CHANGE', payload: e.target.value })}
                        className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="last name"
                        className="absolute bg-transparent text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 
                        origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                         peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1
                          rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto bg-white">
                        Last Name</label>
                </div>
            </div>

            {/* A Brief Explaination */}

            <div className="relative mt-3 bg-white">
                <textarea
                    defaultValue={tagLine}
                    onChange={(e) => action({ type: 'ABOUT-YOU-CHANGE', payload: e.target.value })}
                    className="block px-2.5 resize-none pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label for="tag line"
                    className="absolute  resize-none bg-transparent text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10
                         origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                         peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 
                         rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto bg-white">
                    Tag Line</label>
            </div>

            {/* About me  Section */}
            <div className="relative bg-white  mt-3 w-fit sm:w-[24rem] md:w-[28rem]">
                <input type="text" id="designation"
                    name="designation"
                    defaultValue={aboutMeSection?.designation}
                    onChange={(e) => action({ type: 'ADD-DESIGNATION', payload: e.target.value, forValue: e.target.name })}
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label for="designation"
                    className="absolute bg-transparent text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10
                         origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                         peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 
                         rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto bg-white">
                    Designation</label>
            </div>

            <div className="relative bg-white mt-3">
                <textarea
                    defaultValue={aboutMeSection?.experienceAndIntrest}
                    name="experienceAndIntrest"
                    onChange={(e) => action({ type: 'EXPERIENCE-INTREST', payload: e.target.value, forValue: e.target.name })}
                    className="block px-2.5 resize-none pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label for="experienceAndIntrest"
                    className="absolute bg-transparent text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 
                        origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                         peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1
                          rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto bg-white">
                    Experience & Interests</label>
            </div>

            {/* Expertise interest management */}
            <div className="grid grid-flow-col gap-2 mt-3">
                <div>
                    <div className="relative bg-white">
                        <input type="text" id="expertise"
                            name="expertise"
                            defaultValue={aboutMeSection?.expertise}
                            onChange={(e) => action({ type: 'EXPERTISE-IN', payload: e.target.value, forValue: e.target.name })}
                            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="expertise"
                            className="absolute bg-transparent text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10
                         origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                         peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 
                         rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto bg-white">
                            Expertise In</label>
                    </div>
                    <div className="relative bg-white mt-2">
                        <textarea
                            defaultValue={aboutMeSection?.expertiseAndInterest}
                            name="expertiseAndInterest"
                            onChange={(e) => action({ type: 'EXPERTISE-AND-INTREST', payload: e.target.value, forValue: e.target.name })}
                            className="block px-2.5 resize-none pb-1.5 pt-3 w-full h-25 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="expertiseAndInterest"
                            className="absolute bg-transparent text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 
                        origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                         peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1
                          rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto bg-white">
                            Explain Your Expertise</label>
                    </div>
                </div>

                <div>
                    <div className="relative bg-white">
                        <input type="text" id="designation"
                            name="designation"
                            defaultValue={aboutMeSection?.designation}
                            readOnly={true}
                            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="Managing"
                            className="absolute bg-transparent text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 
                        origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                         peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 
                         rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto bg-white">
                            Designation</label>
                    </div>
                    <div className="relative bg-white mt-2">
                        <textarea
                            defaultValue={aboutMeSection?.aboutYourRole}
                            name="aboutYourRole"
                            onChange={(e) => action({ type: 'ABOUT-YOUR-ROLE', payload: e.target.value, forValue: e.target.name })}
                            className="block px-2.5 resize-none pb-1.5 pt-3 w-full h-25 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="aboutYourRole"
                            className="absolute bg-transparent text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 
                        origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                         peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1
                          rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto bg-white">
                            About Your Role</label>
                    </div>
                </div>

                <div>
                    <div className="relative bg-white">
                        <input type="text" id="management"
                            defaultValue={'Managing'}
                            readOnly={true}
                            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="Managing"
                            className="absolute bg-transparent text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 
                        origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                         peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1
                          rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto bg-white">
                            Management</label>
                    </div>
                    <div className="relative bg-white mt-2">
                        <textarea
                            defaultValue={aboutMeSection?.managementExperience}
                            name="managementExperience"
                            onChange={(e) => action({ type: 'MANAGEMENT-EXPERIENCE', payload: e.target.value, forValue: e.target.name })}
                            className="block px-2.5 resize-none pb-1.5 pt-3 w-full h-25 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="managementExperience"
                            className="absolute bg-transparent text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 
                        origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                         peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1
                          rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto bg-white">
                            Describe Your Management Experience</label>
                    </div>
                </div>
            </div>

            {/* Resume upload */}
            <div className="mt-3">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                    Upload Resume
                </label>

                <div className="flex flex-col items-center justify-center w-full ">
                    <label
                        className="flex flex-col items-center justify-center w-full h-24 
                 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer 
                 bg-gray-50 hover:bg-gray-100"
                    >
                        <div className="flex flex-col items-center justify-center pt-4 pb-4 pointer-events-none">
                            <svg aria-hidden="true" className="w-8 h-8 mb-2 text-gray-400" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M7 16V4a1 1 0 011-1h8a1 1 0 011 1v12m-4 5l-3-3m0 0l3-3m-3 3h12" />
                            </svg>

                            <p className="mb-1 text-sm text-gray-500">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">PDF only (Max 2MB)</p>
                        </div>

                        <input onChange={(e) => action({ type: 'ATTATCH-RESUME', payload: e.target.files })} type="file" accept="application/pdf" className="hidden" />
                    </label>

                    <input id="pdfInput" type="file" accept="application/pdf" className="hidden" />
                </div>
                {resume?.name && (
                    <p className="mt-2 text-sm text-green-600">
                        Selected: {resume.name}
                    </p>
                )}
            </div>

            {/* Skills */}
            <div className="flex mt-3 w-full">
                <div className="mt-6 w-full">
                    <p className="text-sm text-left pl-4 font-medium text-gray-700 mb-2">Skill's</p>

                    <div className="space-y-4">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                            >
                                <div className="mb-2 grid grid-cols-2 items-right w-full">
                                    <span className="justify-self-end text-xs font-semibold text-gray-500 mb-3">
                                        Skill {index + 1}
                                    </span>
                                    <button
                                        type="button"
                                        className="cursor-pointer justify-self-end top-2 right-2 text-red-500 hover:text-red-700"
                                        onClick={() => action({ type: "DELETE-SKILL", index })}
                                    >
                                        <Trash size={18} strokeWidth={2} />
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">

                                    {/* Skill Name */}
                                    <div className="flex flex-col">
                                        <label className="text-xs text-gray-500 mb-1">Skill Name</label>
                                        <input
                                            type="text"
                                            value={skill.name}
                                            name={'name'}
                                            onChange={e =>
                                                action({ type: 'ADD-EDIT-SKILLS', payload: e.target.value, forValue: e.target.name, index })
                                            }
                                            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
                                            placeholder="e.g. React,JavaScript"
                                        />
                                    </div>

                                    {/* Level (NUMBER) */}
                                    <div className="flex flex-col">
                                        <label className="text-xs text-gray-500 mb-1">Level (1-10)</label>
                                        <input
                                            type="number"
                                            min="1"
                                            max="10"
                                            name={'level'}
                                            value={skill.level}
                                            onChange={e =>
                                                action({ type: 'ADD-EDIT-SKILLS', payload: e.target.value, forValue: e.target.name, index })
                                            }
                                            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
                                            placeholder="5"
                                        />
                                    </div>

                                    {/* Category */}
                                    <div className="flex flex-col">
                                        <label className="text-xs text-gray-500 mb-1">Category</label>
                                        <input
                                            type="text"
                                            value={skill.category}
                                            name={'category'}
                                            onChange={e => {
                                                const value = e.target.value.trim();
                                                const finalValue = value === "" ? "all" : value;
                                                action({ type: 'ADD-EDIT-SKILLS', payload: finalValue, forValue: e.target.name, index })
                                            }}
                                            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
                                            placeholder="Frontend, Backend"
                                        />
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Add Skill Button */}
                    <div className="flex justify-start">
                        <button
                            type="button"
                            onClick={() => action({ type: 'ADD-SKILLS', payload: '' })}
                            className="mt-3 cursor-pointer inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
                        >
                            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary">
                                +
                            </span>
                            <span>Add another skill</span>
                        </button>
                    </div>

                </div>
            </div>

            <div className="mt-3 text-left">
                <label className="inline-flex items-center cursor-pointer" >
                    <input type="checkbox" value="" checked={isShowMyWork}
                        onChange={(e) =>
                            action({
                                type: "SHOW-MY-WORK",
                                payload: e.target.checked,
                            })
                        } className="sr-only peer" />
                    <span className={`ms-3 text-sm font-medium ${isShowMyWork ? 'text-gray-900' : 'text-gray-400'} dark:text-gray-300`}>Show My Work</span>
                    <div className="relative w-11 h-6 ml-2 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                </label>
            </div>

            {/* Project */}
            {isShowMyWork && <div className="flex mt-3 w-full">
                <div className="mt-6 w-full">
                    <p className="text-sm text-left pl-4 font-medium text-gray-700 mb-2">Project's</p>

                    <div className="space-y-4">
                        {projectDetails.map((proj, index) => (
                            <div
                                key={index}
                                className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                            >
                                <div className="mb-2 grid grid-cols-2 items-right w-full">
                                    <span className="justify-self-end text-xs font-semibold text-gray-500 mb-3">
                                        PROJECT {index + 1}
                                    </span>
                                    <button
                                        type="button"
                                        className="cursor-pointer justify-self-end top-2 right-2 text-red-500 hover:text-red-700"
                                        onClick={() => action({ type: 'DELETE-PROJECT', index })}
                                    >
                                        <Trash size={18} strokeWidth={2} />
                                    </button>
                                </div>
                                <div>
                                    <div className="relative bg-white w-full">
                                        <input type="text" id="project-name"
                                            name="projectName"
                                            value={proj?.projectName}
                                            onChange={(e) => action({ type: 'ADD-EDIT-PROJECT', payload: e.target.value, forValue: e.target.name, index })}
                                            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                        <label for="project-name"
                                            className="absolute bg-transparent text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 
                                                        origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                                                        peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 
                                                        rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto bg-white">
                                            Project Name</label>
                                    </div>
                                    <div className="grid grid-flow-col gap-2 mt-2">
                                        <div className="relative bg-white mt-2">
                                            <textarea
                                                value={proj?.tagLine}
                                                name="tagline"
                                                onChange={(e) => action({ type: 'ADD-EDIT-PROJECT', payload: e.target.value, forValue: e.target.name, index })}
                                                className="block px-2.5 resize-none pb-1.5 pt-3 w-full h-25 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                            <label for="tagline"
                                                className="absolute bg-transparent text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 
                                                            origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                                                            peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1
                                                            rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto bg-white">
                                                Tagline</label>
                                        </div>
                                        <div className="relative bg-white mt-2">
                                            <textarea
                                                defaultValue={proj?.description}
                                                name="description"
                                                onChange={(e) => action({ type: 'ADD-EDIT-PROJECT', payload: e.target.value, forValue: e.target.name, index })}
                                                className="block px-2.5 resize-none pb-1.5 pt-3 w-full h-25 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                            <label for="description"
                                                className="absolute bg-transparent text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 
                                                            origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                                                            peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1
                                                            rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto bg-white">
                                                Explain Your Project</label>
                                        </div>
                                        <div className="relative bg-white mt-2">
                                            <textarea
                                                defaultValue={proj?.technology}
                                                name="technology"
                                                onChange={(e) => action({ type: 'ADD-EDIT-PROJECT', payload: e.target.value, forValue: e.target.name, index })}
                                                className="block px-2.5 resize-none pb-1.5 pt-3 w-full h-25 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                            <label
                                                htmlFor="technology"
                                                className="absolute bg-transparent text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 
                                                            top-1 z-10 origin-[0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
                                                            peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
                                                            peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 
                                                            rtl:peer-focus:left-auto bg-white" >
                                                Technology / Skills (separate by comma)
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                    </div>   
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Add Skill Button */}
                    <div className="flex justify-start">
                        <button
                            type="button"
                            onClick={() => action({ type: 'ADD-PROJECTS', payload: '' })}
                            className="mt-3 cursor-pointer inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
                        >
                            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary">
                                +
                            </span>
                            <span>Add another Project</span>
                        </button>
                    </div>

                </div>
            </div>}

            <div className="flex justify-center">
                <button type="reset"
                    onClick={() => action({ type: 'RESET-FORM', payload: 'clear' })}
                    className="text-red-700 max-w-fit mt-2 cursor-pointer hover:text-white border border-red-700
                            hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium 
                            rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-400 dark:text-red-400
                            dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-red-900">
                    Reset Form</button>
                <button type="submit" onClick={() => action({ type: 'FORM-EDIT', payload: 'design' })}
                    className="text-purple-700 max-w-fit mt-2 cursor-pointer hover:text-white border border-purple-700
                                hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium 
                                rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400
                                dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
                    Generate PortFolio</button>
            </div>
        </form>
    </div>
}
