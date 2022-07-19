export default function ToggleShow(props) {
  return <button onClick={() => props.ToggleBtnText()}>{props.view}</button>;
}
