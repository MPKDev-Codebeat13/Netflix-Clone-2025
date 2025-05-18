import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SearchIcon from '@mui/icons-material/Search';
import netflix from '../../assets/images/netflix.png';
import './Header.css';

function Header() {
  return (
    <>
      <div className=' Header_Container'>
        <div className='Header_wrapper'>
          {/* <div className='col' > logo</div> */}
          <div className='Left_side'>
            <img className='Header_Logo' src={netflix} alt='Netflix logo' />
            <ul className='Header_links text-decoration-none '>
              <li>
                <a href=''>Home</a>
              </li>
              <li>
                <a href=''>tv show</a>
              </li>
              <li>
                <a href=''>Movie</a>
              </li>
              <li>
                <a href=''> New & popular</a>
              </li>
              <li>
                <a href=''>My lists</a>
              </li>
              <li>
                <a href=''>Browse by Language</a>
              </li>
            </ul>
          </div>
          <div className='Right_side'>
            <div className='Header_Icons'>
              <SearchIcon />
            </div>
            <div className='Header_Icons'>
              <CircleNotificationsIcon />
            </div>
            <div className='Header_Icons'>
              <AccountBoxIcon />
            </div>
            <div className='Header_Icons'>
              <ArrowDropDownIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
