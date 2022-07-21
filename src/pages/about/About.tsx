import { Link } from 'react-router-dom'
import './about.scss'

const About: React.FC = () => {
    return (
        <>
            <h3 className='center mt2' >Page About</h3>
            <p className='center mt2' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem at mollitia culpa, quo sed rem necessitatibus eaque quibusdam obcaecati provident.</p>
            <Link to={'/'}><button style={{ display: 'block', margin: '2rem auto 0 auto' }} className="purple darken-3 darken-3 center btn">Go Home</button></Link>
        </>
    )
}

export default About