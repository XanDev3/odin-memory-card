import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function Footer(){
    return(
        <footer className="footer">
            <p>Xander© 2022</p>
            <a href="https://github.com/xandev3/odin-battleship">
            <FontAwesomeIcon icon={icon({ name: 'GitHub',style: 'brands'})} />
            </a>
    </footer>
    )
}

export default Footer
