import OnOffBtn from "../components/OnOffBtn";

export default function Settings() {
  return (
    <div>
      <div>
        <span style={{
          fontSize: 20,
          fontWeight: 600,
          margin: '2px 6px'
        }}>
          Custom Button
        </span>
        <OnOffBtn />
      </div>
      
      <div style={{display: 'flex', alignItems: 'center'}}>
        <span style={{
          fontSize: 20,
          fontWeight: 600,
          margin: '2px 6px'
        }}>
          Alternate Custom Button
        </span>
        <OnOffBtn alt />
      </div>
    </div>
  )
}
