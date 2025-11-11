import { useSelector } from "react-redux";

export const PortfolioForm = (props) => {
    const initialState = useSelector((state) => state.view);
    const { firstName = '', middleName = '', lastName = '',tagLine='', isShowMyWork } = initialState;
    const {
        action = () => { },
    } = props
    console.log('isShowMyWork', isShowMyWork)
    return <div className="container border border-primary p-2 m-3">
        <form>
            {/* Name Section */}
            <div className="grid grid-flow-col gap-2">
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

            <div className="relative mt-2 bg-white">
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


            <div className="mt-3 place-self-start">
                <label className="inline-flex items-center cursor-pointer" >
                    <input type="checkbox" value="" checked={isShowMyWork}
                        onChange={(e) =>
                            action({
                                type: "SHOW-MY-WORK",
                                payload: e.target.checked,
                            })
                        } className="sr-only peer" />
                    <span className={`ms-3 text-sm font-medium ${isShowMyWork ? 'text-gray-900' :'text-gray-400'} dark:text-gray-300`}>Show My Work</span>
                    <div className="relative w-11 h-6 ml-2 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                </label>
            </div>


            <button type="submit" onClick={() => action({ type: 'FORM-EDIT', payload: 'design' })}
                className="text-purple-700 max-w-fit mt-2 cursor-pointer hover:text-white border border-purple-700
         hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium 
         rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400
          dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
                Generate PortFolio</button>
        </form>
    </div>
}
