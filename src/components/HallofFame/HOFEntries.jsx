import { Draggable } from 'gsap/all';
import { InertiaPlugin } from 'gsap/all';
import SearchBar from '../search/SearchBar';
import './HOFEntries.css';

export default function HOFEntries(props) {
  return (
    <div className='HOFEntries'>
      <SearchBar />
    </div>
  );
}
