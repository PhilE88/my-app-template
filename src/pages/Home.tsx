import GlassSheet from "../components/GlassSheet";

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    }}>
      <GlassSheet>
        <h2 style={{textAlign: 'center', color: '#FFF', textShadow: '2px 2px #000'}}>Lorem ipsum dolor</h2>
      </GlassSheet>
    </div>
  )
}
