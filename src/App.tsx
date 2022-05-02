import { Grid } from './components/Grid'

export const App = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'calc(100vh - 20px)',
    }}>
      <Grid />
    </div>
  )
}