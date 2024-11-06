import { ChangeEvent, InputHTMLAttributes, useState } from "react";

export default function OnOffBtn({attributes, alt}: {alt?: boolean; attributes?: InputHTMLAttributes<HTMLInputElement>}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('e', e)
    setIsChecked(e.target.checked);
  };
  
  return (
    <div className={alt ? isChecked ? "btn-alt btn-selected-alt" : "btn-alt" : isChecked ? "btn btn-selected" : "btn"}>
      <input id="OnOffBtn"
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        {...attributes}
        // style={{visibility: 'hidden'}}
      />
      <span>{isChecked ? 'On' : 'Off'}</span>
    </div>
  )
}
