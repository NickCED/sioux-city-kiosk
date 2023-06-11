import { useState, useRef, useEffect } from 'react';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import './SearchBar.css';

export default function SearchBar(props) {
  const [layoutName, setLayoutName] = useState('default');
  const [input, setInput] = useState('');
  const keyboard = useRef();
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    input !== '' ? setShowDelete(true) : setShowDelete(false);
  }, [input]);

  const onKeyPress = (button) => {
    layoutName === 'shift' && setLayoutName('default');

    button === '{shift}' &&
      setLayoutName(layoutName === 'shift' ? 'default' : 'shift');
    button === '{lock}' &&
      setLayoutName(layoutName === 'caps' ? 'default' : 'caps');
  };
  const onChange = (input) => {
    setInput(input);
    if (props.onChange) props.onChange(input);
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };

  return (
    <div className='SearchBar'>
      <div className='inputCont'>
        <input
          className='SearchBarInput'
          value={input}
          placeholder={'Search'}
          onChange={onChangeInput}
        />
        {showDelete && (
          <IoCloseOutline
            className='DeleteIcon'
            onClick={() => {
              setInput('');
              keyboard.current.clearInput();
            }}
          />
        )}
        <IoSearchOutline
          className='SearchIcon'
          onClick={() => {
            if (props.onSearch) props.onSearch(input);
          }}
        />
      </div>

      <Keyboard
        keyboardRef={(r) => (keyboard.current = r)}
        onChange={onChange}
        onKeyPress={onKeyPress}
        layoutName={layoutName}
        display={{
          '{lock}': 'caps',
          '{bksp}': 'delete',
          '{enter}': 'search',
          '{shift}': 'shift',
          '{space}': 'space',
          '{tab}': 'tab',
        }}
        layout={{
          default: [
            ' 1 2 3 4 5 6 7 8 9 0 ',
            '{tab} q w e r t y u i o p {bksp}',
            "{lock} a s d f g h j k l ' {enter}",
            '{shift} z x c v b n m {shift}',
            '{space}',
          ],
          shift: [
            ' 1 2 3 4 5 6 7 8 9 0 ',
            '{tab} Q W E R T Y U I O P {bksp}',
            "{lock} A S D F G H J K L ' {enter}",
            '{shift} Z X C V B N M {shift}',
            '{space}',
          ],
          caps: [
            ' 1 2 3 4 5 6 7 8 9 0 ',
            '{tab} Q W E R T Y U I O P {bksp}',
            "{lock} A S D F G H J K L ' {enter}",
            '{shift} Z X C V B N M {shift}',
            '{space}',
          ],
        }}
      />
    </div>
  );
}
