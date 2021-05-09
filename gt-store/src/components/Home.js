import Menu from './Menu'
import MenuR from './MenuR'
import Gallery from './GalleryHome'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


function Home() {
  return (
    <div className="Home">
        <MenuR/>
        <br/>
        <br/>
        <br/>
        <Gallery/>
    </div>
  );
}

export default Home;