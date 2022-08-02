/* React libraries */
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function SideBar() {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleShowSidebar = ():void => {
        setShowSidebar(!showSidebar);
    };

    return (
        <>
            <aside className={showSidebar ? "w-64 h-screen fixed top-0 lg:translate-x-0 px-3 z-50" : "w-64 h-screen fixed top-0 -translate-x-64 lg:translate-x-0 px-3 z-50"} aria-label="Sidebar">
                <button className="left-64 m-6 absolute bg-slate-50 rounded-full p-2 lg:hidden" type="button" onClick={() => handleShowSidebar()}>{showSidebar ? "←" : "→" }</button>

                <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 h-screen pt-10 flex flex-col scrollable">
                    <Link to="/" className="flex items-center pl-2.5 mb-5">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">React Library</span>
                    </Link>
                    <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 ">
                        <h4 className="font-medium">General</h4>
                        <li>
                            <Link to="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="ml-3">Info</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 ">
                        <h4 className="font-medium" >Atoms</h4>
                        <li>
                            <Link to="/atoms/badges" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Badges</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/atoms/buttons" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Buttons</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/atoms/icons" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Icons</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/atoms/inputs" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Inputs</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/atoms/tags" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Tags</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/atoms/tooltips" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Tooltips</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="py-4 mt-4 space-y-2 border-t border-gray-200 ">
                        <h4 className="font-medium">Molecules</h4>
                        <li>
                            <Link to="/molecules/blockquotes" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="ml-3">Blockquotes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/molecules/breadcrumbs" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Breadcrumbs</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/molecules/cards" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Cards</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/molecules/collapsibles" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Collapsibles</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/molecules/dropdowns" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Dropdowns</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/molecules/loaders" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Loaders</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/molecules/modals" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Modals</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/molecules/notifications" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Notifications</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/molecules/paginations" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Paginations</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/molecules/pills" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Pills</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/molecules/searchbars" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Search Bars</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/molecules/tabs" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Tabs</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/molecules/uploaders" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Uploaders</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="py-4 my-4 space-y-2 border-y border-gray-200 ">
                        <h4 className="font-medium">Organisms</h4>
                        <li>
                            <Link to="/organisms/carousels" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Carousels</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/organisms/forms" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="ml-3">Forms</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/organisms/grids" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Grids</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/organisms/navbars" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Navbars</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/organisms/offcanvas" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">OffCanvas</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/organisms/progressbars" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Progress Bars</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/organisms/sidebars" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Sidebars</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/organisms/tables" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Tables</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/organisms/widgets" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">Widgets</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="py-4 my-4 space-y-2 border-y border-gray-200 ">
                        <h4 className="font-medium">Templates</h4>
                        <li>
                            <Link to="/templates/texteditor" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                                <span className="flex-1 ml-3 whitespace-nowrap">TextEditor</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}
