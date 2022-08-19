import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return(
        <div className={headerStyles.title}>
            <h1>
                <span>TrueBuilt</span> Project
            </h1>
        </div>
    )
}

export default Header