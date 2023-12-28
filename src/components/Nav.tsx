import {HiHome, HiUser,HiViewColumns,HiRectangleGroup, HiChatBubbleBottomCenterText, HiEnvelope,} from 'react-icons/hi2';
import {BiSolidPhotoAlbum} from 'react-icons/bi';
import {GrPlan} from 'react-icons/gr';
import {BsMapFill,BsNewspaper} from 'react-icons/bs';


const navData = [ 
    { name: 'home', path: '/', icon: <HiHome /> },
    { name: 'about', path: '/about', icon: <HiUser /> },
    { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
    { name: 'work', path: '/work', icon: <HiViewColumns /> },
    {name: 'photos', path: '/photos', icon: <BiSolidPhotoAlbum />},
    {name: 'plans', path: '/plans', icon: <GrPlan />},
    {name: 'neigbhourhood', path: '/hood', icon: <BsMapFill />},
    {name: 'news', path: '/news', icon: <BsNewspaper />},
    {name: 'contact', path: '/contact',icon: <HiEnvelope />, },];


const Nav = () => {

 return (
     <nav className='flex flex-col bg-blue-900 items-start xl:justify-center gap-11 fixed
      left-[0%] mt-auto xl:left-[0%] z-50 top-0 h-full xl:w-20 xl:max-w-md xl:h-screen'
      > <div className='flex flex-col h-full w-full justify-between items-center xl:justify-between gap-y-10 px-4 md:px-40 xl:px-0 
      py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-3xl'> {navData.map((link, index) => {
        return (<a 
        className={`hover:bg-blue-400  lg:p-5 border-white relative flex 
        items-center group hover:text-accent transition-all duration-300`}
        href={''} key={index}>
        <div 
        className='absolute pr-14 left-[4.4rem] top-0 border-2 
        border-red-900  hidden xl:group-hover:flex hover:duration-500 hover:ease-in-out group 
        hover:transition-all '>
            <div className='bg-blue-400 relative flex group-hover:transition-all 
            group-hover:ease-in-out group-hover:duration-500 h-[10px] text-primary items-center p-[35px] '>
                 <div className='text-[20px] text-white  leading-none capitalize'> {link.name} </div>
                 <div 
                 className='border-solid border-l-white border-l-8 border-y-transparent 
                 border-y-[6px] border-r-0 absolute -right-2'>

                 </div>
                 </div>
                 </div>
                 <div>{link.icon}</div></a>) })}</div></nav>)};
export default Nav;